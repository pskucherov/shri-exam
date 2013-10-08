BEM.decl({block: 'i-api-index'}, null, {

    index: function () {

        if (typeof BEM.blocks['b-content'] !== 'undefined') {
            BEM.blocks['b-content'].setWait();
        }

        return BEM.blocks['i-api-request']
            .get('index.json')
            .then(function (result) {
                /**
                 * @see http://t1.kiev.ua/json/index.json
                 */
                return result;
            });
    }

});
