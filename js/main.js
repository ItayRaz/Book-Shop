'use strict'

import './services/event-bus-service.js'
import theRouter from './routes.js'
import appHeader from './cmps/app-header.cmp.js';
import userMessage from './cmps/user-message.cmp.js'

new Vue({
    router: theRouter, 
    el:'#my-app',
    template: `
        <section class="root">
            <app-header></app-header>
            <user-message></user-message>
            <router-view></router-view>
        </section>
    `,
    data: {
        
    },
    methods: {
        
        
    },
    computed: {
       
    },
    
    components: {
        appHeader,
        userMessage
    }
})