### JSON scaffold
A project that allows you to specify your file structure using JSON and writes those files using Node. Will not overwrite files if they already exist, but will write new files/folders if they are absent.

#### Installation
- `npm install --save-dev json-scaffold`

#### Use
- create a `.scaffoldrc` file in the root of your project
- populate it with a JSON description of your desired file structure
- run `json-scaffold path/to/desired/file_structure`
- path to desired file structure will default to `.` (the current working directory)
- profit

#### How to write your JSON file sturcture
- Directories are denoted with objects. The object's key is the name of the directory. An object's values MUST be arrays.
- Directory contents are denoted with an array. The root of your JSON object must be an array.
- Files are denoted with strings. Include the file name and its extension.

#### Example file structure
```json
[{
  "app": [
    "index.html",
    "404.html", {
	    "styles": [
	      "main.scss"
	    ],
	    "scripts": [
	      "entry.js"
	    ],
	    "assets": [{
	      "fonts": [],
	      "images": []
	    }]
		}
	]
}]
```
outputs the following files/directories:
- `./app/`
- `./app/styles/`
- `./app/scripts/`
- `./app/assets/`
- `./app/index.html`
- `./app/404.html`
- `./app/styles/main.scss`
- `./app/scripts/entry.js`
- `./app/assets/fonts/`
- `./app/assets/images/`
