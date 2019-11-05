'use strict'

import bookList from './book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookFilter from './book-filter.cmp.js';
import booksService from "../services/book-service.js";
import bookAdd from './book-add.cmp.js';

export default {
    template: `
        <section class="root">
            <book-filter @filtered="setFilter"></book-filter> 
            <book-list :books="booksToShow" @selected="selectBook"></book-list> 
            <book-details v-if="isShowingDetails && selectedBook" :book="selectedBook" @closeModal="closeModal"></book-details>

        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            selectedBook: null,
            isShowingDetails: false
        }
    },
    methods: {
        selectBook(id) {
            this.isShowingDetails = true;
            booksService.findBook(id)
                .then(book => this.selectedBook = book)
        },
        closeModal() {
            this.isShowingDetails = false;
        },
        setFilter(filter){            
            this.filterBy = filter
        }
    },
    computed: {
        booksToShow() {
            
            if (!this.filterBy) return this.books;
            console.log(this.filterBy);
            
            var regex = new RegExp(`${this.filterBy.name}`, 'i');

            return this.books.filter(book => 
                regex.test(book.title) && book.listPrice.amount >= this.filterBy.price
            )
        }
    },
    created() {
        booksService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
        bookAdd
    }
}