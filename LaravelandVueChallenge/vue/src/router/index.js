import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Quotes from '../views/Home.vue'
import Quotetable from '../views/Quotetable.vue'
import QuoteView from '../views/QuoteView.vue'
import QuoteViewWithoutEdit from '../views/QuoteViewWithoutEdit.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            { path: "/quotes", name:"Quotes", component: Quotes},
            { path: "/quotes/create", name:"QuoteCreate", component: QuoteView},
            { path: "/QuoteView/:id", name:"QuoteView", component: QuoteView},
            { path: "/QuoteViewWithoutEdit/:id", name:"QuoteViewWithoutEdit", component: QuoteView},
        ],
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/quotetable',
        name: 'Quotetable',
        component: Quotetable
    },
    {
        path: '/quoteview',
        name: 'QuoteView',
        component: QuoteView
    },
    {
        path: '/quoteviewwithoutedit',
        name: 'QuoteViewWithoutEdit',
        component: QuoteViewWithoutEdit
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;