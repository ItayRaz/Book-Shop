'use strict'


Vue.component('long-text', {
    props: ['text'],
    template: `
    <section :class="{'long-text': isBiggerThan100}">
        <div @click="toggleText">{{textDesc}}</div>
    </section>
    `,
    data() {
        return {
            textDesc: this.text,
            isBiggerThan100: false
        }
    },
    methods: {
        toggleText() {
            this.textDesc = this.text;
        }
    },
    created() {
        if (this.text.length > 100) {
            this.textDesc = this.text.substring(0,100) + '...';
            this.isBiggerThan100 = true;
        }
    }
    
})