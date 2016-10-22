#! /usr/bin/env node

const fs = require('fs');
const build = require('../index.js').build;
const makePaths = require('../index.js').makePaths;
const root = process.argv[2] || '.';

fs.readFile('./.scaffoldrc', 'utf8', (e,  data) => {
	var paths = makePaths(JSON.parse(data), root);
	build(paths);
});
