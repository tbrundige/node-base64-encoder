#!/usr/bin/env node

// Get the arguments.
const appArgs = process.argv.slice(2);

// Create an object to store helptext for each flag. 
const usageInfo = {
  "e": "Use -e <stringToEncode> to base64 encode a ASCII string.",
  "d": "Use -d <stringToDecode> to decode a base64 encoded string.",
  "h": "Use -h to display usage info."
};

// Create an object to store possible errors.
const error = {
  "default": "Error: Please use -h or --help to view usage info.",
  "tooManyArguments": "Error: Too many arguments. Please use -h or --help for usage info.",
  "tooFewArguments": "Error: Nothing to encode/decode or flag not specifed.",
};

// Check if sufficient info is provided e.g a flag and a string to encode or decode.
// Return error message if too few or too many arugments.
// Proceed to to encode or decode provided string.
if (appArgs.length > 2) {
  console.log(error.tooManyArguments);
} else if (appArgs.length < 2 && appArgs[0] !== "-h") {
  console.log(error.tooFewArguments);
} else {
  if (appArgs[0] === "-e") {
    let encodedString = base64Encoder(appArgs[1]);
    console.log(encodedString);
  } else if (appArgs[0] === "-d") {
    let decodedString = base64Decoder(appArgs[1]);
    console.log(decodedString);
  } else if (appArgs[0] === "-h") {
    for (const helpText in usageInfo) {
      console.log(usageInfo[helpText]);
    }
  } else {
    console.log(error.default);
  }
}

// This function encodes the provided string to Base64.
function base64Encoder(stringToEncode) {
  try {
    let encodedString = Buffer.from(stringToEncode).toString("base64");
    return encodedString;
  } catch (err) {
    return;
  }
}

// This function decodes Base64 strings.
function base64Decoder(stringToDecode) {
  try {
    let decodedString = Buffer.from(stringToDecode, "base64").toString();
    return decodedString;
  } catch (err) {
    return;
  }
}
