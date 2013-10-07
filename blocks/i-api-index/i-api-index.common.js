BEM.decl({block: 'i-api-index'}, null, {

    index: function () {
        return BEM.blocks['i-api-request']
            .get('index.json')
            .then(function (result) {
                /**
                 * @see http://t1.kiev.ua/json/index.json
                 */
                return result;
            });
    }/*,

    module: function (name) {
        return BEM.blocks['i-api-request']
            .get(name + '.json')
            .then(function (result) {

                if (result.modules && result.modules.length) {
                    return result.modules[0];
                } else if (result.globals && result.globals.length) {
                    return result.globals[0];
                }

                return Vow.reject('No module');
            });
    }*/
});
