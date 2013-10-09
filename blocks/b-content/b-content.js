BEM.decl({block: 'b-content'}, null, {

    setWait: function() {
        var buf = $('.b-content');
        if (typeof buf.html !== 'undefined') {
            buf.html('<div class="b-wait"></div>');
        }
    }

});
