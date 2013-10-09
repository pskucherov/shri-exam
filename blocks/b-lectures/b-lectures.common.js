BEM.JSON.decl({name: 'b-lectures'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].lectures()
                .then(function (result) {
                    var i
                        , content = []
                        , lectures
                        , lecturers = result.lecturers;

                    BEM.blocks['i-page'].setTitle('Лекции');

                    for ( i in result.lectures ) {

                        lectures = result.lectures[i];

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
                                        {
                                            block: 'b-player-preview',
                                            hash: lectures['frame-video']
                                        },
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
                                                    hash: lecturers[lectures['lector-id']].photo
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
