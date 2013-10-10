BEM.decl('i-page', null, {
    /**
     * Default bemjson for all pages
     *
     * @param {Mixed} json
     * 
     * @return {Object} bemjson
     */
    getPageJson: function (json) {
        return {
            block: 'b-page',
            title: 'Выпускной альбом',
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
                                { link: 'lectures', content: 'Лекции' }
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
                        content: 'footer content goes here'
                    }
                },
                { block: 'i-jquery', mods: { version: '1.8.3' } }
            ]
        }
    }
});
