BEM.JSON.decl({name: 'b-graduates'}, {

    onBlock: function(ctx) {

        var faceFlag = ctx.param('faces');

        ctx.defer(

            BEM.blocks['i-api-index'].graduates()
                .then(function (result) {

                    BEM.blocks['i-page'].setTitle('Выпускники');

                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/
                        {
                            block: 'b-title',
                            content: 'Выпускники'
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
