import api from '../api/api';
import moment from 'moment';

const state = {
    userData: []
};

const mutations = {
    setUserData(state, userData) {
        state.userData = userData;
    }
};

const actions = {
    async fetchUserData({ commit }) {
        try {
            const { data } = await api.get('/user');
            const processData = data.map(data => {
                return {
                    ...data,
                    createdDate: moment(data.createdDate).format('DD-MM-YYYY'),
                    updatedDate: moment(data.updatedDate).format('DD-MM-YYYY')
                }
            })
            commit('setUserData', processData);
            return state.userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
};

const getters = {
    getUserData: (state) => state.userData
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
