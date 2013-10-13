BEM.blocks['i-router'].define(/\/graduates(\/|\/@faces)?$/, 'i-page-graduates');
BEM.decl({block: 'i-page-graduates', baseBlock: 'i-page'}, null, {

    init: function (matchers) {

        var f = false;
        if (matchers[1] === '/@faces') {
            f = true;
        }

        return this.out({block: 'b-graduates', faces: f } );
    }

});
