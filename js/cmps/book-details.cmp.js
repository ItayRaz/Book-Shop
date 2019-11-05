'use strict'

import {eventBus} from '../services/event-bus-service.js'
import './long-text.cmp.js';
import reviewAdd from './review-add.cmp.js';
import booksService from "../services/book-service.js";


export default ('book-details', {
    props: ['book'],
    template: `
    <section v-if="bookToShow" class="books-details-container">
        <div class="book-details" :class="{expensive:bookToShow.listPrice.amount > 150, 
            cheap:bookToShow.listPrice.amount < 20}">
            <h3>{{bookToShow.title}}</h3>
            <img :src="bookToShow.thumbnail" class="book-details-img">
            <div>Authors: {{bookToShow.authors.join('')}}</div>
            <div><long-text :text="getDesc"></long-text></div>
            <div>Publish Year: {{bookToShow.publishedDate}}</div> <span>{{bookSeniority}}</span>
            <div>{{readingLength}}</div>
            <router-link :to="'/book/' + nextBookId">NEXT DOG &gt; </router-link>
            <div class="review-container">
            <div class="review" v-for="review in bookToShow.review">
                <div>User :{{review.name}}</div>
                <div>Date: {{review.date}}</div>
                <div>Rating:{{review.rate}}</div>
                <div>Review: {{review.text}}</div>
                <button @click="handleDeleteReview(review.id)">Delete Review</button>
            </div>
            </div>
            <router-link :to="'/book'"><button class="close-modal" @click="closeModal">Back</button>
            </router-link>
        </div>
        <div class="review-container">
            <review-add @addReview="addReview"></review-add>
        </div>
    </section>
    `,
    data() {
        return {
            bookToShow: null,
            nextBookId : null
        }
    },
    methods: {
        loadBook() {
            const bookId = this.$route.params.id;
            booksService.findBook(bookId)
                .then(book =>{
                    console.log(book);
                    
                    this.bookToShow = book
                    this.nextBookId = booksService.getNextIdBook(book.id)
                } )
        },
        closeModal() {
            this.$emit('closeModal');
        },
        addReview(review){
            booksService.addReview(review, this.bookToShow.id);
            eventBus.$emit('show-msg', 'Review Added Successfully')
        },
        handleDeleteReview(reviewId){
            booksService.deleteReview(reviewId, this.bookToShow.id)
            eventBus.$emit('show-msg', 'Review Deleted Successfully')
        }
    },
    computed: {
        readingLength() {
            if (this.bookToShow.pageCount > 500) return 'Long Reading';
            else if (this.bookToShow.pageCount > 200 && this.bookToShow.pageCount < 500) return 'Decent Reading'
            return 'Light Reading'
        },
        bookSeniority() {
            if (this.bookToShow.publishedDate < 2009) return 'A Veteran Book'
            else if(this.bookToShow.publishedDate > 2017) return 'New!'
        },
        getDesc() {
            return this.bookToShow.description
        }
    },
    created() {
        this.loadBook();
    },
    watch: {
        '$route.params.id'() {
            // console.log('Route param: "id" changed');
            this.loadBook();
        }
    },
    components:{
        reviewAdd
    }
})