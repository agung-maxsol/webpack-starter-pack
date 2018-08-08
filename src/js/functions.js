try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

$(function() {
    $('.btn').click(function(e) {
        e.preventDefault();
        alert('Hoho Haha...');
    });
});
