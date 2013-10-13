/**
 * Перечисление домашних работ.
 * Т.к. данные в json как могут быть заполнены, так и быть пустыми (для каждой домашки - своё)
 * сначала проверяется существование данных, а только затем возвращаются
 */
BEM.JSON.decl({name: 'b-homeworks'}, {

    onBlock: function(ctx) {

        ctx.defer(

            BEM.blocks['i-api-index'].getFile('homeworks')
                .then(function (result) {
                    var i
                        , k
                        , content = []
                        , homework
                        , existingBlocks
                        , existingLinks
                        , emptyLines = []
                        , name;

                    BEM.blocks['i-page'].setTitle('Мои домашки');

                    emptyLines.push({ tag: 'br' });
                    emptyLines.push({ tag: 'br' });

                    for ( i in result ) {

                        homework = result[i];

                        existingBlocks = [];
                        existingLinks = [];

                        //Представление у данных одинаковое, только заголовки разные
                        for ( k in homework ) {

                            name = '';
                            switch(k) {
                                case 'name':
                                    name = 'Название: '
                                    break;
                                case 'task':
                                    name = 'Задание: '
                                    break;
                                case 'about':
                                    name = 'Комментарии: '
                                    break;
                            }

                            if ( name && homework[k].length) {
                                existingBlocks.push({
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: name
                                        },
                                        {
                                            content: homework[k]
                                        },
                                        emptyLines
                                    ]
                                });
                            }

                        }

                        if (homework.git) {
                            existingLinks.push([
                                {
                                    tag: 'b',
                                    content: 'Github: '
                                },
                                {
                                    block: 'b-link',
                                    attrs: { target: '_blank' },
                                    url: homework.git,
                                    content: {
                                        tag: 'b',
                                        content: homework.git
                                    }
                                },
                                {
                                    tag: 'br'
                                },
                                {
                                    tag: 'br'
                                }
                            ]);
                        }

                        if (homework.demo) {
                            existingLinks.push([
                                {
                                    tag: 'b',
                                    content: 'Demo: '
                                },
                                {
                                    block: 'b-link',
                                    attrs: { target: '_blank' },
                                    url: homework.demo,
                                    content: {
                                        tag: 'b',
                                        content: homework.demo
                                    }
                                }
                            ]);
                        }


                        content.push({

                            block: 'b-wrapper-content',
                            content: [
                                existingBlocks,
                                existingLinks
                            ]

                        });
                    }


                    ctx.content([
                        /*{
                            block: 'b-bread-crumbs',
                            content: result.name
                        },*/
                        {
                            block: 'b-title',
                            content: 'Мои домашки'
                        },
                        {
                            content: content
                        }
                    ]);

                }, function (error) {
                    ctx.content(BEM.blocks['i-api-index'].printError(error));
                })
        );
    }

});
