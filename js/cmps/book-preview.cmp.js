'use strict'


export default ('book-preview', {
    props: ['book'],
    template: `
    <section class="books-prev-container">
        <div class="book">
            <img v-if="book.thumbnail" :src="book.thumbnail" class="book-img"/>
            <img v-else src="http://i.imgur.com/sJ3CT4V.gif">
            <div>{{book.title}}</div>
            <div>{{setPrice}}</div>
        </div>
    </section>
    `,
    data() {
        return {
            
        }
    },
    computed: {
        setPrice() {
            if (!this.book.listPrice['amount']) return `No Price Available`            
            if (this.book.listPrice.currencyCode === "EUR") return `${this.book.listPrice.amount} €`
            else if (this.book.listPrice.currencyCode === 'USD') return `${this.book.listPrice.amount} $`
            return `${this.book.listPrice.amount} ₪`
        }
    }
})