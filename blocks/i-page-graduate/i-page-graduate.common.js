BEM.blocks['i-router'].define(/\/graduates\/([^\/]+)$/, 'i-page-graduate');
BEM.decl({block: 'i-page-graduate', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({ block: 'b-graduate', name: matchers[1] });
    }

});
