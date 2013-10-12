/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-fb-comments', {

        onSetMod : {

            'js' : function() {

                /**
                 *  Стандартный скрип FB-comments,
                 *  выполняется при первой загрузке b-fb-comments
                 */
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=739739559385883";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

            }

        }

    });

})();
