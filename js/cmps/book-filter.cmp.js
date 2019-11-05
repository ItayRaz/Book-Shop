export default ('book-filter', {
    template: `
    <section class="book-filter">
        <h2>Filter</h2>
        <input type="text" class="filter-by" placeholder="By Name" v-model="filterBy.name" />
        <input type="number" class="filter-by" placeholder="By Price" v-model.number="filterBy.price" />
    </section>
    `,
    data() {
        return {
            filterBy: {
                name : '',
                price: ''
            }
        }
    },
    
    created() {
        console.log('Filter Created', this.filterBy);
        this.$emit('filtered', this.filterBy)
    }
})