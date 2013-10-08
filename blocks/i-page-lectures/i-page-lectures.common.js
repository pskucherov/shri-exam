BEM.blocks['i-router'].define(/\/lectures$/, 'i-page-lectures');
BEM.decl({block: 'i-page-lectures', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-lectures'});
    }

});
