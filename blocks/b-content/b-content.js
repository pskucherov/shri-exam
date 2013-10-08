BEM.decl({block: 'b-content'}, null, {

    setWait: function() {
        console.log('qwe');
        var buf = $('.b-content');
        console.log(buf);
        if (typeof buf.html !== 'undefined') {
            buf.html('<div class="b-wait"></div>');
        }
    }

});
