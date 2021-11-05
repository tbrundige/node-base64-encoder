#!/usr/bin/env node

//Import yargs to pass arguments to nodeapp
const yargs = require("yargs");

//Define arguments
const options = yargs
  .usage("Usage: -e <stringToEncode>")
  .option("e", {
    alias: "",
    describe: "Encode String",
    type: "stringToEncode",
    demandOption: false,
  })
  .usage("Usage: -d <base64ToDecode>")
  .option("d", {
    alias: "",
    describe: "Decode String",
    type: "stringToDecode",
    demandOption: false,
  }).argv;

//Get the data from arguments.
//todo - get data from alias to enable usage of both short form and long form eg. -e --encode, -d --decode
let stringToEncode = options.e;
let stringToDecode = options.d;


//Encode ASCII string to base64
if (options.e !== undefined) {
  console.log("Base64 Encoded: " + Buffer.from(stringToEncode).toString('base64'));
}

//Decode base64 string to ASCII test
if (options.d !== undefined) {
  console.log("Decoded Text: " + Buffer.from(stringToDecode, "base64").toString());
} 

//todo - Provide feedback if invlaid parameters are used
