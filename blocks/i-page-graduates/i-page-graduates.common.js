BEM.blocks['i-router'].define(/\/graduates\/?$/, 'i-page-graduates');
BEM.decl({block: 'i-page-graduates', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-graduates'});
    }

});
