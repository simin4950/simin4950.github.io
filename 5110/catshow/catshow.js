Vue.component('catshow', {
    props: {
        whichcat: String,
    },
    template: 
        /*html*/
        `<div>
        <br><br><br>
           <button v-on:click="slideshow()">slideshow</button>
                <h2>{{ image.breeds[0].name }}</h2>
                <h3>{{ image.breeds[0].description }} </h3>
                <img :src="image.url"><br>
                <br>
                <p><b>Temperament:</b> {{ image.breeds[0].temperament }} </p>
                <p><b>Origin:</b> {{ image.breeds[0].origin }} </p>
                <b>Children Friendly: </b><div v-html="loadStars(image.breeds[0].child_friendly)"></div></p>
                <b>Energy Level: </b><div v-html="loadStars(image.breeds[0].energy_level)"></div></p>
        </div>`,

    data() {
        return {
            image: "",
            allofit: [],
            i: 0
        }
    },
    created() {
        this.loadNextImage(this.whichcat);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46" 
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
                this.allofit = response.data;
             
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
             this.i++;
        },

        loadStars(value) {
            switch (value) {
                case 0:
                    return `<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                case 1:
                    return `<span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                case 2: 
                    return `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                case 3:
                    return `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                case 4: 
                    return `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>`
                case 5:
                    return `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>`
                default:
                     return `<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
            }
        }
    }
})

      new Vue({
            el: '#cats',
            data: {
                image: "",
                whichcat: "abob",
                allofit: [],
                i: 0
            },
            created() {
                this.loadNextImage(this.whichcat);
            },
            methods: {
                async loadNextImage(breedID) {
                    try {
                        axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46" 
                        let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                            params: {
                                limit: 10,
                                size: "full"
                            }
                        })
                        this.allofit = response.data;
                     
                    } catch (err) {
                        console.log(err)
                    }
                    this.slideshow()
                },
                async slideshow() {

                    if (this.i >= this.allofit.length) {
                        this.i = 0;
                    }
                    this.image = this.allofit[this.i];
                     this.i++;
                }
            }
        })