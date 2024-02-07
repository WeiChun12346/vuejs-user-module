import api from '../api/api';
import moment from 'moment';

const state = {
    userList: [],
    userData: {}
};

const mutations = {
    setUserList(state, userList) {
        state.userList = userList;
    },
    setUserData(state, userData) {
        state.userData = userData;
    }
};

const actions = {
    async fetchUserList({ commit }) {
        try {
            const { data } = await api.get('/user');
            const processData = data.map(data => {
                return {
                    ...data,
                    dateOfBirth: moment(data.dateOfBirth).format('DD-MM-YYYY'),
                    createdDate: moment(data.createdDate).format('DD-MM-YYYY'),
                    updatedDate: moment(data.updatedDate).format('DD-MM-YYYY')
                }
            })
            commit('setUserList', processData);
            return state.userList;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
    async createUserData({ commit }, formData) {
        try {
            await api.post('/user', { ...formData});
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
    async getUserData({ commit }, id) {
        try {
            const { data } = await api.get(`/user/${id}`);
            commit('setUserData', {
                ...data,
                dateOfBirth: moment(data.dateOfBirth).format('DD-MM-YYYY'),
                createdDate: moment(data.createdDate).format('DD-MM-YYYY'),
                updatedDate: moment(data.updatedDate).format('DD-MM-YYYY')
            });
            return state.userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
    async updateUser({ commit }, {id, formData}) {
        try {
            const { data } = await api.put(`/user/${id}`, { ...formData });
            commit('setUserData', data);
            return state.userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
    async deleteUser({ commit, dispatch  }, id) {
        try {
            await api.delete(`/user/${id}`).then(res => {
                dispatch('fetchUserList');
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    },
};

const getters = {
    getUserData: (state) => state.userData,
    getUserList: (state) => state.userList
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
