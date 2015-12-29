# JS-error tracker

**errorPacker.js** is a universal cross-browser script which catches all javascript errors on your site, sends them to LogPacker for logging and visualization this data in a flexible interface.

**errorPacker.js** configuration is very simple, just 2 steps for default data:
1. Download this script and place  it in your side / or just copy this absolute link {{script-link}}
2. Insert the link to this script on each page of your site before any other scripts

By default script can get information about browser, url of the page with error, url and name of the js-file with this error, error message text, number of line with error in script file and the symbol number in line.

But we can provide you with some more information about error, information in details about user who got this error: was user authorized or not, what country user registered  with, user ID. Also it’s very important to know the version of deploy and environment of the error, if you are working not only with live version, making tests and controlling bug fixing.

### Default options:
*         browser and OS
*         page url
*         error message text
*         js-file URL
*         line number
*         the symbol number

### Extra options:
*         authorizing identifier
*         country identifier
*         user ID
*         deploy version
*         environment

For collecting these extra options you can use our API.
