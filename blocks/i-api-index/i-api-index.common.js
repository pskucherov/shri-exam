BEM.decl({block: 'i-api-index'}, null, {

    getFile: function (name) {
        if (typeof BEM.blocks['b-content'] !== 'undefined') {
            BEM.blocks['b-content'].setWait();
        }

        return BEM.blocks['i-api-request']
            .get(name + '.json')
            .then(function (result) {
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

    printError: function (error) {
        return {
            block: 'b-wrapper-content',
            elem: 'error',
            content: {
                block: 'b-error',
                    content: [
                    {
                        content: 'Произошла ошибка (' + error.message + ')'
                    },
                    {
                        content: 'Для перезагрузки страницы нажмите F5.'
                    }
                ]
            }
        }
    }


});
