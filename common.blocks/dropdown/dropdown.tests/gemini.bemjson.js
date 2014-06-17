({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : 'link',
                    popup : 'bemjson',
                    cls : 'default-link-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', disabled : true },
                    switcher : 'link',
                    popup : 'bemjson',
                    cls : 'default-link-disabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button' },
                    switcher : 'button',
                    popup : 'bemjson',
                    cls : 'default-button-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', disabled : true },
                    switcher : 'disabled',
                    popup : 'bemjson',
                    cls : 'default-button-disabled'
                }
            ].map(function(content) { return { tag : 'p', content : content }; })
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal' },
                    switcher : 'link',
                    popup : 'bemjson', 
                    cls : 'normal-link-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal', disabled : true },
                    switcher : 'link',
                    popup : 'bemjson', 
                    cls : 'normal-link-disabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'xl' },
                    switcher : 'button',
                    popup : 'bemjson',
                    cls : 'normal-button-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'xl', disabled : true },
                    switcher : 'button',
                    popup : 'bemjson',
                    cls : 'normal-button-disabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal' },
                    switcher : 'link',
                    popup : { block : 'button', mods : { theme : 'normal', size : 'xl' }, text : 'popup button' },
                    cls : 'normal-link-custom_popup-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal', disabled : true },
                    switcher : 'link',
                    popup : { block : 'button', mods : { theme : 'normal', size : 'xl' }, text : 'popup button' },
                    cls : 'normal-link-custom_popup-disabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'l' },
                    switcher : 'button',
                    popup : { block : 'button', mods : { theme : 'normal', size : 'xl' }, text : 'popup button' },
                    cls : 'normal-button-custom_popup-enabled'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'l', disabled : true },
                    switcher : 'button',
                    popup : { block : 'button', mods : { theme : 'normal', size : 'xl' }, text : 'popup button' },
                    cls : 'normal-button-custom_popup-disabled'
                }
            ].map(function(content) { return { tag : 'div', attrs : { style : 'margin: 1em 0' }, content : content }; })
        }
    ]
});
