var gemini = require('gemini');

gemini.suite('checkbox', function(root) {
    
    root.setUrl('desktop.tests/checkbox/gemini/gemini.html');
       
    ['default', 'normal-size_m', 'normal-button', 'normal-button-icon', 'normal-size_l']
        .forEach(function(test) {
            var checkboxSelector = '.' + test,
                checkboxEnabledSelector = checkboxSelector + '-enabled',
                checkboxDisabledSelector = checkboxSelector + '-disabled',
                checkboxCheckedDisabledSelector = checkboxDisabledSelector + '-checked',
                selectorClick = !!~test.indexOf('default') ? checkboxEnabledSelector + ' .checkbox__control' : checkboxEnabledSelector;
                
            gemini.suite(test + '-enabled', function(suite) {
                suite
                    .setCaptureElements(checkboxEnabledSelector)
                    .before(function(actions, find) {
                        this.checkbox = find(selectorClick);
                    })
                    .capture('plain') 
                    .capture('hovered', function(actions) {
                        actions.mouseMove(this.checkbox);
                    })
                    .capture('focused-checked', function(actions) {
                        actions.click(this.checkbox);
                    })
                    .capture('checked', function(actions, find) {
                        actions.click(find('.page'));
                    })
                    .capture('focused-unchecked', function(actions) {
                        actions.click(this.checkbox);
                    });
            });

            gemini.suite(test + '-disabled', function(suite) {
                suite
                    .setCaptureElements(checkboxDisabledSelector)
                    .capture('plain');
            });

            gemini.suite(test + '-disabled-checked', function(suite) {
                suite
                    .setCaptureElements(checkboxCheckedDisabledSelector)
                    .capture('plain');
            });
    });
});
