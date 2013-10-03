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
    content:[
        {
            block: 'header'
        },
        {
            block: 'links',
            content: [
                {
                    block: 'b-up-link',
                    content: { block: 'b-link', url: 'index.html', content: 'Главная' }
                },
                {
                    block: 'b-up-link',
                    content: { block: 'b-link', url: '#/graduates', content: 'Выпускники' }
                },
                {
                    block: 'b-up-link',
                    content: { block: 'b-link', url: '#/lecturers', content: 'Лекторы' }
                }
            ]
        },
        {
            block: 'content',
            attrs: { 'ng-view': '' },
            content: 'Главная страница'
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
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
