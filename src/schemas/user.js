import * as Yup from 'yup';

export default {
    schema: [
        {
            name: "name",
            label: "Name",
            validation: 'required'
        },
        {
            name: "email",
            type: "email",
            label: "Email",
            validation: 'required|email'
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            validation: 'required'
        },
        {
            name: "dateOfBirth",
            type: "date",
            label: "Date Of Birth",
            validation: 'required'
        },
    ]
}
