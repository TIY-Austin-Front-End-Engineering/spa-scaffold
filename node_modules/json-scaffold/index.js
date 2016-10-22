var fs = require('fs');

function check(p) {
  return new Promise((resolve, reject) => {
    fs.exists(p, function(exists) {
      return exists ? resolve() : reject();
    });
  });
}

function writePath(p) {
  return new Promise((resolve, reject) => {
    if (p.lastIndexOf('.') > 0) {
      fs.writeFile(p, '', function(e) {
        if (e) reject('failed to make ' + p);
        resolve();
      });
    } else {
      fs.mkdir(p, function(e) {
        if (e) reject('failed to make ' + p + ' directory');
        resolve();
      });
    }
  })
}

function build(fileStructure) {
  if (!fileStructure.length) return;
  const path = fileStructure.shift();
  check(path)
  .then(build.bind(this,fileStructure))
  .catch(writePath.bind(this, path))
  .then(build.bind(this, fileStructure))
}

function makePaths(structure, root = '.', store = []) {
	if (!Array.isArray(structure)) {
		throw new Error('The contents of your directories must be described as an array. See the contents of your `.scaffoldrc` file');
	}
	while (root.lastIndexOf('/') === root.length -1) {
    root = root.slice(0, root.length-1);
  }
  if (root.indexOf('.') !== 0) {
		root = './' + root;
  }
  return store.concat(structure.map(path => {
		if (path === null || Array.isArray(path) || (typeof path !== 'string' && typeof path !== 'object')) {
			throw new Error('your directories must contain either strings (for files) or objects (for sub-directories). See the contents of your `.scaffoldrc` file');
		}
    if ( typeof path === 'string') {
      return root + '/' + path;
    }
    return Object.keys(path).map(key => {
      store.push(root + '/' + key);
      return makePaths(path[key], root + '/' + key)
    })
  }).reduce((a,b)=>{return a.concat(b)},[]))
  .reduce((a,b)=>{return a.concat(b)},[]);
}

module.exports = {makePaths, build};
