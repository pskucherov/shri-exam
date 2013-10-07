BEM.JSON.decl({name: 'b-shri'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].index()
                .then(function (result) {

                    ctx.content([
                        {
                            block: 'b-wrapper-content',
                            content: [
                                {elem: 'title', tag: 'h4', content: 'Table of Contents'},
                                {
                                    elem: 'toc',
                                    tag: 'ul',
                                    content: result.map(function (elem) {
                                        return {
                                            tag: 'li',
                                            content: {
                                                block: 'b-link',
                                                content: elem.text,
                                                url: elem.url
                                            }
                                        }
                                    })
                                }
                            ]
                        }
                    ]);

                })
        );
    }

});
