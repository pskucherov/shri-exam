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

                        graduate.about = graduate.about.replace(/\\n/g, ' ');
                        if (graduate.about.length > 255) {
                            graduate.about = graduate.about.substr(0, 255) + '...';
                        }

                        content.push({
                            block: 'b-wrapper-content',
                            elem: 'divlink',
                            content: {
                                block: 'b-link',
                                url: '/graduates/' + i,
                                content: {
                                    block: 'b-wrapper-content',
                                    mix: [ { block: 'b-lectures', elem: 'curshover' } ],
                                    content: [

                                        {
                                            block: 'b-lectures',
                                            elem: 'title',
                                            content: graduate.name + ', г. ' + graduate.city
                                        },
                                        {
                                            block: 'b-graduates',
                                            elem: 'avatara',
                                            photo: 'small_' + graduate['link_photo']
                                        },
                                        {
                                            block: 'b-graduates',
                                            elem: 'shortabout',
                                            content: graduate.about
                                        }
                                    ]
                                }
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
