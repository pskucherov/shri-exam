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
    },

    lectures: function () {

        if (typeof BEM.blocks['b-content'] !== 'undefined') {
            BEM.blocks['b-content'].setWait();
        }

        return BEM.blocks['i-api-request']
            .get( 'lectures.json' )
            .then(function (result1) {
                return BEM.blocks['i-api-request'].get('lecturers.json').then(function(result2) {
                    return { lectures: result1, lecturers: result2 };
                });
            });
    },

    graduates: function () {


        if (typeof BEM.blocks['b-content'] !== 'undefined') {
            BEM.blocks['b-content'].setWait();
        }

        return BEM.blocks['i-api-request'].get('graduates.json').then(function(result) {
            return result;
        });

    }


});
