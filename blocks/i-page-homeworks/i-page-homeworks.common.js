/**
 * Шаблон пути, по которому будет отдаваться страница с домашками
 */
BEM.blocks['i-router'].define(/\/homeworks\/?$/, 'i-page-homeworks');
BEM.decl({block: 'i-page-homeworks', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-homeworks' } );
    }

});
