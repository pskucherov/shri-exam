BEM.JSON.decl({name: 'b-lectures'}, {

    onBlock: function(ctx) {

        ctx.defer(


            BEM.blocks['i-api-index'].index()
                .then(function (result) {

                    if (!result.name) {
                        BEM.blocks['i-page'].setTitle('Лекции');
                    }
                    BEM.blocks['i-page'].setTitle('Лекции');

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

                })
        );
    }

});
