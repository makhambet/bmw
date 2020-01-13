import api from '@/help/api'


let state = {
    adverts: [],

    advert_show: []
}
let mutations = {
    SET_ADVERTS: async(state, payload) => {
        await(payload)
            state.adverts = payload;
    },

    SET_ADVERT_SHOW: async(state, payload) => {
        await(payload)
            state.advert_show = payload;
    },
}

let actions = {
    GET: async(context, payload) => {
        let 
            name = payload[1].name,
            request = payload[0],
            urlName, setName, res;
        switch (name) {
            case 'adverts':
                urlName = '/users';
                setName = 'SET_ADVERTS';
                break;
        };

        await api.get(urlName, {
            params: request
        })
        .then( response => (
            console.log(response),
            res = response.data
        ))
        .catch( error => (
            console.log(error.response),
            res = error.response
        ))
        context.commit(setName, res);
    },
    GET_SHOW: async(context, payload) => {
        let 
            name = payload[1].name,
            request = payload[0],
            id = payload[2].id,
            urlName, setName, res;
        switch (name) {
            case 'advert':
                urlName = '/users/' + id;
                setName = 'SET_ADVERT_SHOW';
                break;
        };

        await api.get(urlName, {
            params: request,
        })
        .then( response => (
            console.log(response.data.data),
            res = response.data.data
        ))
        .catch( error => (
            console.log(error.response),
            res = error.response
        ))
        context.commit(setName, res);
    }
}

export default {
    state,
    actions,
    mutations,
}