define('src/mod/a', [], function () {
    console.log('this is a');
});
define('src/mod/b', [], function () {
    console.log('this is b');
});
define('index', [
    'src/mod/a',
    'src/mod/b'
], function () {
});