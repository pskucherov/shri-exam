/**
 * Шаблон пути, по которому будет отдаваться страница списка лекций
 */
BEM.blocks['i-router'].define(/\/lectures\/?$/, 'i-page-lectures');
BEM.decl({block: 'i-page-lectures', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-lectures'});
    }

});
