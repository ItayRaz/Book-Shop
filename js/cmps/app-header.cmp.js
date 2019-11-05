'use strict'


export default ('app-header',{
    template: `
    <section class="header">
        <h1>Miss Book</h1>
            <nav>
                    <router-link to="/">Home</router-link> 
                    <router-link to="/about">About</router-link> 
                    <router-link to="/book">Book Shop</router-link> 
                    <router-link to="/add">Add Book</router-link> 
                </nav>
    </section>
    `
})