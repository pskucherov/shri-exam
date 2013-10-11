BEM.JSON.decl({name: 'b-graduates'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].graduates()
                .then(function (result) {
                    var i
                        , content = []
                        , graduate;

                    BEM.blocks['i-page'].setTitle('Выпускники');



                    for ( i in result ) {

                        graduate = result[i];

                        content.push({
                            block: 'b-wrapper-content',
                            elem: 'divlink',
                            content: {

                                block: 'b-wrapper-content',
                                mix: [ { block: 'b-lectures', elem: 'curshover' } ],
                                content: [
                                    {
                                        elem: 'title',
                                        content: [
                                            {
                                                block: 'b-graduates',
                                                elem: 'title',
                                                content: {
                                                    block: 'b-link',
                                                    url: '/graduates/' + i,
                                                    content: graduate.name + ', г. ' + graduate.city
                                                }
                                            },
                                            {
                                                block: 'b-social',
                                                elem: 'style',
                                                items: {
                                                    "link_facebook": graduate.link_facebook,
                                                       "link_gihub": graduate.link_gihub,
                                                        "link_yaru": graduate.link_yaru,
                                                          "link_vk": graduate.link_vk
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        block: 'b-graduates',
                                        elem: 'avatara',
                                        photo: 'small_' + graduate['link_photo']
                                    },
                                    {
                                        block: 'b-graduates',
                                        elem: 'shortabout',
                                        url: '/graduates/' + i,
                                        content: graduate.about
                                    }
                                ]
                            }
                        });
                    }

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
                            content: content
                        }

                    ]);

                })
        );
    }

});
