module.exports = relative_to_homedir;

function relative_to_homedir(path) {
    const os = require('os');
    const homedir = os.homedir();
    if( ! path ) {
        return path;
    }
    if( ! path.startsWith(homedir) ) {
        return path;
    }
    if( ! homedir.startsWith('/') ) {
        return path;
    }
    return '~'+path.slice(homedir.length);
}

