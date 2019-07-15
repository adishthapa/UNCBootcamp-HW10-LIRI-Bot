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