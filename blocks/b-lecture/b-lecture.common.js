BEM.JSON.decl({name: 'b-lecture'}, {

    onBlock: function(ctx) {

        var name = ctx.param('name');

        ctx.defer(

            BEM.blocks['i-api-index'].lectures()
                .then(function (result) {

                    var i
                        , lecture = result.lectures[name]
                        , lecturer = result.lecturers[lecture['lector-id']]
                        , existingBlocks = [];

                    BEM.blocks['i-page'].setTitle(lecture.title);

                    if (lecturer.photo.length) {
                        existingBlocks.push({
                            block: 'b-lectures',
                            elem: 'avatara',
                            mix: [ {block: 'b-lecture', elem: 'disp' } ],
                            hash: lecturer.photo + '/180x180'
                        });
                    }

                    if (lecturer.username.length) {
                        existingBlocks.push({
                            block: 'b-lectures',
                            elem: 'lecturer',
                            mix: [ {block: 'b-lecture', elem: 'disp' } ],
                            content: lecturer.username
                        });
                    }

                    if (lecture['frame-video'].length) {
                        existingBlocks.push({
                            block: 'b-lecture',
                            elem: 'videoframe',
                            hash: lecture['frame-video']
                        });
                        existingBlocks.push({
                            block: 'b-link',
                            mix: [ {block: 'b-lecture', elem: 'disp' } ],
                            url: lecture['video-download-url'],
                            content: 'Скачать видео ' + lecture['video-size']
                        });
                    }

                    if (lecture['frame-pdf']) {
                        existingBlocks.push({
                            block: 'b-lecture',
                                elem: 'pdfframe',
                            id: lecture['frame-pdf']
                        });
                        existingBlocks.push({
                            block: 'b-link',
                            mix: [ {block: 'b-lecture', elem: 'disp' } ],
                            url: lecture['pdf-download-url'],
                            content: 'Скачать презентацию в .pdf'
                        });
                    }


                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/
                        {
                            block: 'b-title',
                            content: lecture.title
                        },
                        {
                            block: 'b-wrapper-content',
                            content: existingBlocks
                        }
                    ]);

                })
        );
    }

});
