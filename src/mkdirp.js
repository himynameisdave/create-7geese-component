import mkdirp from 'mkdirp';

export default path => new Promise((res, rej) => mkdirp(path, err => {
    if (err) return rej(err);
    return res('Exists');
}));
