# node-base64-encoder
 A CLI nodejs app to convert ASCII string to base64 and back again.

## Windows
 ### Installation:

1. Install node.js - https://nodejs.org/en/
2. Clone repo: git clone https://github.com/tbrundige/base64-cli.git
3. Inside ./base64-cli/ run "npm install"
4. run "npm install -g ." to install the app globally to call from any command prompt.
5. Ensure C:\Users\YOUR_USER\AppData\Roaming\npm\ is included in Path Environment Variable. 

### Usage:
#### With flags
```sh
b64 -h
Use b64 with no arguments for user prompt.
Use -e '<stringToEncode>'
Use -d '<stringToDecode>'
Use -h to display usage info.
```
#### Without flags
```sh
b64
Would you like to Encode or Decode? Encode
What is the string you would like to transform? Password
UGFzc3dvcmQ=
```
