import { useStore } from 'vuex';

export const globalMixin = {
  beforeCreate() {
    const store = useStore();
    this.$store = store;
  },
  created() {
    this.$store = useStore();
  }
};