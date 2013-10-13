/**
 * Шаблон пути, по которому будет отдаваться страница о ШРИ
 */
BEM.blocks['i-router'].define(/^\/?$/, 'i-page-home');
BEM.decl({block: 'i-page-home', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-shri'});
    }

});
