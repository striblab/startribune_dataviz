/**
 * Created by dowelec on 10/13/15.
 */

var ST_Analytics_Click_Tracking = function ($) {

    var module = {
            'linkName': 'eVar48',
            'prefixString': 'user interaction: '
        },
        defaults = {
            'eVar44': 'm.startribune.com',
            'server': 'm.startribune.com',
            'eVar46': 'D=pageName',
            'eVar74': 'D=c3'
        },
        contentTypeString = 'prop3',
        selectors = 'a, input[type=submit], .btn--more, .nav-btn-left, .nav-btn-right, .featured-html-js a',
        click = {
            'events': ['event3']
        };

    /**
     *
     * @param eVarDefaults
     * @param events
     * @param clickSelectors
     * @param contentType
     */
    module.listen = function (eVarDefaults, events, clickSelectors, contentType) {
        if (typeof clickSelectors === 'string') {
            selectors = clickSelectors;
        }
        if (typeof contentType == 'string') {
            contentTypeString = contentType;
        }
        $(document).on('click', selectors, function (e) {
            var that = this;

            if ($(that).parents().hasClass('featured-html-js')) {
                var linkName = 'Featured Html';
                if (typeof $(that).text() == 'string') {
                    linkName = $(that).text().trim();
                }
                that = $('.featured-html-js');

                $(that).attr('data-linkName', linkName);
            }

            click.clickTracking(that);

            return true;
        });
        if (typeof eVarDefaults == 'object') {
            for (var key in eVarDefaults) {
                if (eVarDefaults.hasOwnProperty(key)) {
                    defaults[key] = eVarDefaults[key];
                }
            }
        }
        if (typeof events == 'object' && events.length != 0) {
            click.events = events;
        }
    };

    /**
     *
     * @param object
     */
    click.clickTracking = function (object) {
        var objAttributes = $(object).get(0).attributes;
        var trackingObject = {};
        var linkName = '';
        var events = [];

        for (var i = 0; i < objAttributes.length; i++) {
            var attr = objAttributes[i];
            var isVar = attr.name.indexOf("data-evar") >= 0;

            if (isVar || attr.name.indexOf("data-prop") >= 0) {
                var correctKey = attr.name.replace("data-", "");
                if (isVar) {
                    var upperName = correctKey.replace("evar", "eVar");
                    trackingObject[upperName] = attr.value;
                }
                else {
                    trackingObject[correctKey] = attr.value;
                }
            }
        }

        if ($(object).data('customevents')) {
            var customEvents = $(object).data('customevents').split(',');
            events = events.concat(customEvents);
        }

        if ($(object).data('linkname')) {
            linkName = $(object).data('linkname');
        }

        if (trackingObject.length != 0 && linkName) {
            click.userInteraction(trackingObject, linkName, events);
        }
    };

    /**
     *
     * @param vars
     * @param linkName
     */
    click.userInteraction = function (vars, linkName, events) {
        try {
            s.linkTrackEvents = click.events.concat(events).join(',');
            s.events = s.linkTrackEvents;
            s.linkTrackVars = 'events';
            //Default eVars
            if (contentTypeString != '' && typeof window.analytics != 'undefined' &&
                window.analytics.hasOwnProperty(contentTypeString))
            {
                vars[contentTypeString] = window.analytics[contentTypeString];
            }
            vars[module.linkName] = linkName;
            for (var eVar in defaults) {
                if (defaults.hasOwnProperty(eVar)) {
                    vars[eVar] = defaults[eVar];
                }
            }
            //Setup eVars on 's'
            if (typeof vars === 'object') {
                for (var key in vars) {
                    if (vars.hasOwnProperty(key)) {
                        s[key] = vars[key];
                        s.linkTrackVars += ',' + key;
                    }
                }
            }
            s.tl(this, 'o', module.prefixString + linkName);
        } catch (e) {}
    };

    return module;
}(jQuery);

