/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());


/*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=d.attr("type");return"radio"===e||"checkbox"===e?a("input[name='"+d.attr("name")+"']:checked").val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c[0].toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c[0].toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(a){var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})}(jQuery),function(a){a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	factory(jQuery);
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/*! Swipebox v1.2.9 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function(a,b,c,d){c.swipebox=function(e,f){var g,h,i={useCSS:!0,useSVG:!0,initialIndexOnArray:0,closeBySwipe:!0,hideBarsOnMobile:!0,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"CCCCCC",beforeOpen:null,afterOpen:null,afterClose:null,nextSlide:null,prevSlide:null,loopAtEnd:!1},j=this,k=[],l=e.selector,m=c(l),n=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),o=null!==n||b.createTouch!==d||"ontouchstart"in a||"onmsgesturechange"in a||navigator.msMaxTouchPoints,p=!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=a.innerWidth?a.innerWidth:c(a).width(),r=a.innerHeight?a.innerHeight:c(a).height(),s='<div id="swipebox-overlay">          <div id="swipebox-slider"></div>          <div id="swipebox-caption"></div>          <div id="swipebox-action">            <a id="swipebox-close"></a>            <a id="swipebox-prev"></a>            <a id="swipebox-next"></a>          </div>      </div>';j.settings={},c.swipebox.close=function(){g.closeSlide()},c.swipebox.extend=function(){return g},j.init=function(){j.settings=c.extend({},i,f),c.isArray(e)?(k=e,g.target=c(a),g.init(j.settings.initialIndexOnArray)):c(b).on("click",l,function(a){if("slide current"===a.target.parentNode.className)return!1;c.isArray(e)||(g.destroy(),h=c(l),g.actions()),k=[];var b,d,f;f||(d="data-rel",f=c(this).attr(d)),f||(d="rel",f=c(this).attr(d)),h=f&&""!==f&&"nofollow"!==f?m.filter("["+d+'="'+f+'"]'):c(l),h.each(function(){var a=null,b=null;c(this).attr("title")&&(a=c(this).attr("title")),c(this).attr("href")&&(b=c(this).attr("href")),k.push({href:b,title:a})}),b=h.index(c(this)),a.preventDefault(),a.stopPropagation(),g.target=c(a.target),g.init(b)})},g={init:function(a){j.settings.beforeOpen&&j.settings.beforeOpen(),this.target.trigger("swipebox-start"),c.swipebox.isOpen=!0,this.build(),this.openSlide(a),this.openMedia(a),this.preloadMedia(a+1),this.preloadMedia(a-1),j.settings.afterOpen&&j.settings.afterOpen()},build:function(){var a,b=this;c("body").append(s),b.doCssTrans()&&(c("#swipebox-slider").css({"-webkit-transition":"left 0.4s ease","-moz-transition":"left 0.4s ease","-o-transition":"left 0.4s ease","-khtml-transition":"left 0.4s ease",transition:"left 0.4s ease"}),c("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease",transition:"opacity 1s ease"}),c("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s",transition:"0.5s"})),p&&j.settings.useSVG===!0&&(a=c("#swipebox-action #swipebox-close").css("background-image"),a=a.replace("png","svg"),c("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":a})),n&&j.settings.hideBarsOnMobile===!0&&c("#swipebox-action, #swipebox-caption").hide(),c.each(k,function(){c("#swipebox-slider").append('<div class="slide"></div>')}),b.setDim(),b.actions(),o&&b.gesture(),b.keyboard(),b.animBars(),b.resize()},setDim:function(){var b,d,e={};"onorientationchange"in a?a.addEventListener("orientationchange",function(){0===a.orientation?(b=q,d=r):(90===a.orientation||-90===a.orientation)&&(b=r,d=q)},!1):(b=a.innerWidth?a.innerWidth:c(a).width(),d=a.innerHeight?a.innerHeight:c(a).height()),e={width:b,height:d},c("#swipebox-overlay").css(e)},resize:function(){var b=this;c(a).resize(function(){b.setDim()}).resize()},supportTransition:function(){var a,c="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(a=0;a<c.length;a++)if(b.createElement("div").style[c[a]]!==d)return c[a];return!1},doCssTrans:function(){return j.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var a=this,b=null,d=null,e=!1,f=10,g=50,h={},i={},k=c("#swipebox-caption, #swipebox-action"),l=c("#swipebox-slider");k.addClass("visible-bars"),a.setTimeout(),c("body").bind("touchstart",function(a){return c(this).addClass("touching"),i=a.originalEvent.targetTouches[0],h.pageX=a.originalEvent.targetTouches[0].pageX,h.pageY=a.originalEvent.targetTouches[0].pageY,c(".touching").bind("touchmove",function(a){if(a.preventDefault(),a.stopPropagation(),i=a.originalEvent.targetTouches[0],j.settings.closeBySwipe&&(d=i.pageY-h.pageY,Math.abs(d)>=g||e)){var b=.75-Math.abs(d)/l.height();l.css({top:d+"px"}),l.css({opacity:b}),e=!0}}),!1}).bind("touchend",function(g){if(g.preventDefault(),g.stopPropagation(),j.settings.closeBySwipe){if(l.css("opacity")<=.5){var m=d>0?l.height():-l.height();l.animate({top:m+"px",opacity:0},300,function(){a.closeSlide()})}else l.animate({top:0,opacity:1},300);if(e)return void(e=!1)}b=i.pageX-h.pageX,b>=f?a.getPrev():-f>=b?a.getNext():k.hasClass("visible-bars")?(a.clearTimeout(),a.hideBars()):(a.showBars(),a.setTimeout()),c(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(j.settings.hideBarsDelay>0){var b=this;b.clearTimeout(),b.timeout=a.setTimeout(function(){b.hideBars()},j.settings.hideBarsDelay)}},clearTimeout:function(){a.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var a=c("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.addClass("visible-bars"):(c("#swipebox-caption").animate({top:0},500),c("#swipebox-action").animate({bottom:0},500),setTimeout(function(){a.addClass("visible-bars")},1e3))},hideBars:function(){var a=c("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.removeClass("visible-bars"):(c("#swipebox-caption").animate({top:"-50px"},500),c("#swipebox-action").animate({bottom:"-50px"},500),setTimeout(function(){a.removeClass("visible-bars")},1e3))},animBars:function(){var a=this,b=c("#swipebox-caption, #swipebox-action");b.addClass("visible-bars"),a.setTimeout(),c("#swipebox-slider").click(function(){b.hasClass("visible-bars")||(a.showBars(),a.setTimeout())}),c("#swipebox-action").hover(function(){a.showBars(),b.addClass("visible-bars"),a.clearTimeout()},function(){j.settings.hideBarsDelay>0&&(b.removeClass("visible-bars"),a.setTimeout())})},keyboard:function(){var b=this;c(a).bind("keyup",function(a){a.preventDefault(),a.stopPropagation(),37===a.keyCode?b.getPrev():39===a.keyCode?b.getNext():27===a.keyCode&&b.closeSlide()})},actions:function(){var a=this,b="touchend click";k.length<2?c("#swipebox-prev, #swipebox-next").hide():(c("#swipebox-prev").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getPrev(),a.setTimeout()}),c("#swipebox-next").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getNext(),a.setTimeout()})),c("#swipebox-close").bind(b,function(){a.closeSlide()})},setSlide:function(a,b){b=b||!1;var d=c("#swipebox-slider");this.doCssTrans()?d.css({left:100*-a+"%"}):d.animate({left:100*-a+"%"}),c("#swipebox-slider .slide").removeClass("current"),c("#swipebox-slider .slide").eq(a).addClass("current"),this.setTitle(a),b&&d.fadeIn(),c("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===a?c("#swipebox-prev").addClass("disabled"):a===k.length-1&&j.settings.loopAtEnd!==!0&&c("#swipebox-next").addClass("disabled")},openSlide:function(b){c("html").addClass("swipebox-html"),o&&c("html").addClass("swipebox-touch"),c(a).trigger("resize"),this.setSlide(b,!0)},preloadMedia:function(a){var b=this,c=null;k[a]!==d&&(c=k[a].href),b.isVideo(c)?b.openMedia(a):setTimeout(function(){b.openMedia(a)},1e3)},openMedia:function(a){var b=this,e=null;return k[a]!==d&&(e=k[a].href),0>a||a>=k.length?!1:void(b.isVideo(e)?c("#swipebox-slider .slide").eq(a).html(b.getVideo(e)):b.loadMedia(e,function(){c("#swipebox-slider .slide").eq(a).html(this)}))},setTitle:function(a){var b=null;c("#swipebox-caption").empty(),k[a]!==d&&(b=k[a].title),b&&c("#swipebox-caption").append(b)},isVideo:function(a){if(a){if(a.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)||a.match(/vimeo\.com\/([0-9]*)/)||a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(a.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},getVideo:function(a){var b="",c=a.match(/watch\?v=([a-zA-Z0-9\-_]+)/),d=a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),e=a.match(/vimeo\.com\/([0-9]*)/);return c||d?(d&&(c=d),b='<iframe width="560" height="315" src="//www.youtube.com/embed/'+c[1]+'" frameborder="0" allowfullscreen></iframe>'):e&&(b='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+e[1]+"?byline=0&amp;portrait=0&amp;color="+j.settings.vimeoColor+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),d||d||e||(b='<iframe width="560" height="315" src="'+a+'" frameborder="0" allowfullscreen></iframe>'),'<div class="swipebox-video-container" style="max-width:'+j.settings.videomaxWidth+'px"><div class="swipebox-video">'+b+"</div></div>"},loadMedia:function(a,b){if(!this.isVideo(a)){var d=c("<img>").on("load",function(){b.call(d)});d.attr("src",a)}},getNext:function(){var a=this,b=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));if(b+1<k.length){var d=c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src");c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src",d),b++,a.setSlide(b),a.preloadMedia(b+1),j.settings.nextSlide&&j.settings.nextSlide()}else if(j.settings.loopAtEnd===!0){var d=c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src");c("#swipebox-slider .slide").eq(b).contents().find("iframe").attr("src",d),b=0,a.preloadMedia(b),a.setSlide(b),a.preloadMedia(b+1),j.settings.nextSlide&&j.settings.nextSlide()}else c("#swipebox-slider").addClass("rightSpring"),setTimeout(function(){c("#swipebox-slider").removeClass("rightSpring")},500)},getPrev:function(){var a=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));if(a>0){var b=c("#swipebox-slider .slide").eq(a).contents().find("iframe").attr("src");c("#swipebox-slider .slide").eq(a).contents().find("iframe").attr("src",b),a--,this.setSlide(a),this.preloadMedia(a-1),j.settings.prevSlide&&j.settings.prevSlide()}else c("#swipebox-slider").addClass("leftSpring"),setTimeout(function(){c("#swipebox-slider").removeClass("leftSpring")},500)},nextSlide:function(){},prevSlide:function(){},closeSlide:function(){c("html").removeClass("swipebox-html"),c("html").removeClass("swipebox-touch"),c(a).trigger("resize"),this.destroy()},destroy:function(){c(a).unbind("keyup"),c("body").unbind("touchstart"),c("body").unbind("touchmove"),c("body").unbind("touchend"),c("#swipebox-slider").unbind(),c("#swipebox-overlay").remove(),c.isArray(e)||e.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),c.swipebox.isOpen=!1,j.settings.afterClose&&j.settings.afterClose()}},j.init()},c.fn.swipebox=function(a){if(!c.data(this,"_swipebox")){var b=new c.swipebox(this,a);this.data("_swipebox",b)}return this.data("_swipebox")}}(window,document,jQuery);

var ads = ads || {};

ads.adConfig = {
    'home': {
        'start': 100,
        'interval': 100,
        'endPadding': 3
    },
    'article': {
        'start': 7,
        'interval': 9,
        'endPadding': 3
    },
    'section': {
        'start': 7,
        'interval': 7,
        'endPadding': 3
    },
    'default': {
        'start': 7,
        'interval': 7,
        'endPadding': 3
    },
    'disableInstreamAds': [ 'obituaries' ],
    'enableStickyLeader': [ 'obituaries' ]
};

ads.hoverAdFilled = false;

//
// Track instream ads so we can target specific positions
//

ads.nextAdPosition = 0;
ads.adPositions = [ '1', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

ads.getNextAdPosition = function () {
    return this.adPositions[ ads.nextAdPosition++ ];
};

ads.refreshInstreamAds = function () {
    jQuery.each( jQuery( '.instream .ad-container' ), function ( key, value ) {
        // This If block will determine whether an ad has already been loaded for this div
        if ( jQuery( value ).children().length === 0 ) {
            if (key == 1) { // use yieldmo ad in this slot
                var ymTag = '<div id="ym_1310853926300056581" class="ym"></div><script type="text/javascript">(function(e,t){if(t._ym===void 0){t._ym="";var m=e.createElement("script");m.type="text/javascript",m.async=!0,m.src="//static.yieldmo.com/ym.m6.js",(e.getElementsByTagName("head")[0]||e.getElementsByTagName("body")[0]).appendChild(m)}else t._ym instanceof String||void 0===t._ym.chkPls||t._ym.chkPls()})(document,window);</script>';
                jQuery(value).html(ymTag);
            } else {
                googletag.cmd.push( function () {
                    var slot = googletag.defineSlot(
                        window.dartSlotString,
                        window.instreamAdSizes,
                        value.id
                    )
                        .setTargeting( 'pos', ads.getNextAdPosition() )
                        .setTargeting( 'ct', ads.locationTargeting )
                        .setTargeting( 'ctid', ads.getArticleId())
                        .setTargeting( 'kuid', Krux.user )
                        .addService( googletag.pubads() );
                    googletag.display( value.id );
                    googletag.pubads().refresh( [ slot ] );
                } );
            }
        }
    } );
};

ads.refreshStickyLeader = function () {
    id = jQuery( '.sticky-leader .ad-container' )[ 0 ].id;
    googletag.cmd.push( function () {
        var slot = googletag.defineSlot(
            window.dartSlotString,
            [ [ 320, 50 ] ],
            id
        )
            .setTargeting( 'pos', ads.getNextAdPosition() )
            .setTargeting( 'ct', ads.locationTargeting )
            .setTargeting( 'ctid', ads.getArticleId())
            .setTargeting( 'kuid', Krux.user )
            .addService( googletag.pubads() );
        googletag.display( id );
        googletag.pubads().addEventListener( 'slotRenderEnded', function ( event ) {

            if ( event.slot === slot && !event.isEmpty ) {

                //
                // Display sticky-leader and put in fixed position
                //

                if ( ads.fixedPosition() ) {
                    jQuery( '.sticky-leader' ).css( {
                        'position': 'fixed',
                        'width': '320px',
                        'height': '50px',
                        'z-index': '1000',
                        'left': '50%',
                        'right': '50%',
                        'bottom': '0px',
                        'border': 'none',
                        'margin': 'auto auto auto -160px',
                        'zoom': '1',
                        'padding': '0px'
                    } ).show();
                }
                else {
                    jQuery( '.sticky-leader' ).css( {
                        'width': '100%',
                        'height': '50px',
                        'padding': '0px',
                        'text-align': 'center'
                    } ).show();
                }
                jQuery( 'body' ).css( 'padding-bottom', '50px' );
            }
        } );
        googletag.pubads().refresh( [ slot ] );
    } );
};

var nextSlotId = 1;

ads.generateNextSlotName = function ( adType ) {
    var id = nextSlotId++;
    if ( typeof adType === 'undefined' ) {
        adType = 'instream';
    }
    return 'div-gpt-ad-' + id + '-' + adType;
};

ads.getNewAdContainer = function () {
    // Generate next slot name
    var slotName = ads.generateNextSlotName();

    // Create a div for the slot
    var slotDiv = document.createElement( 'div' );
    jQuery( slotDiv ).addClass( 'native-ad' );
    slotDiv.id = slotName + '-container';
    var innerContainer = document.createElement( 'div' );
    jQuery( innerContainer ).addClass( 'ad-container' );
    innerContainer.id = slotName; // id must be the same as slotName

    jQuery( slotDiv ).append( innerContainer );

    return slotDiv;
};

ads.generateStickyLeader = function () {
    var newContainer = ads.getNewAdContainer();
    jQuery( 'body' ).prepend( newContainer );
    jQuery( newContainer ).addClass( 'sticky-leader' ).css( 'display', 'none' );
};

ads.generateInstreamAds = function () {
    var skipValue = 0, elementType = 'p', startValue = 0, targeting = 'a';
    var showInstreamAds = true;
    ads.nextAdPosition = 0;				// reset the next ad position so targeting starts over at 1, A, B ...

    if ( adType == 'article' ) {
        skipValue = ads.adConfig.article.interval + 1;  // the count is off by one somewhere
        startValue = ads.adConfig.article.start;
        endPadding = ads.adConfig.article.endPadding;
        elementType = 'p';
    } else if ( adType == 'home' ) {
        skipValue = ads.adConfig.home.interval;
        startValue = ads.adConfig.home.start;
        endPadding = ads.adConfig.home.endPadding;
        elementType = 'section';
    } else if ( adType == 'section' ) {
        skipValue = ads.adConfig.section.interval;
        startValue = ads.adConfig.section.start;
        endPadding = ads.adConfig.section.endPadding;
        elementType = 'section';
    } else {
        skipValue = ads.adConfig.default.interval;
        startValue = ads.adConfig.default.start;
        endPadding = ads.adConfig.default.endPadding;
    }

    var elementsToTarget;
    var appendDiv;
    var newContainer;
    var duplicateCheck;

    if ( adType == 'article' ) {
        var containerToTarget = jQuery( 'div.content.article' ).last();
        elementsToTarget = [];
        jQuery( containerToTarget ).children( 'article' ).children( 'p' ).each( function ( i ) {
            var child = jQuery( this );
            if ( child.hasClass( 'Text_Endnote' ) || child.hasClass( 'Text_Tagline' ) ) {
                return false;  // end of article, end loop
            }
            if ( child.hasClass( 'Text_Info_HedLarge' ) || child.hasClass( 'Text_ChapterHead' ) || child.hasClass( 'Text_Info__NoIndent' )) {
                return true;   // continue, don't count these paragraphs
            }
            elementsToTarget.push( this );
        } );

        //
        // If article has 5 paragraphs or fewer, place one ad at bottom of article
        //


        if ( elementsToTarget.length <= 5 ) {
            appendDiv = jQuery( 'article:last p:last' );
            duplicateCheck = appendDiv.find('.instream');
            if( window.lazyLoad === true )
            {
                if( appendDiv.is(':appeared') === true && duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                    newContainer = ads.getNewAdContainer();
                    jQuery( newContainer ).addClass( 'instream' );
                    appendDiv.append( newContainer );
                    showInstreamAds = false;
                }
            }
            if( window.lazyLoad === false )
            {
                if( duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                    newContainer = ads.getNewAdContainer();
                    jQuery( newContainer ).addClass( 'instream' );
                    appendDiv.append( newContainer );
                    showInstreamAds = false;
                }
            }
        }

        //
        // If article has 6 to 9 paragraphs, place one ad after fourth paragraph
        //

        if ( elementsToTarget.length > 5 && elementsToTarget.length < 10 ) {
            appendDiv = jQuery( 'article:last p:nth-child(4)' );
            duplicateCheck = appendDiv.find('.instream');
            if( window.lazyLoad === true )
            {
                if( appendDiv.is(':appeared') === true && duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                    newContainer = ads.getNewAdContainer();
                    jQuery(newContainer).addClass('instream');
                    appendDiv.append(newContainer);
                    showInstreamAds = false;
                }
            }
            else if( window.lazyLoad === false )
            {
                if( duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                    newContainer = ads.getNewAdContainer();
                    jQuery(newContainer).addClass('instream');
                    appendDiv.append(newContainer);
                    showInstreamAds = false;
                }
            }
        }

        //
        // If article has 10 or more paragraphs, follow our instream ad configuration
        //

        elementsToTarget = elementsToTarget.slice( startValue - 1 );

    } else if ( adType == 'section' ) {
        var startElement = jQuery( 'div[data-offset]' ).last().children( elementType ).last();
        var index = 0;
        elementsToTarget = jQuery( elementType ).each( function ( i ) {
            if ( jQuery( this ).is( startElement ) ) {
                index = i;
                return false; // quit looping early
            }
        } ).slice( index );
    } else {
        elementsToTarget = jQuery( elementType ).slice( startValue - 1 );
    }

    if ( showInstreamAds ) {
        for ( var itemCount = 0; itemCount < jQuery( elementsToTarget ).length - 1; itemCount++ ) {
            if ( ( itemCount + 1 ) % skipValue === 0 || adType != 'section' && itemCount === 0 ) {
                var contentElement = elementsToTarget[ itemCount ];
                var nextDiv = jQuery( contentElement );
                duplicateCheck = nextDiv.next();
                if( window.lazyLoad === true )
                {
                    if( nextDiv.is(':appeared') === true && duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                        newContainer = ads.getNewAdContainer();
                        jQuery(newContainer).addClass('instream');
                        if (!nextDiv.hasClass('Text_Info_HedLarge') && !nextDiv.hasClass('Text_ChapterHead') && jQuery(elementsToTarget).length - itemCount > endPadding && !( adType == 'section' && itemCount === 0 )) {
                            nextDiv.after(newContainer);
                        }
                    }
                }
                else if( window.lazyLoad === false )
                {
                    if( duplicateCheck.hasClass('instream') === false ) { //check to see if paragraph is visible and new ad isnt already there
                        newContainer = ads.getNewAdContainer();
                        jQuery(newContainer).addClass('instream');
                        if (!nextDiv.hasClass('Text_Info_HedLarge') && !nextDiv.hasClass('Text_ChapterHead') && jQuery(elementsToTarget).length - itemCount > endPadding && !( adType == 'section' && itemCount === 0 )) {
                            nextDiv.after(newContainer);
                        }
                    }
                }
            }
        }
    }
};

ads.generateAndRefreshStickyAds = function ( ) {
    if ( jQuery.inArray( ads.getSectionPath(), ads.adConfig.enableStickyLeader ) > -1 || adType === 'home' ||
        adType == 'article' && ads.hoverAdFilled === false )
    {
        ads.generateStickyLeader();
        ads.refreshStickyLeader();
        ads.hoverAdFilled = true;
    }

    //$( '.native-ad' ).on( 'appear', function() {
    //  $( '.sticky-leader' ).remove();
    //});
    //$( '.native-ad' ).initAppear( { scrollDelay: 0 } );
};

ads.generateAndRefreshInstreamAds = function () {
    if ( jQuery.inArray( ads.getSectionPath(), ads.adConfig.disableInstreamAds ) === -1 && adType !== 'home' ) {
        ads.generateInstreamAds();
        setTimeout( ads.refreshInstreamAds, 400 );
    }
};

//
// Display the interstitial creative
// The DFP template has code that calls the mobileInterstitial object, which does the actual redirect
//

ads.doInterstitialTag = function () {
    googletag.cmd.push( function () {
        var interstitialSlot = googletag.defineSlot(
            dartSlotString,
            [ [ 320, 420 ] ],
            'div-gpt-ad-interstitial-1'
        )
            .addService( googletag.pubads() );
        googletag.display( 'div-gpt-ad-interstitial-1' );
        googletag.pubads().refresh( [ interstitialSlot ] );
    } );
};

//
// This object is called by code in the mobile interstitial template, defined in Google DFP.
// Here we build the URL and do the redirect
//

var mobileInterstitial = {
    doInterstitial: function () {
        if ( this.config.link === null ) {
            //console.log( "mobileInterstitial has no link!" );
        }
        else {
            if ( this.config.link.indexOf( "?" ) === -1 ) {
                this.config.link += "?refer=";
            }
            else {
                this.config.link += "&refer=";
            }
            this.config.link += encodeURIComponent( window.location.href );
            window.location.href = this.config.link;
        }
    },
    config: {
        link: null
    }
};

//
// Fixed positioning is weird in mobile. We stole this from jQuery mobile.
//

ads.fixedPosition = function () {
    var w = window,
        ua = navigator.userAgent,
        platform = navigator.platform,
    // Rendering engine is Webkit, and capture major version
        wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ ),
        wkversion = !!wkmatch && wkmatch[ 1 ],
        ffmatch = ua.match( /Fennec\/([0-9]+)/ ),
        ffversion = !!ffmatch && ffmatch[ 1 ],
        operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ ),
        omversion = !!operammobilematch && operammobilematch[ 1 ];

    if (
        // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
    ( ( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1 || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534 ) ||
        // Opera Mini
    ( w.operamini && ({}).toString.call( w.operamini ) === "[object OperaMini]" ) ||
    ( operammobilematch && omversion < 7458 ) ||
        //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
    ( ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 534 ) ||
        // Firefox Mobile before 6.0 -
    ( ffversion && ffversion < 6 ) ||
        // WebOS less than 3
    ( "palmGetResource" in window && wkversion && wkversion < 534 ) ||
        //those damn small screens
    ( screen.height < 450 ) ||
        // MeeGo
    ( ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1 ) ) {
        return false;
    }
    return true;
};

//
// Track clicks and refreshes to show interstitial
//

ads.incrementClickCounter = function () {
    //
    // Start the counter if we don't already have one, otherwise increment the count
    //
    var count = jQuery.cookie( 'clickCounter' ) || 0;
    jQuery.removeCookie( 'clickCounter' );
    jQuery.cookie( 'clickCounter', ++count, { path: '/' } );

    //
    // Reset counter if interstitialShown cookie has expired
    //

    if ( typeof jQuery.cookie( 'interstitialShown' ) === 'undefined' && count > 5 ) {
        jQuery.removeCookie( 'clickCounter' );
        jQuery.cookie( 'clickCounter', 0, { path: '/' } );
    }

    //
    // Display interstitial
    //

    if ( count === 5 && typeof jQuery.cookie( 'interstitialShown' ) === 'undefined' ) {
        var d = new Date();
        var tomorrow = d.getTime() + 24 * 60 * 60 * 1000;
        jQuery.cookie( 'interstitialShown', 1, { expires: tomorrow, path: '/' } );
        ads.doInterstitialTag();
    }
    else {
        jQuery( document ).trigger( 'no-interstitial' );
    }
};

//
// Get our current section
//

ads.getSectionPath = function () {
    if ( typeof SectionFront !== 'undefined' && SectionFront.hasOwnProperty( 'sectionPath' ) ) {
        return SectionFront.sectionPath;
    }
    if ( typeof ArticleView !== 'undefined' && ArticleView.hasOwnProperty( 'sectionPath' ) ) {
        return ArticleView.sectionPath;
    }
    return false;
};

//
// Get articleId
//

ads.getArticleId = function () {

        return $.cookie( 'sectionArticle' ).split( '|' )[ 0 ];;
};

jQuery( document ).ready( function ( $ ) {

    ads.locationTargeting = 'a';
    if ( adType == 'section' || adType == 'home' ) {
        ads.locationTargeting = 'f';
    }

    //
    // Increment our interstitial click counter on every page load and check whether to display the ad
    //

    ads.incrementClickCounter();

    //refresh and generate sticky ad when adCreated event fired
    $( document ).on( 'adCreated', ads.generateAndRefreshStickyAds );
    //refresh and generate inline ads when adCreated event fired (logic will only generate if visible)
    $( document ).on( 'adCreated', ads.generateAndRefreshInstreamAds );
    //refresh and generate inline ads on scroll (logic will only generate if visible)
    $(window).scroll(function () {
        ads.generateAndRefreshInstreamAds();
    });

   setTimeout( function () {
       $( document ).trigger( 'adCreated' );
   }, 400 );
} );


var StribMobileCommon = {};
StribMobileCommon.searchTerm = null;
currScrollPos = 0;
/** Toggles menu depending on it's current state
 * @menuObj jQuery menu object
 **/
StribMobileCommon.showHideMenu = function ( menuObj ) {
    if ( menuObj.css( 'display' ) === 'none' ) {
        menuObj.css( 'min-height', ( jQuery( window ).height() - StribMobileMain.headerHeight ) + 'px' );
        menuObj.show();
        jQuery( document ).trigger( 'st.show-menu' );
        currScrollPos = jQuery( document ).scrollTop();
        jQuery( document ).scrollTop( 0 );
        jQuery( '.content-scroll' ).hide();
    }
    else {
        menuObj.hide();
        jQuery( '.content-scroll' ).show();
        jQuery( document ).scrollTop( currScrollPos );
    }
}

/**
 * Gets more stories in html
 * @lastId (string) last story id in list
 * @qty (int) number of stories to get
 * @elementClass (string) className of element
 * @eventElment (object) Element that triggered the event
 **/
StribMobileCommon.getMoreStories = function ( elementClass, eventElement, pageType ) {
    var sectionIds = [];
    var sectionPath = null;
    StribMobileCommon.pageType = pageType;
    if ( StribMobileCommon.pageType != 'search' ) {
        if ( parseInt( SectionFront.currentIndex ) + 10 > SectionFront.sectionIds.length ) {
            var lastId = parseInt( SectionFront.sectionIds[ SectionFront.sectionIds.length - 1 ], 36 );
            // This always fails, but it continues to muddle the url strings
            // TODO: Take what's left in the list and mark correct last in url with correct index
            jQuery.ajax( {
                type: 'GET',
                url: '/resolvelist/' + lastId + '/100/?path=' + encodeURIComponent( SectionFront.sectionPath ),
                async: false
            } ).done( function ( data ) {
                SectionFront.sectionIds = SectionFront.sectionIds.concat( data );
                var sectionInfo = $.parseJSON( $.cookie( 'sectionInfo' ) );
                var sectionInfo = sectionInfo.ids = SectionFront.sectionIds;
                jQuery.cookie( 'sectionInfo', sectionInfo, { expires: 1, path: '/' } );
            } ).fail( function () {
                jQuery( '.btn--more' ).hide();
            } );
        }
        sectionIds = JSON.stringify( StribMobileCommon.getNextSectionIds( parseInt( SectionFront.currentIndex ) + 1, 10 ) );
        sectionPath = SectionFront.sectionPath;
        SectionFront.currentIndex = parseInt( SectionFront.currentIndex ) + 10;
        jQuery.cookie( 'sectionIndex', SectionFront.currentIndex, { expires: 1, path: '/' } );
        SectionFront.lastArticleId = parseInt( SectionFront.sectionIds[ SectionFront.currentIndex ], 36 );
    }
    else {
        StribMobileCommon.searchTerm = encodeURIComponent( $.cookie( 'q' ) );
        if ( StribMobileCommon.searchTearm == '' ) {
          StribMobileCommon.searchTearm = '%20';
        }
        StribMobileCommon.searchType = $.cookie( 'searchType' );
        StribMobileCommon.pageCount = parseInt( $.cookie( 'page' ) ) + 1;

        //Occasionally we need to display more than a single page worth of data on a page. So
        //kick start the pagination in the correct place
        if ( $.cookie( 'rows' ) != $.cookie( 'resultsPerPage' ) ) {
            var page = parseInt( $.cookie( 'rows' ) ) / parseInt( $.cookie( 'resultsPerPage' ) );
            StribMobileCommon.pageCount = page + 1;
            $.cookie( 'rows', $.cookie( 'resultsPerPage' ), { expires: 365, path: '/' } ); //Set back to original value so we can paginate normally
        }
    }

    /** Get button position before html is appended for scrolling position **/
    var element = jQuery( '.' + elementClass );
    var elementTop = jQuery( eventElement ).position().top;
    var top = jQuery( '.content-scroll' ).scrollTop();
    var location = domain + '/getarticles/more/' + encodeURIComponent( sectionIds ) + '?section=' + sectionPath;

    if ( pageType == 'search' ) {
        location = domain + '/getsearchresults/' + StribMobileCommon.pageCount + '/' + StribMobileCommon.searchType + '/' + StribMobileCommon.searchTerm;

        if ( StribMobileCommon.searchType == 'obituaries' ) {
            location = location + '/' + $.cookie( 'dateFilter' );
        }
    }

    var elementContent = jQuery( eventElement ).html();
    //TODO: Use cf
    jQuery( eventElement ).html( '<div class="spinner-wrapper"><div class="spinner-text">LOADING</div><div class="spinner"></div><div style="clear:both;"></div></div>' ).addClass( 'focus' );
    jQuery.ajax( {
        type: 'GET',
        url: location
    } ).done( function ( htmlStr ) {
        /** Append html **/
        element.append( htmlStr );
        jQuery( eventElement ).html( elementContent );

        /** Now scroll to the previous location of the button so newest story shows at the top of the screen **/
        jQuery( 'html, body' ).animate( { scrollTop: top + elementTop - 100 }, 1000 );

        var btnWrapper = jQuery( eventElement ).parent();
        var btnCode = jQuery( btnWrapper ).html();
        btnWrapper.html( '' );
        btnWrapper.html( btnCode );
        jQuery( '.btn--more' ).removeClass( 'focus' ).blur().on( 'click', function () {
            StribMobileCommon.getMoreStories( 'content-area', this, StribMobileCommon.pageType, SectionFront.lastArticleID );
        } );

        if ( pageType != 'search' ) {
            var sectionPath = $.cookie( 'sectionPath' );
            var pathName = window.location.pathname;
            if ( pathName.indexOf( sectionPath ) != -1 ) sectionPath = '';

            var stateObj = { content: "morearticles" };

            var additionalQueries = '?';
            var categoryParts = '';
            if ( window.location.search && pathName.indexOf( 'categories' ) > -1 ) {
                sectionPath = pathName;
                additionalQueries = window.location.search;
                if ( $.cookie( 'category' ) ) {
                    additionalQueries = $.cookie( 'category' ) + '&';
                }
                else if ( window.location.search.indexOf( 'lastid' ) > -1 ) {
                    categoryParts = additionalQueries.split( '&lastid' );
                    additionalQueries = categoryParts[ 0 ] + '&';
                }
                else {
                    additionalQueries = window.location.search + '&';
                }
            }
            history.replaceState( stateObj, $( 'title' ), sectionPath + additionalQueries + 'lastid=' + SectionFront.lastArticleId + '&index=' + SectionFront.currentIndex );
        }
        else {
            var historyUrl = '';
            if ( StribMobileCommon.searchType == 'siteSearch' ) {
                historyUrl = '/search/?q=' + StribMobileCommon.searchTerm + '&page=' + StribMobileCommon.pageCount;
            }
            else if ( StribMobileCommon.searchType == 'obituaries' ) {
                var dateFilter = $.cookie( 'dateFilter' );
                historyUrl = '/obituaries/search/?q=' + StribMobileCommon.searchTerm + '&page=' + StribMobileCommon.pageCount + '&dateFilter=' + dateFilter;
            }
            else if ( StribMobileCommon.searchType == 'todays' ) {
                historyUrl = '/obituaries/todays/?page=' + StribMobileCommon.pageCount;
            }
            var stateObj = { content: "searchresults" };
            history.replaceState( stateObj, $( 'title' ), historyUrl );
            jQuery.cookie( 'page', StribMobileCommon.pageCount, { expires: 1, path: '/' } );
        }

        // Increment counter and check if we show interstitial ad
        if ( typeof ads === 'object' && typeof ads.incrementClickCounter === 'function' ) {
            ads.incrementClickCounter();
        }

        // Refresh ads
        setTimeout( function () {
            $( document ).trigger( 'adCreated' );
        }, 400 );
    } ).fail( function () {
        jQuery( '.btn--primary' ).hide();
    } );
}

StribMobileCommon.getNextSectionIds = function ( index, count ) {
    if ( StribMobileCommon.pageType != 'search' ) {
        var requestedSectionIds = null;

        requestedSectionIds = SectionFront.sectionIds.slice( index, index + count );

        return requestedSectionIds;
    }
}

var StribMobileMain = {};
StribMobileMain.headerHeight = null;
StribMobileMain.zipCode = null;
StribMobileMain.domain = null;

//Detect if browser is native android browser
var nua = navigator.userAgent;
var is_android = ((nua.indexOf( 'Mozilla/5.0' ) > -1 && nua.indexOf( 'Android ' ) > -1 && nua.indexOf( 'AppleWebKit' ) > -1) && !(nua.indexOf( 'Chrome' ) > -1));

jQuery( function ( $ ) {
    //FastClick: eliminates 300ms delay on mobile browsers
    FastClick.attach(document.body);

    if ( document.domain == 'startribune.com' ) {
        StribMobileMain.domain = 'm.startribune.com';
    } else {
        StribMobileMain.domain = document.domain;
    }

    //*Set global variable for header height
    StribMobileMain.headerHeight = $( '.site-header' ).height() + 20;

    /** Init left menu **/
    $( '.nav-btn-left' ).on( 'click', function () {
        $( '.menu-right' ).hide();
        StribMobileCommon.showHideMenu( $( '.menu-left' ) );
    } );

    /** Init right menu **/
    $( '.nav-btn-right' ).on( 'click', function () {
        $( '.menu-left' ).hide();
        StribMobileCommon.showHideMenu( $( '.menu-right' ) );
    } );

    /** Init footer open menu link **/
    $( '.open-nav' ).on( 'click', function ( e ) {
        e.preventDefault();
        StribMobileCommon.showHideMenu( $( '.menu-left' ) );
    } );

    /*** Adds padding to the top so scrolling content is below floating header ***/
    $( '.site-container' ).css( 'padding-top', StribMobileMain.headerHeight + 'px' );

    /*** Get location if not available, then init weather ***/
    if ( typeof( $.cookie( 'weatherZipCode' ) ) !== 'undefined' ) {
        StribMobileMain.zipCode = $.cookie( 'weatherZipCode' );
    }
    if ( StribMobileMain.zipCode == null ) StribMobileMain.getLocation();
    else {
        StribMobileMain.getWeatherByZip( StribMobileMain.zipCode );
    }

    StribMobileMain.initOrientationChange();

    // One way scrolling issue can be fixed
    $( 'nav a, .section-label a, .menu-left a' ).on( 'click', function () {
        var isRemoved = $.removeCookie( 'sectionArticle', { path: '/' } );
        if ( !isRemoved ) $.removeCookie( 'sectionArticle' );
    } );

    // Just in case the top doesn't do it.
    if ( $.cookie( 'sectionInfo' ) && $.cookie( 'sectionArticle' ) ) {
        //delete all forward slashes in section path because of inconsistencies
        var re = new RegExp( '/', 'g' );
        if ( $.cookie( 'sectionArticle' ).split( '|' )[ 1 ].replace( re, '' ) != $.parseJSON( $.cookie( 'sectionInfo' ) ).path.replace( re, '' ) ) {
            //console.log( 'Section Viewed on: ' + $.cookie( 'sectionArticle' ).split( '|' )[1].replace( re , '' ) + ' Section Info path: ' + $.parseJSON( $.cookie( 'sectionInfo' ) ).path.replace( re , '' ) );
            var isRemoved = $.removeCookie( 'sectionArticle', { path: '/' } );
            if ( !isRemoved ) $.removeCookie( 'sectionArticle' );
        }
    }

    // Get section info for navigation ajax call
    var sectionPath = 'place=' + encodeURIComponent( window.location.pathname );
    if( typeof sectionNav != 'undefined' ) {
        sectionPath = 'place=' + encodeURIComponent( sectionNav );
    }
    if ( window.location.search ) {
        sectionPath += '&' + window.location.search.slice( 1 );
    }

    jQuery.ajax( {
        type: 'GET',
        url: domain + '/getnavigation?' + sectionPath
    } ).done( function ( res ) {
        jQuery( '#js-navigation-menu' ).html( res );
    } );

    $( 'a.signin, a.signout' ).on( 'click', StribMobileMain.linkToSignInOut );

    $( 'a#star-tribune-desktop-url').add( 'a#manage-subscription' ).on( 'click', function ( e ) {
        $.cookie( '__cf_mob_redir', '0', { domain: '.startribune.com', expires: 1, path: '/' } );
        e.preventDefault();
        var location = window.location.pathname;
        if ( window.location.search && location.indexOf( 'obituaries/detail' ) > -1 ) {
          location = location + '?' +  window.location.search.slice( 1 );
        }
        if( typeof sectionNav != 'undefined' ) {
            location = 'http://www.startribune.com' + sectionNav;
        }
        if( $(this).attr( 'id' ) == 'manage-subscription' ) {
            location = $(this).attr( 'href' );
        }
        document.location = 'http://www.startribune.com/templates/full_site_redirect?rurl=' + encodeURIComponent( location );
    } );
} );

jQuery(document).ready(function($) {
    var un = jQuery.cookie('st_usr_name');

    if ( typeof un !== 'undefined') {
        if (jQuery.trim(un).length === 0) {
            var blank = jQuery.cookie("blank_login");
            if (!blank) {
                jQuery.cookie("blank_login", true);
                window.location.href = "/signout?path=" + encodeURIComponent(document.location);
            }

        }
        else if (jQuery.trim(un).length !== 0) {
            var editedUsername = jQuery.trim(un);

            jQuery('#the_username').html(editedUsername);
            jQuery('#signed-in').show();
            jQuery('#signed-out').hide();

            jQuery.removeCookie('blank_login');
        }
    }
    else {
        jQuery.removeCookie('blank_login');
    }
});

StribMobileMain.linkToSignInOut = function ( e ) {
    e.preventDefault();
    var action = $( this ).attr( 'href' ).split( '?' )[ 0 ];
    document.location = action + '?path=' + encodeURIComponent( document.location );

};

StribMobileMain.initOrientationChange = function () {
    // Listen for orientation changes
    window.addEventListener( 'orientationchange', function () {
        // Set global variable for header height
        StribMobileMain.headerHeight = $( '.site-header' ).height() + 20;
    }, false );
};


StribMobileMain.getLocation = function () {
    //Default to 55488 everywhere, except the weather page ask the location using navigator.geolocation
    StribMobileMain.getWeatherByZip( '55488' );
    return false;
};

StribMobileMain.geoLocationError = function ( error ) {
    switch ( error.code ) {
        case error.PERMISSION_DENIED:
            StribMobileMain.getWeatherByZip( '55488' );
            break;
        case error.POSITION_UNAVAILABLE:
            StribMobileMain.getWeatherByZip( '55488' );
            break;
        case error.TIMEOUT:
            StribMobileMain.getWeatherByZip( '55488' );
            break;
        case error.UNKNOWN_ERROR:
            StribMobileMain.getWeatherByZip( '55488' );
            console.log( 'Geolocation error = ' + error );
            break;
        default:
            StribMobileMain.getWeatherByZip( '55488' );
            console.log( 'Geolocation error = ' + error );
            break;
    }
};

StribMobileMain.getWeatherByPosition = function ( position ) {
    var path = domain + '/getweather/geo/' + position.coords.latitude + '/' + position.coords.longitude;
    StribMobileMain.getWeather( path );
};

StribMobileMain.getWeatherByZip = function ( zipcode ) {
    var path = domain + '/getweather/zip/' + zipcode;
    StribMobileMain.getWeather( path );
};

StribMobileMain.getWeather = function ( path ) {
    jQuery.ajax( {
        type: 'GET',
        url: path
    } ).done( function ( data ) {
        var weatherPageUrl = jQuery( '.weather-container a' ).attr( 'href' );
        //set zipcode cookie here if one isn't set
        if ( typeof( $.cookie( 'weatherZipCode' ) ) === 'undefined' || window.location.pathname.indexOf( 'weather' ) != -1 ) {
            $.cookie( 'weatherZipCode', data.zipCode, { expires: 1 / 24, path: '/' } );
        }
        jQuery( '.weather-location-name' ).html( data.weatherLocationName );
        jQuery( '.weather-temp' ).html( data.weatherTemp + '&deg;' );
        jQuery( '.weather-container .weather-icon' ).addClass( 'icon-' + data.weatherCondition );
        jQuery( '.weather-condition-short' ).html( data.weatherConditionShort );
        jQuery( '.weather-loading' ).hide();
        jQuery( '.weather-container' ).show();
        weatherPageUrl = weatherPageUrl + '/' + data.zipCode + '/';
        jQuery( '.weather-container a' ).attr( 'href', weatherPageUrl );
        if ( jQuery( '.weather-panel' ) ) {
            jQuery( '.weather-panel .weather-icon' ).addClass( 'icon-' + data.weatherCondition + '--dark' );
            jQuery( '.weather-panel a' ).attr( 'href', weatherPageUrl );
        }
    } );
};


//# sourceMappingURL=main.min.js.map