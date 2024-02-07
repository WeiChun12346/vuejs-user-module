<template>
    <div>
        <h1>User Detail Page</h1>
        <div class="flex justify-content-center flex-wrap w-full">
            <Form @submit="handleSubmit">
                <div v-for="field in schemas.schema" :key="field.name">
                    <template v-if="field.type === 'date'">
                        <div class="field w-24rem mb-5">
                            <label :for="field.name">{{ field.label }}</label>
                            <Calendar dateFormat="dd-mm-yy" :id="field.name" :name="field.name" v-model="formData[field.name]"  />
                        </div>
                    </template>
                    <template v-else-if="field.type === 'password'">
                        <div v-if="this.showPasswordField" class="field w-24rem mb-5">
                            <label :for="field.name">{{ field.label }}</label>
                            <Password :id="field.name" :name="field.name" v-model="formData[field.name]"
                                :feedback="false" />
                        </div>
                    </template>
                    <template v-else>
                        <div class="field w-24rem mb-5">
                            <label :for="field.name">{{ field.label }}</label>
                            <Field :rules="field.validation" :id="field.name" :name="field.name" :type="field.type"
                                v-slot="{ field, meta }">
                                <InputText :id="field.name" :name="field.name" :type="field.type" v-bind="field"
                                    :value="formData[field.name]" @input="updateFormData(field.name, $event)"
                                    :class="{ 'p-invalid': meta.touched && meta.errors.length > 0 }" />
                            </Field>
                        </div>
                    </template>

                    <ErrorMessage :name="field.name" />
                </div>
                <div class="flex flex-wrap gap-3">
                    <Button v-if="this.isEdit" @click="handleUpdate">Update</Button>
                    <Button type="submit" v-if="!this.isEdit">Submit</Button>
                    <Button label="Reset" severity="secondary" @click="resetForm" />
                    <Button label="Back" severity="info" @click="$router.back()" />
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import schema from '@/schemas/user'
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
    name: 'UserDetail',
    components: {
        Password,
        Calendar,
        Field,
        Form,
        ErrorMessage,
        Button,
        InputText,
        InputGroup,
        InputGroupAddon
    },
    data() {
        return {
            userData: {},
            schemas: schema,
            formData: {},
            formErrors: {},
            userId: null,
            showPasswordField: true,
            isEdit: false,
        };
    },
    async created() {
        this.userId = this.$route.params.id;
        if (!this.userId) {
            this.schemas.schema.forEach((field) => {
                this.formData[field.name] = '';
            });
        } else {
            this.showPasswordField = !this.showPasswordField;
            this.isEdit = !this.isEdit;
            this.formData = await this.$store.dispatch('user/getUserData', this.userId);
        }
    },
    methods: {
        async handleSubmit() {
            try {
                await this.$store.dispatch('user/createUserData', this.formData);
                this.$router.push('/user');
            } catch (error) {
                console.log('Error in handleSubmit:', error);
            }
        },
        async handleUpdate() {
            try {
                await this.$store.dispatch('user/updateUser', { id: this.userId, formData: this.formData});
            } catch (error) {
                console.log('Error in handleSubmit:', error);
            }
        },
        resetForm() {
            this.formData = {};
        },
        updateFormData(fieldName, event) {
            this.formData[fieldName] = event.target.value;
        },
    }
};
</script>
<style>
.field {
    display: flex;
    flex-direction: column;
}

.p-password-input {
    width: 100%;
}
</style>