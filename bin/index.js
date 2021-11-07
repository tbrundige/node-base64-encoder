#!/usr/bin/env node

// Import yargs to pass arguments to nodeapp
const yargs = require("yargs");

// Define arguments
const options = yargs
  .usage("Usage: -e <stringToEncode>")
  .option("e", {
    alias: "encode",
    describe: "String to Encode",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -d <base64ToDecode>")
  .option("decode", {
    alias: "decode",
    describe: "String to Decode",
    type: "string",
    demandOption: false,
  })
  .usage("Usage: -p")
  .option("p", {
    alias: "pipe",
    describe: "Pipe option, removes the encode and decode labels on output ",
    type: "boolean",
    demandOption: false,
  }).argv;

function base64Encoder(string) {
  try {
    let encodedString = Buffer.from(string).toString("base64");
    return encodedString;
  } catch (err) {
    return;
  }
}

function base64Decoder(string) {
  try {
    let decodedString = Buffer.from(string, "base64").toString();
    return decodedString;
  } catch (err) {
    return;
  }
}

//todo - get data from alias to enable usage of both short form and long form eg. -e --encode, -d --decode

// Perform the encoding and decoding.
let encodedString = base64Encoder(options.e);
let decodedString = base64Decoder(options.d);

if (encodedString !== undefined) {
  if (options.p) {
    console.log(encodedString);
  } else {
    console.log("Base64 Encoded: " + encodedString);
  }
}

if (decodedString !== undefined) {
  if (options.p) {
    console.log(decodedString);
  } else {
    console.log("Decoded String: " + decodedString);
  }
}

//console.log(options)

//todo - Provide feedback if invlaid parameters are used
