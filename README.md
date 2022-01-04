# base64-cli
 A CLI nodejs app to convert ASCII string to base64 and back again.

 Installation:

[Windows]
1. Install node.js - https://nodejs.org/en/
2. Clone repo: git clone https://github.com/tbrundige/base64-cli.git
3. Inside ./base64-cli/ run "npm install"
4. run "npm install -g ." to install the app globally to call from any command prompt.
5. Ensure C:\Users\YOUR_USER\AppData\Roaming\npm\ is included in Path Environment Variable. 

Usage:

[Windows]
From command prompt:
run "b64 -h" for list of arguments.

Usage: -e stringToEncode
Usage: -d base64ToDecode

Options:
  --version  Show version number
  -h    Show help
  -e             Encode String
  -d             Decode String


Use -e flag to encode a string. 
Example:
Command: b64 -e Dog
Output: RG9n

Use -d flag to decode base64
Example:
Command: b64 -d RG9n
Output: Dog

Use b64 without flags to use with user prompts.
