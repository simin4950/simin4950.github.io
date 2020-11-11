var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Simin Savani',
        description: 'I love Sriracha',
        avatar: "images/puppy.jpg",
        link1: "Introduction",
        link2: "Fav Desserts",
        link3: "About Me",
        link4: "Contact",
        link5: "My List"
    }
})

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: "Simin's Favorite Desserts",
        portfolioDescription: "Simin has a super sweet tooth and loves eating desserts, even as a meal, because why not? Check out her favorite desserts!",
        image1: "images/image1.jpg",
        imgText1: "Black Forest Cake",
        image2: "images/image3.jpg",
        imgText2: "Churros",
        image3: "images/image2.jpg",
        imgText3: "Gulab Jamun",
        image4: "images/image4.jpg",
        imgText4: "Strawberry Cheesecake Ice Cream",
        image5: "images/image5.jpg",
        imgText5: "Doughnuts",
        image6: "images/image6.jpg",
        imgText6: "Bubble Tea"
    }
})

var intro = new Vue({
    el: '#top',
    data: {
        heading: "Hi! I am Simin, a major foodie.",
        descriptionHeading: "It's not the destination that matters, it's the food you get along the way!",
        buttonHeading: "Learn More!"
    }
})

var about = new Vue({
    el: '#about',
    data: {
        aboutHeading: "About Me",
        avatar: "images/puppy.jpg",
        descriptionAbout: "Food is an important part of our lives. We need it to survive and to bask in the little joys of life, which is eating--if that wasn't clear. People won't be there for you, but you know what will? Food. Food will always be by your side and helping you get through the toughest, most stressful times in your life. As you all can probably tell, I love food and most imporantly desserts. I hope that one day I get to go on a world tour and try different desserts and foods around the world. "
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        contactHeading: "Contact Me",
        descriptionContact: "Send me a message and let me know what your favorite foods are!"
    }
})

var list = new Vue({
    el: '#list',
    data: {
        link5: "My List",
        favorites: ["Viva Mexico", "Hotel Del Luna", "Pauley's Crepe Bar", "Athens Wok", "Thai Spoon", "Clocked", "Cali and Tito's"]
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        headingConditional: "Conditional",
        teacherName: 'ok'
    }
})

var getcolor = new Vue({
    el: '#function',
    data: {
        functionHeading: "Function",
        bgColor: '',
        colors: ['red', 'green', 'blue']
    },
    methods: {
        changeColor(color){
            this.bgColor = color
        }
    }
})