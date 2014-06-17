var gemini = require('gemini');

gemini.suite('dropdown', function(root) {

    root.setUrl('desktop.tests/dropdown/gemini/gemini.html');
        
    function testing(test, switcher) {
        var dropdownSelector = '.' + test,
            dropdownEnabledSelector = dropdownSelector + '-enabled' + switcher,
            dropdownDisabledSelector = dropdownSelector + '-disabled';
            //root.switcher?
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(dropdownEnabledSelector)
                    .before(function(actions, find) {
                        this.switcher = find(dropdownEnabledSelector);
                    })
                    .capture('plain')
                    .capture('hover', function(actions) {
                        actions
                            .mouseMove(this.switcher)
                            .wait(1000);
                    })
                    .capture('focused', function(actions) {
                        actions.click(this.switcher).click(this.switcher).wait(1000);
                       // actions.doubleClick(this.switcher); //?????
                    });
            });

            gemini.suite(test + '-opened', function(suite) {
                suite
                    .setCaptureElements(dropdownEnabledSelector, '.popup_js_inited')
                    .capture('clicked', function(actions, find) {
                        actions.click(find(dropdownEnabledSelector)).wait(1000);
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(dropdownDisabledSelector)
                    .capture('plain');
            });
    }

    ['default-link', 'normal-link', 'normal-link-custom_popup']
        .forEach(function(test) {
            testing(test, ' .link');
        });

    ['default-button', 'normal-button', 'normal-button-custom_popup']
        .forEach(function(test) {
            testing(test, ' .button');
        });

});
