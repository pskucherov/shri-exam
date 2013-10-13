/**
 * Основная страница, в которую подгружаются остальные страницы
 */
BEM.decl('i-page', null, {

    getPageJson: function (json) {
        return {
            block: 'b-page',
            title: 'Выпускной альбом',
            head: [
                //bem-node подключает IE и ставит тэг <!--[if gt IE 9]>
                //поэтому подключил отдельно (подключить, чтобы собирались css файлы под IE пока не получилось)
                { elem: 'css', url: '/pages/index/_index.css' }
            ],
            //favicon: '/favicon.ico',
            content: [
                {
                    block: 'wrapper',
                    content: [
                        {
                            block: 'header',
                            links: [
                                { link: '/', content: 'О школе' },
                                { link: 'graduates', content: 'Выпускники' },
                                { link: 'lectures', content: 'Лекции' },
                                { link: 'homeworks', content: 'Мои домашки' }
                            ]
                        },
                        {
                            block: 'b-content',
                            content: json
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
                        content: [
                            'Автор: ',
                            {
                                block: 'b-link',
                                url: '/graduates/pavel-kucherov',
                                content: 'Кучеров Павел Сергеевич'
                            }
                        ]
                    }
                }
            ]
        }
    }
});
