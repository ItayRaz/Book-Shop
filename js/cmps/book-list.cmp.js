'use strict'

import bookPreview from './book-preview.cmp.js';

export default ('book-list', {
    props: ['books'],
    template: `
    <section class="books-list-container">
        <div v-for="book in books"><router-link :to="'/book/' + book.id">
            <book-preview @click.native="handleBookClick(book.id)" :book="book">
        </book-preview></router-link></div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        handleBookClick(bookId) {
            this.$emit('selected', bookId)
        }
    },
    computed: {
        
    },
    components: {
        bookPreview
    }
})