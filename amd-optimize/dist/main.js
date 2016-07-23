define('src/mod/b', [], function () {
    console.log('this is b');
});
define('main', ['src/mod/b'], function () {
});