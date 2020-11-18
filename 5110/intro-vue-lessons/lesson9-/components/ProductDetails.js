app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },

    template: 
    /*html*/
    `<p>Details: {{ details }}</p>`
})