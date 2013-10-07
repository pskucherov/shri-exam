//BEM.blocks['i-router'].define(/^\/?$/, 'i-page-home');
BEM.blocks['i-router'].define(/^.*$/, 'i-page-home');
BEM.decl({block: 'i-page-home', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out( 'content' /*{block: 'b-node-toc'}*/ );
    }

});
