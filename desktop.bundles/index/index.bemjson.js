({
    block: 'b-page',
    attrs: { 'ng-app': 'graduation-album'},
    title: 'Выпускной альбом',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content: [
        {
            block: 'wrapper',
            content: [
                {
                    block: 'header'
                },
                {
                    block: 'content',
                    attrs: { 'ng-view': '' }
                },
                {
                    block: 'footer',
                    elem: 'empty'
                }
            ]
        },
        {
            block: 'footer',
            content: {
                elem: 'content',
                content: 'footer content goes here'
            }
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        {
            block: 'angularjs',
            content: [
                { elem: 'app' },
                { elem: 'controllers' }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
