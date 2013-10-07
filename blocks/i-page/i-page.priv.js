BEM.decl('i-page', null, {
    /**
     * Default bemjson for all pages
     *
     * @param {Mixed} json
     * 
     * @return {Object} bemjson
     */
    getPageJson: function (json) {
        /*return {
            block: 'b-page',
            content: [
                {block: 'b-head', content: 'BEM-node test project'},
                {block: 'b-content', content: json},
                {block: 'b-foot', content: [
                    {tag: 'img', attrs: {src: 'http://nodejs.org/images/logo.png'}},
                    {tag: 'img', attrs: {src: 'http://bem.info/bundles-desktop/index/blocks/logo/_type/logo_type_main.png'}}
                ]}
            ]
        }*/
        return {
            block: 'b-page',
            title: 'Выпускной альбом',
            //favicon: '/favicon.ico',
            content: [
                {
                    block: 'wrapper',
                    content: [
                        {
                            block: 'header'
                        },
                        {
                            block: 'content',
                            content: ''//json
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
