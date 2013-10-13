/**
 * Блок (страница) списка выпускников
 * В данном файле по флагу определяется отображать список или фотографии,
 * затем данные передаются в нужный шаблон
 */
BEM.JSON.decl({name: 'b-graduates'}, {

    onBlock: function(ctx) {

        var faceFlag = ctx.param('faces');

        ctx.defer(

            BEM.blocks['i-api-index'].getFile('graduates')
                .then(function (result) {

                    BEM.blocks['i-page'].setTitle('Выпускники');

                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/
                        {
                            block: 'b-title',
                            content: [
                                {
                                    block: 'b-selector-list-faces',
                                    faces: faceFlag
                                },
                                'Выпускники'
                            ]
                        },
                        {
                            block: 'b-graduates',
                            elem: (faceFlag) ? 'page-faces' : 'page-list',
                            result: result
                        }

                    ]);

                }, function (error) {
                    ctx.content(BEM.blocks['i-api-index'].printError(error));
                })
        );
    }

});
