'use strict'


export default ('review-add',{ 
    props:'bookName',
    template: `
        <section class="review-add">
            <h2>Add Review</h2>

            <form class="review-form" action="">
            <input type="text" placeholder="Your Name" v-model.trim="review.name"/>
            <select v-model.number="review.rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="date" v-model="review.date"/>
            <textarea v-model="review.text" cols="30" rows="5"></textarea>
            <button @click.prevent="handleReview">Add</button>
            </form>
        </section>
    
    
    `,
    data() {
        return {
            review: {
                book: this.bookName,
                name: 'Book Reader',
                rate: 0,
                date: '',
                text: ''
            }
        }
    },
    methods: {
        handleReview() {
            this.$emit('addReview', this.review)
            this.review = {
                book: this.bookName,
                name: 'Book Reader',
                rate: 0,
                date: '',
                text: ''
            }
        }
    }

})