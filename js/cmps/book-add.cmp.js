'use strict'

import {eventBus} from '../services/event-bus-service.js'
import booksService from '../services/book-service.js'

export default {
    template: `
        <section @submit.prevent="handleSearch" class="book-add">
            <h1>Add A Book!</h1>
            <form action="">
                <input v-model="keyWord" type="search" placeholder="Search A Book">
                <button>Search</button>
                <div v-if="results.length > 0" class="results-container">
                    <div v-for="result in results">
                        <h5>{{result.volumeInfo.title}}</h5> 
                        <img v-if="result.volumeInfo.imageLinks" :src="result.volumeInfo.imageLinks.thumbnail">
                        <img v-else src="http://i.imgur.com/sJ3CT4V.gif">
                        <button @click="addToBooks(result.selfLink)">+</button>
                    </div>

                </div>
            </form>
        </section>
    
    `,
    data() {
        return {
            keyWord: '',
            results: []
        }
    },
    methods: {
        handleSearch(){
            booksService.searchBook(this.keyWord)
                .then(books => {
                    return this.results = books
                    
                })   
        },
        addToBooks(bookUrl) {
            booksService.addBook(bookUrl)
                .then(eventBus.$emit('show-msg', 'Book Added Successfully'))
        }
    },

}