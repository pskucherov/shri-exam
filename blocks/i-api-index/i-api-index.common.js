/**
 * Обработчик запросов при загрузке страниц
 */
BEM.decl({block: 'i-api-index'}, null, {

    /**
     * Устанавливает крутилку в контент страницы, запрашивает файл.json и возвращает результат
     * @param name {string} - название запрашиваемого файла
     * @returns {*}
     */
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

    /**
     * Тоже, что и getFile, но т.к. лекции и лекторы неразрывно связаны - данная функция возвращает
     * сразу оба результата
     * @returns {*}
     */
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

    /**
     * Выводит сообщение об ошибке, если страница не может быть открыта
     * @param error - параметр, который возвращает fallback
     * @returns {{block: string, elem: string, content: {block: string, content: Array}}}
     */
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
