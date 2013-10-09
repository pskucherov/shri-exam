BEM.blocks['i-router'].define(/\/lectures/([^\/]+)$/, 'i-page-lecture');
BEM.decl({block: 'i-page-lecture', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({ block: 'b-lecture', name: matchers[1] });
    }

});
