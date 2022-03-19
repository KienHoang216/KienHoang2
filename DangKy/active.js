function Validator(options) {

    function getParrent(element, selector){
        while(element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules ={};

    function validate(inputElement, rule) {
        var error = getParrent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        // var error = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage;
        // lay rule
        var ruless = selectorRules[rule.selector];
        
        for(var i = 0; i < ruless.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = ruless[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
            
                default:
                    errorMessage = ruless[i](inputElement.value)
                    break;
            }
            if(errorMessage) break;
        }

        if(errorMessage){
            error.innerText = errorMessage;
            getParrent(inputElement, options.formGroupSelector).classList.add('invalid');
        }else{
            error.innerText = '';
            getParrent(inputElement, options.formGroupSelector).classList.remove('invalid');

        }

        return !errorMessage;
    }


    var formElement = document.querySelector(options.form);
   

    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach( function (rule) {

                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            if(isFormValid) {
                if(typeof options.onSubmit === 'function'){
                    
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        // values[input.name] = input.value;

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name]=[];
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name]=[];
                                }

                                values[input.name].push(input.value);

                                break;
                            case 'file' :
                                values[input.name] = input.files;
                                break;
                            default:
                                 values[input.name] = input.value;
                                break;
                        }

                        return values;
                    }, {});

                    options.onSubmit(formValues);
                } else{
                    formElement.submit();
                }
            } 
        }


        options.rules.forEach( function (rule) {
            // luu lai tat ca rule
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector]=[rule.test];
            }
            
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                if(inputElement){
                    inputElement.onblur = function () {
                        validate(inputElement, rule);
                    }
    
                    inputElement.oninput = function() {
                        var error = getParrent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                        error.innerText = '';
                        getParrent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    }
    
                }
            })
            
            
        
        });
       
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || '  Vui lòng nhập trường này'
        }
    }
}


Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'vui lòng nhâp email' 
             
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >=min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`; 
        }
    }
}

Validator.isConfirmed = function (selector, getConfirm, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirm() ? undefined : message || 'Nhập không chính xác'; 
        }
    }
}
