BEM.JSON.decl({name: 'b-shri'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].getFile('index')
                .then(function (result) {

                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/
                        {
                            block: 'b-title',
                            content: result.name
                        },
                        {
                            block: 'b-wrapper-content',
                            content: result.text
                        }
                    ]);

                }, function (error) {
                    ctx.content(BEM.blocks['i-api-index'].printError(error));
                })
        );
    }

});
