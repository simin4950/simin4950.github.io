// This class has all the methods needed to generate json data from Spotify
const APIController = (function() {
    const clientId = '';
    const clientSecret = '';

    const _getToken = async() => {
        const result = await fetch('https://acounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type-client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const _getGenres = async(token) => {
        const result = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }

    const _getTracks = async(token, genreId) => {
        const limit = 50;

        const result = await fetch('https://api.spotify.com/v1/recommendations?limit=' + limit 
        + '&market=US&seed_genres=' + genreId + '&min_popularity=0&max_popularity=100&market=US', {
            method: 'GET', 
            headers: { 'Accept' : 'application/json', 
                'Content-Type' : 'application/json', 
                'Authorization' : 'Bearer ' + token}
        });

        const data = result.json();
        return data.items;
    }

    const _getTrack = async(token, trackEndPoint) => {
        const result = await fetch(trackEndPoint, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer ' + token}
        })
    }

    return {
        getToken() {
            return _getToken();
        },
        
        getGenres(token) {
            return _getGenres(token);
        },

        getTracks(token, genreId) {
            return _getTracks(token, genreId);
        },

        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint)
        }
    }
})(); 

// This class outputs the json data to the webpage
const UIController = (function() {

    const DOMElements = {
        genre = '#genres',
        tracks = '#track'
    }
})();

let genres = document.querySelector("#genres");

$(document).ready(function() {
    $.getJSON('https://api.spotify.com/v1/recommendations/available-genre-seeds', function(data) {
        for(var i = 0; i < data.length; i++){
            students.innerHTML += "<div id='genre'>" + data[i].genres + "</div>";
        } 
    });
});