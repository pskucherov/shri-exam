BEM.decl({block: 'b-content'}, null, {

    /**
     * Устанавливаем крутилку в контент страницы
     */
    setWait: function() {
        var buf = $('.b-content');
        if (typeof buf.html !== 'undefined') {
            buf.html('<div class="b-wait"></div>');
        }
    }

});
