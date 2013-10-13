/**
 * Изменяем модификатор для меню по клику
 * Если был произведён клик на элемент меню - данные элемент помечается как текущий
 */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-menu-horiz', {

    onSetMod : {

        'js' : function() {

        }

    },
    onTriggerClick : function(e) {
        if (!this.hasMod(e.data.domElem, 'state')) {
            this.toggleMod(e.data.domElem, 'state', 'current');
        }
    }

}, {

    live : function() {
        this
            .liveBindTo('item', 'click', function(e) {
                this.onTriggerClick(e);
            });
    }

});

})();
