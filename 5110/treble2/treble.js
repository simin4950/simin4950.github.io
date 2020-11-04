// making my api 
let tracks = [
    {
        name: 'Dynamite',
        artist: 'BTS',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/0t1kP63rueHleOhQkYSXFY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Watermelon Sugar',
        artist: 'Harry Styles',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/1e9oZCCiX42nJl0AcqriVo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'positions',
        artist: 'Ariana Grande',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/7igeByaBM0MgGsgXtNxDJ7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Say So',
        artist: 'Doja Cat',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/3Dv1eDb0MEgF93GpLXlucZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'No Time To Die',
        artist: 'Billie Eilish',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/73SpzrcaHk0RQPFP73vqVR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Wonder',
        artist: 'Shawn Mendes',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/5KCbr5ndeby4y4ggthdiAb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "Don't Start Now",
        artist: 'Dua Lipa',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6WrI0LAC5M1Rw2MnX2ZvEg" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'hot girl bummer',
        artist: 'blackbear',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/2mt1IqcFyY1zmYZT8Q3xw9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Senorita',
        artist: 'Shawn Mendes and Camila Cabello',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Shape of You',
        artist: 'Ed Sheeran',
        genre: 'pop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "Memory I Don't Mess With",
        artist: 'Lee Brice',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/7BQE1P0NUalHSvFtrxasx9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Nobody',
        artist: 'Dylan Scott',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/5TWAIHYaOnYg4txfmCgon5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'More Beer',
        artist: 'Lee Brice',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/4NmUNvMjX0LzztKePGtiC2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: '7 Summers',
        artist: 'Morgan Wallen',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/0tbjiOUl4k492KPdWZS9sy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'One Of Them Girls',
        artist: 'Lee Brice',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/14GwnOeC9qYEKEA6uOZepa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Other Girl',
        artist: 'Filmore',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/14GwnOeC9qYEKEA6uOZepa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Remind You',
        artist: 'John Gurney',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/4z9IdjFk4XrnhQddpViXeG" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Used to It',
        artist: 'Rachel Wiggins',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/3tbvbMUxUfLe2roC3ulCPZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Project',
        artist: 'Elana Jane',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/3Sxy91cmQTnBPXDj2VzaeG" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Bluebird',
        artist: 'Miranda Lambert',
        genre: 'country',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/0kPeZAyIhIfeZNrtfjJGDB" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'CROWN',
        artist: 'TOMORROW X TOGETHER',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/32h6yQGn4oAhZ0HRsTMX26" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'HIP',
        artist: 'MAMAMOO',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/24nK8tW7Pt3Inh2utttuoG" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'CROWN',
        artist: 'TOMORROW X TOGETHER',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/32h6yQGn4oAhZ0HRsTMX26" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Pirate King',
        artist: 'ATEEZ',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/5Jl2i6LR3Socm4TYqRzZw3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'CROWN',
        artist: 'TOMORROW X TOGETHER',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/32h6yQGn4oAhZ0HRsTMX26" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'CROWN',
        artist: 'TOMORROW X TOGETHER',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/32h6yQGn4oAhZ0HRsTMX26" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },


    {
        name: 'Daechwita',
        artist: 'Agust D',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/0H4ugk6rhnXmTl47ayy9O5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Black Swan',
        artist: 'BTS',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/3bkkMZEAhx7rTVz1C0itRQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'UGH!',
        artist: 'BTS',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/1aKuG1GG76xPLUkjBbQo3W" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'FAKE LOVE',
        artist: 'BTS',
        genre: 'kpop',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/3aW0ds4A4tSQDIp75FqWTo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Hysteria',
        artist: 'Muse',
        genre: 'rock',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/7xyYsOvq5Ec3P4fr6mM9fD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Time is Running Out',
        artist: 'Muse',
        genre: 'rock',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/2takcwOaAZWiXQijPHIx7B" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Butterfly',
        artist: 'Crazy Town',
        genre: 'rock',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/4BggEwLhGfrbrl7JBhC8EC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'High Hopes',
        artist: 'Panic! At The Disco',
        genre: 'rock',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/1rqqCSm0Qe4I9rUvWncaom" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Life is a Highway',
        artist: 'Rascal Flatts',
        genre: 'rock',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/5YbeJyTQkdSAWe1Ie4sLAl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Into the Unknown - Panic! At The Disco Version',
        artist: 'Panic! At The Disco',
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/421eObjg0DTm2qajJl5OJm" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "How Far I'll Go",
        artist: "Auli'l Cravalho",
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6mb6lVLNrcUgLnEN8QnDJd" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'A Whole New World',
        artist: 'ZAYN, Zhavia Ward',
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/4U9CF27YlwHRtUGKUzhUTT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "You're Welcome" ,
        artist: 'Dwayne Johnson',
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6U4VqEHy4n5VeiH4pQPL24" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "I'll Make a Man Out of You",
        artist: 'Donny Osmond',
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/28UMEtwyUUy5u0UWOVHwiI" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: "You've Got a Friend in Me",
        artist: 'Randy Newman',
        genre: 'disney',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/2stkLJ0JNcXkIRDNF3ld6c" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Dancing With A Stanger (with Normani)',
        artist: 'Sam Smith and Normani',
        genre: 'sim-faves',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6Qs4SXO9dwPj5GKvVOv8Ki" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Dil Mein Chhupa Loonga',
        artist: 'Meet Bros and Armaan Malik',
        genre: 'sim-faves',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/1kq9Ui5HZg2vTApVB0Cbru" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Like',
        artist: 'BTS',
        genre: 'sim-faves',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/1HQHuPpr2s2z3VIBTLtUmv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Kamoshyian',
        artist: 'Jeet Gannguli, Arjit Singh',
        genre: 'sim-faves',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6zCQF5tu7HVwU9shhKqiuF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    },

    {
        name: 'Graveyard',
        artist: 'Halsey',
        genre: 'sim-faves',
        embedLink: '<iframe src="https://open.spotify.com/embed/track/6V9fHiv84WlVTg7CSnIVY2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
    }

]

let track = document.querySelector('#track');
let track_details = document.querySelector('#track-details');
let notify = document.querySelector('#notification');
let superlike_results = document.querySelector('#superliked');
let like_results = document.querySelector('#liked');
let dislike_results = document.querySelector('#disliked');

var length = tracks.length;
var like = [];
var superlike = [];
var dislike = [];

var current = Math.floor(Math.random() * tracks.length);

// by default
track.innerHTML = tracks[current].embedLink;
track_details.innerHTML = "<div='name'>" + tracks[current].name + "</div>" + "<div id='artist'>" + tracks[current].artist  + "</div>" + "<div id='genre'>" + tracks[current].genre + "</div>";

function liked() {
    if(tracks.length != 1){
        like.push(tracks[current]);
        console.log('removing '+ tracks[current].name)
        tracks.splice(current, 1);
    } else {
        results();
    }
    

    current = Math.floor(Math.random() * tracks.length);

    track.innerHTML = tracks[current].embedLink;
    track_details.innerHTML = "<div='name'>" + tracks[current].name + "</div>" + "<div id='artist'>" + tracks[current].artist  + "</div>" + "<div id='genre'>" + tracks[current].genre + "</div>";
}

function superliked() {
    if(tracks.length != 1){
        superlike.push(tracks[current]);
        console.log('removing '+ tracks[current].name)
        tracks.splice(current, 1);
    } else {
        results();
    }
    current = Math.floor(Math.random() * tracks.length);

    track.innerHTML = tracks[current].embedLink;
    track_details.innerHTML = "<div='name'>" + tracks[current].name + "</div>" + "<div id='artist'>" + tracks[current].artist  + "</div>" + "<div id='genre'>" + tracks[current].genre + "</div>";
}

function disliked() {
    if(tracks.length != 1){
        dislike.push(tracks[current]);
        console.log('removing '+ tracks[current].name)
        tracks.splice(current, 1);
    } else {
        results();
    }

    current = Math.floor(Math.random() * tracks.length);

    track.innerHTML = tracks[current].embedLink;
    track_details.innerHTML = "<div='name'>" + tracks[current].name + "</div>" + "<div id='artist'>" + tracks[current].artist  + "</div>" + "<div id='genre'>" + tracks[current].genre + "</div>";
}

function results() {
    superlike_results.innerHTML = "<h3>You superliked the following songs: </h3>";
    for(var i = 0; i < superlike.length; i ++){
        superlike_results.innerHTML += superlike[i].name;
        if (i != superlike.length - 1) {
            superlike_results.innerHTML += ', ';
        }
    }

    like_results.innerHTML = "<h3>You liked the following songs: </h3>";
    for(var i = 0; i < like.length; i ++){
        like_results.innerHTML += like[i].name;
        if (i != like.length - 1) {
            like_results.innerHTML += ', ';
        }
    }

    dislike_results.innerHTML = "<h3>You disliked the following songs: </h3>";
    for(var i = 0; i < dislike.length; i ++){
        dislike_results.innerHTML += dislike[i].name;
        if (i != dislike.length - 1) {
            dislike_results.innerHTML += ', ';
        }
    }
}
