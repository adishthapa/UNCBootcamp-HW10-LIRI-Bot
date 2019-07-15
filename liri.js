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

switch(command) {
    case "concert-this":
        console.log("A");
        break;
    case "spotify-this-song":
        console.log("B");
        break;
    case "movie-this":
        console.log("C");
        break;
    case "do-what-it-says":
        console.log("D");
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