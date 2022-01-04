#!/usr/bin/env node

// Import readline, to allow user to run the app without flags and with user prompts. 
const readline = require("readline");

// Get the arguments and store them as JSON object.
const appArgs = {
  flag: process.argv[2],
  stringToManipulate: process.argv[3],
};

// Flags in use.
const flag = ["-e", "-d", "-h"];

// Create an object to store helptext for each flag.
const usageInfo = {
  default: "Use b64 with no arguments for user prompt.",
  e: "Use -e <stringToEncode> to base64 encode a ASCII string. Use \"<stringToEncode>\" if string contains special characters.",
  d: "Use -d <stringToDecode> to decode a base64 encoded string. Use \"<stringToDecode>\" if string contains special characters.",
  h: "Use -h to display usage info.",
};

// Create an object to store possible errorMsgs.
const errorMsg = {
  default: "Error: Please use -h to view usage info.",
  tooManyArguments: "Error: Too many arguments. Please use -h for usage info.",
  tooFewArguments: "Error: Nothing to encode/decode or flag not specifed. Please use -h for usage info.",
  failedToEncode: "Error: Failed to encode.",
  failedToDecode: "Error: Failed to decode.",
  noStringProvided: "Error: No String Provided.",
};

// Check if flag is present. If no flag, prompt user.
if (!flag.includes(appArgs.flag)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Would you like to Encode or Decode? ",
    function (encodeOrDecode) {
      rl.question(
        "What is the string you would like to manipulate? ",
        function (stringToManipulate) {
          if (stringToManipulate === '' ) {
            console.log(errorMsg.noStringProvided);
          
          } else if (encodeOrDecode.toLowerCase() === "encode") {
            let encodedString = base64Encoder(stringToManipulate);
            console.log(encodedString);
          
          } else if (encodeOrDecode.toLowerCase() === "decode") {
            let decodedString = base64Decoder(stringToManipulate);
            console.log(decodedString);
          
          } else {
            console.log(errorMsg.default);
          }
          rl.close();
        }
      );
    }
  );
  // Check the flag and perform the corresponding operation. 
} else {
  if (appArgs.flag === "-e") {
    let encodedString = base64Encoder(appArgs.stringToManipulate);
    console.log(encodedString);
  
  } else if (appArgs.flag === "-d") {
    let decodedString = base64Decoder(appArgs.stringToManipulate);
    console.log(decodedString);
  
  } else if (appArgs.flag === "-h") {
    for (const helpText in usageInfo) {
      console.log(usageInfo[helpText]);
    }
  
  } else {
    console.log(errorMsg.default);
  }
}

// This function encodes the provided string to Base64.
function base64Encoder(stringToEncode) {
  try {
    let encodedString = Buffer.from(stringToEncode).toString("base64");
    return encodedString;
  
  } catch (err) {
    console.log(errorMsg.failedToEncode);
  }
}

// This function decodes Base64 provided string.
function base64Decoder(stringToDecode) {
  try {
    let decodedString = Buffer.from(stringToDecode, "base64").toString();
    return decodedString;
  
  } catch (err) {
    console.log(errorMsg.failedToDecode);
  }
}
