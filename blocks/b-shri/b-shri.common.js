BEM.JSON.decl({name: 'b-shri'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].index()
                .then(function (result) {

                    BEM.blocks['i-page'].setTitle(result.name);

                    ctx.content([
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
