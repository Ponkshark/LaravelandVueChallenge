import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpQuotes = [
    {
        id: 100,
        title: "Quote 1",
        slug: "quote-1",
        status: "True",
        image: "https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 101,
                name: "computer",
                price: 500,
                quantity: 10,
            },
            {
                id: 102,
                name: "keyboard",
                price: 50,
                quantity: 15,
            },
            {
                id: 103,
                name: "mouse",
                price: 25,
                quantity: 15,
            },
        ],
    },
    {
        id: 200,
        title: "Quote 2",
        slug: "quote-2",
        status: "False",
        image: "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 201,
                name: "easle",
                price: 100,
                quantity: 1,
            },
            {
                id: 202,
                name: "paint brush",
                price: 5,
                quantity: 12,
            },
            {
                id: 203,
                name: "paint can",
                price: 17,
                quantity: 20,
            },
        ],
    },
    {
        id: 300,
        title: "Quote 3",
        slug: "quote-3",
        status: "True",
        image: "https://cdn.pixabay.com/photo/2015/04/20/06/43/meeting-room-730679_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 201,
                name: "television",
                price: 500,
                quantity: 1,
            },
            {
                id: 202,
                name: "chair",
                price: 12,
                quantity: 25,
            },
            {
                id: 203,
                name: "table",
                price: 150,
                quantity: 1,
            },
        ],
    },
    {
        id: 400,
        title: "Quote 4",
        slug: "quote-4",
        status: "True",
        image: "https://cdn.pixabay.com/photo/2019/10/26/01/46/building-4578492_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 401,
                name: "kilo of bricks",
                price: 40,
                quantity: 20,
            },
            {
                id: 402,
                name: "kilo of lumber",
                price: 100,
                quantity: 15,
            },
        ],
    },
    {
        id: 500,
        title: "Quote 5",
        slug: "quote-5",
        status: "False",
        image: "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 501,
                name: "chalkboard",
                price: 200,
                quantity: 1,
            },
            {
                id: 502,
                name: "chair",
                price: 12,
                quantity: 40,
            },
            {
                id: 503,
                name: "small table",
                price: 15,
                quantity: 40,
            },
        ],
    },
    {
        id: 600,
        title: "Quote 6",
        slug: "quote-6",
        status: "True",
        image: "https://cdn.pixabay.com/photo/2017/03/20/21/00/server-2160321_960_720.jpg",
        description: "Example description",
        items: [
            {
                id: 601,
                name: "server",
                price: 500,
                quantity: 10,
            },
            {
                id: 602,
                name: "data center",
                price: 400,
                quantity: 10,
            },
            {
                id: 603,
                name: "bundle of wires",
                price: 10,
                quantity: 20,
            },
        ],
    },
];

const store = createStore( {
    state: {
        user: {
            data: {name: 'Kyle'},
            token: null
        },
        quotes: [...tmpQuotes],
    },
    getters: {},
    actions: {
        saveQuote({commit}, quote){
            let response;
            if (quote.id) {
                reponse = axiosClient
                    .put(`/quote/${quote.id}`, quote)
                    .then ((res) => {
                        commit("updateQuote", res.data);
                    });
            } else {
                response = axiosClient.post("/quote", quote).then ((res) => {
                    commit("saveQuote", res.data);
                    return res;
                });
            }
            return response;
        },
        deleteQuote({}, id) {
            return axiosClient.delete(`/quote/${id}`);
        },
    },
    mutations: {
        saveQuote: (state, quote) => {
            state.quotes = [...state.quotes, quote.data];
        },
        updateQuote: (state, quote) => {
            state.quotes = state.quotes.map((q) => {
                if (q.id == quote.data.id) {
                    return quote.data;
                }
                return q;
            });
        },
    },
    modules: {}
})

export default store;