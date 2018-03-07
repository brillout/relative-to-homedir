const relative_to_homedir = require('.');
const assert = require('assert');
const os = require('os');

const path = os.homedir()+'/path/to/something';

const path__relative_to_home_dir = relative_to_homedir(path);
console.log(path__relative_to_home_dir);
assert(path__relative_to_home_dir==='~/path/to/something');
