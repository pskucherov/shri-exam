BEM.JSON.decl({name: 'b-graduate'}, {

    onBlock: function(ctx) {

        var name = ctx.param('name')
            _this = this;

        ctx.defer(

            BEM.blocks['i-api-index'].graduates()
                .then(function (result) {

                    var i
                        , graduate = result[name];

                    BEM.blocks['i-page'].setTitle(graduate.name);

                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/

                        {
                            block: 'b-title',
                            content: [
                                {
                                    block: 'b-social',
                                    elem: 'style',
                                    mods: { pad: 'right' },
                                    items: {
                                        "link_facebook": graduate.link_facebook,
                                        "link_gihub": graduate.link_gihub,
                                        "link_yaru": graduate.link_yaru,
                                        "link_vk": graduate.link_vk
                                    }
                                },
                                graduate.name
                            ]
                        },
                        {
                            block: 'b-wrapper-content',
                            content: [
                                {
                                    block: 'b-graduates',
                                    elem: 'avatara',
                                    photo: graduate['link_photo']
                                },
                                {
                                    block: 'b-graduate',
                                    elem: 'about',
                                    content: graduate.about
                                },
                                {
                                    block: 'b-fb-comments',
                                    url: BEM.blocks['i-router'].get('matchers')[0]
                                }
                            ]
                        }
                    ]);


                })
        );
    }


});
