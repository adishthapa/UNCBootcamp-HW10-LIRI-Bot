// Required packages/files
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var fs = require("fs");

// BandsInTown API Key
var bandsintown = keys.bandsintown;
// OMDB API Key
var omdb = keys.omdb;
// Spotify API Key
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

function concertThis(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + bandsintown)
    .then(function (response) {
        // var were = response.data
        // console.log(were);
        if (response.data != "\n{warn=Not found}\n" && response.data.length > 0) {
            console.log("-------------------------------------------------------\n")
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue Name: " + response.data[i].venue.name + "\n");
                console.log("Country: " + response.data[i].venue.country);
                console.log("City: " + response.data[i].venue.city);
                console.log("Region: " + response.data[i].venue.region + "\n");
    
                var concertDate = response.data[i].datetime;
                concertDate = moment(concertDate).format("MM/DD/YYYY")
                console.log("Date: " + concertDate);
                if (i === response.data.length - 1) {
                    console.log("\n-------------------------------------------------------") 
                } else {
                    console.log("\n-------------------------------------------------------\n")
                }
                
            }
        } else {
            console.log("-------------------------------------------------------\n")
            console.log("Sorry, no upcomming events found for '" + artist +"'");
            console.log("\n-------------------------------------------------------")
        }
        
    }).catch(function (error) {
        console.log("-------------------------------------------------------\n")
        console.log("Sorry, an error has occured. Please try again later.");
        console.log("\n-------------------------------------------------------")
    })
};

switch(command) {
    case "concert-this":
        var artist = "";
        for (var i = 3; i < process.argv.length; i++) {
            if (i === process.argv.length - 1) {
                artist += process.argv[i];
            } else {
                artist += process.argv[i] + " ";
            }
            
        }
        if (artist) {
            concertThis(artist);
        } else {
            console.log("+-----------------------------------------------------+")
            console.log("|                                                     |")
            console.log("| Please make sure to enter the name of an Artist or  |")
            console.log("| a Band after the command.                           |")
            console.log("|                                                     |")
            console.log("| Example:                                            |")
            console.log("|                                                     |")
            console.log("| node liri.js concert-this '<artist/band name here>' |");
            console.log("|                                                     |")
            console.log("+-----------------------------------------------------+")
        }
        break;
    case "spotify-this-song":
        var song = "";
        for (var i = 3; i < process.argv.length; i++) {
            song += process.argv[i];
        }
        if (song) {
            console.log(song);
        } else {
            console.log("+-----------------------------------------------------+")
            console.log("|                                                     |")
            console.log("| Please make sure to enter the name of a Song after  |")
            console.log("| the command.                                        |")
            console.log("|                                                     |")
            console.log("| Example:                                            |")
            console.log("|                                                     |")
            console.log("| node liri.js spotify-this-song '<song name here>'   |");
            console.log("|                                                     |")
            console.log("+-----------------------------------------------------+")
        }
        break;
    case "movie-this":
        var movie = "";
        for (var i = 3; i < process.argv.length; i++) {
            movie += process.argv[i];
        }
        if (movie) {
            console.log(movie);
        } else {
            console.log("+-----------------------------------------------------+")
            console.log("|                                                     |")
            console.log("| Please make sure to enter the name of a Movie after |")
            console.log("| the command.                                        |")
            console.log("|                                                     |")
            console.log("| Example:                                            |")
            console.log("|                                                     |")
            console.log("| node liri.js movie-this '<movie name here>'         |");
            console.log("|                                                     |")
            console.log("+-----------------------------------------------------+")
        }
        break;
    case "do-what-it-says":
        break;
    default:
        console.log("+-----------------------------------------------------+")
        console.log("|                                                     |")
        console.log("| The given command is not recognized.                |");
        console.log("|                                                     |")
        console.log("| Please try one of the following commands instead:   |");
        console.log("|                                                     |")
        console.log("| node liri.js concert-this '<artist/band name here>' |");
        console.log("| node liri.js spotify-this-song '<song name here>'   |");
        console.log("| node liri.js movie-this '<movie name here>'         |");
        console.log("| node liri.js do-what-it-says                        |");
        console.log("|                                                     |")
        console.log("+-----------------------------------------------------+")
};