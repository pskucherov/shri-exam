BEM.JSON.decl({name: 'b-lectures'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].lectures()
                .then(function (result) {
                    var i
                        , content = []
                        , lectures
                        , lecturers = result.lecturers
                        , preview = {};

                    BEM.blocks['i-page'].setTitle('Лекции');

                    for ( i in result.lectures ) {

                        preview = {};
                        lectures = result.lectures[i];

                        if ( lectures['frame-video'].length ) {
                            preview = {
                                block: 'b-player-preview',
                                hash: lectures['frame-video']
                            };
                        }

                        content.push({
                            block: 'b-wrapper-content',
                            elem: 'divlink',
                            content: {
                                block: 'b-link',
                                url: '/lectures/' + i,
                                content: {
                                    block: 'b-wrapper-content',
                                    mix: [ { block: 'b-lectures', elem: 'curshover' } ],
                                    content: [

                                        preview,

                                        {
                                            block: 'b-lectures',
                                            elem: 'title',
                                            content: lectures.title
                                        },
                                        {
                                            block: 'b-lectures',
                                            elem: 'lecturer-list',
                                            content: [
                                                {
                                                    block: 'b-lectures',
                                                    elem: 'avatara',
                                                    hash: lecturers[lectures['lector-id']].photo + '/45x45'
                                                },
                                                {
                                                    elem: 'lecturer',
                                                    content: lecturers[lectures['lector-id']].username
                                                }
                                            ]
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
                            content: 'Лекции'
                        },
                        {
                            content: content
                        }
                    ]);

                })
        );
    }

});
