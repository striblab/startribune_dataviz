/**
 * Created by dowelec on 9/14/15.
 */

var ST_Analytics = function ($) {

    var module = {},
        omniture = {
            'dataLayer': {}
        };

    /**
     * Entry point into class
     *
     * @param dataLayer
     */
    module.om = function (dataLayer) {
        omniture.dataLayer = (typeof dataLayer == 'object') ? dataLayer : {};
        omniture.exec();
    };

    module.getContentType = function() {
        if (omniture.getData('pageName', 'StarTribune') == 'm.startribune.com Front') {
            return 'homepage';
        }

        return omniture.getData('contentType', 'unknown');
    };

    /**
     *
     * @param key
     * @param defaultValue
     * @returns {*}
     */
    omniture.getData = function (key, defaultValue) {
        if (typeof omniture.dataLayer == 'object' && omniture.dataLayer.hasOwnProperty(key)) {
            return omniture.dataLayer[key];
        }
        if (typeof defaultValue == 'string' || typeof defaultValue == 'number') {
            return defaultValue;
        }

        return '';
    };

    /**
     *
     */
    omniture.exec = function () {

        var helpers = {};

        s.trackingServer = "metrics.startribune.com";
        s.trackingServerSecure = "smetrics.startribune.com";
        s.visitorMigrationServer = "metrics.startribune.com";
        s.visitorMigrationKey = "4DB8D2C6";
        s.visitorNamespace = "startribune";

        /**
         *
         */
        s.setupPrevious = function () {
            var s = this;
            s.prop43 = s.c_r('ppn');
            s.c_w('ppn', s.pageName);
            s.prop48 = s.c_r('pcn');
            s.c_w('pcn', s.channel);
            s.prop49 = s.c_r('pc7');
            s.c_w('pc7', s.prop7);
            s.prop50 = s.c_r('pc3');
            s.c_w('pc3', s.prop3);
        };

        /**
         *
         */
        s.getMonthlyVisitNumber = function () {
            var s = this;
            var e = new Date();
            var ct = e.getYear() + '-' + e.getMonth();
            c = 'mvn-' + ct;

            var e = new Date();
            var ct = e.getTime();
            var day = 24 * 60 * 60 * 1000;
            e.setTime(ct + 3 * 365 * day);

            var mvn = s.c_r(c);
            if (mvn.length == 0) {
                mvn = 1;
                s.c_w(c, mvn, e);
            } else {
                mvn = parseInt(mvn) + 1;
                s.c_w(c, mvn, e);
            }

            return mvn;
        };

        /**
         *
         * @param c
         * @returns {*}
         */
        s.getDaysSinceLastVisit = function (c) {
            var s = this;
            var e = new Date();
            var es = new Date();
            var cval, cval_s, cval_ss;
            var ct = e.getTime();
            var day = 24 * 60 * 60 * 1000;
            var f1, f2, f3, f4, f5;

            c = c ? c : 'dslv';

            e.setTime(ct + 3 * 365 * day);
            es.setTime(ct + 30 * 60 * 1000);
            f0 = 'Cookies Not Supported';
            f1 = 'First Visit';
            f2 = 'More than 30 days';
            f3 = 'More than 7 days';
            f4 = 'Less than 7 days';
            f5 = 'Less than 1 day';

            cval = s.c_r(c);
            if (cval.length == 0) {
                s.c_w(c, ct, e);
                s.c_w(c + '_s', f1, es);
            } else {
                var d = ct - cval;
                if (d > 30 * 60 * 1000) {
                    if (d > 30 * day) {
                        s.c_w(c, ct, e);
                        s.c_w(c + '_s', f2, es);
                    } else if (d < 30 * day + 1 && d > 7 * day) {
                        s.c_w(c, ct, e);
                        s.c_w(c + '_s', f3, es);
                    } else if (d < 7 * day + 1 && d > day) {
                        s.c_w(c, ct, e);
                        s.c_w(c + '_s', f4, es);
                    } else if (d < day + 1) {
                        s.c_w(c, ct, e);
                        s.c_w(c + '_s', f5, es);
                    }
                } else {
                    s.c_w(c, ct, e);
                    cval_ss = s.c_r(c + '_s');
                    s.c_w(c + '_s', cval_ss, es);
                }
            }
            cval_s = s.c_r(c + '_s');
            if (cval_s.length == 0)
                return f0;
            else if (cval_s != f1 && cval_s != f2 && cval_s != f3 && cval_s != f4 && cval_s != f5)
                return '';
            else return cval_s;
        };

        /**
         *
         * @param l
         * @param d
         * @returns {Array}
         */
        s.split = function (l, d) {
            var i;
            var x = 0;
            var a = [];
            while (l) {
                i = l.indexOf(d);
                i = i > -1 ? i : l.length;
                a[x++] = l.substring(0, i);
                l = l.substring(i + d.length);
            }
            return a;
        };

        /**
         *
         * @param d
         * @param cn
         * @returns {*}
         */
        s.getNewRepeat = function (d, cn) {
            var s = this;
            var e = new Date();
            var cval, sval;
            var ct = e.getTime();

            d = d ? d : 30;
            cn = cn ? cn : 's_nr';

            e.setTime(ct + d * 24 * 60 * 60 * 1000);
            cval = s.c_r(cn);
            if (cval.length == 0) {
                s.c_w(cn, ct + '-New', e);
                return 'New';
            }

            sval = s.split(cval, '-');
            if (ct - sval[0] < 30 * 60 * 1000 && sval[1] == 'New') {
                s.c_w(cn, ct + '-New', e);
                return 'New';
            } else {
                s.c_w(cn, ct + '-Repeat', e);
                return 'Repeat';
            }
        };

        /**
         *
         * @param dob
         * @returns {number}
         */
        helpers.getAge = function (dob) {
            var now = new Date();
            var past = new Date(dob);
            var nowYear = now.getFullYear();
            var pastYear = past.getFullYear();
            return nowYear - pastYear;
        };

        /**
         * @TODO: Remove once we're using tracking pixel
         *
         * @param e
         */
        document.doSwipebox = function (e) {
            s.prop3 = 'Photo';
            s.events = null;
            s.t(this, 'o');
        };

        if (omniture.getData('author')) {
            s.eVar18 = omniture.getData('author');
            s.eVar19 = s.eVar18;
            s.prop35 = s.eVar18;
        }

        if (omniture.getData('publishDate')) {
            s.prop65 = omniture.getData('publishDate');
        }

        s.channel = omniture.getData('channel', 'news');
        s.eVar14 = s.channel;
        s.eVar15 = s.channel;

        // TODO: What's the defaultValue?
        s.prop7 = omniture.getData('subsection');
        s.eVar16 = s.prop7;
        s.eVar17 = s.prop7;

        s.prop24 = s.prop3;

        if (omniture.getData('blogName')) {
            s.prop24 = omniture.getData('blogName');
        }

        //Meter count
        if (document.hasOwnProperty( 'rskunk' ) && typeof document.rskunk() != 'undefined') {
            var rskunkCookie = jQuery.cookie( document.rskunk().config.storageKey );
            var rskunkDecoded = document.rskunk().decompress( rskunkCookie );

            if( rskunkDecoded.views.length != 0 ) {
                var count = rskunkDecoded.views.length;
                s.prop73 = count;
                s.eVar23 = count;
            }
        }

        if (omniture.getData('prop74')) s.prop74 = omniture.getData('prop74');
        if (omniture.getData('prop75')) s.prop75 = omniture.getData('prop75');

        if (s.eVar12 == 'm.startribune.com Front') {
            s.prop3 = 'homepage';
        }
        else {
            s.prop3 = omniture.getData('contentType', 'unknown');
        }

        s.events = 'event41';
        if ((s.prop3 == 'story' || s.prop3 == 'blog')) {
            s.events += ',event42';
        }
        //if (omniture.getData('event58') == 'Yes') {
        //    s.events += ',event58';
        //}

        s.pageName = omniture.getData('pageName', 'StarTribune');
        s.eVar12 = s.pageName;
        s.eVar13 = s.pageName;

        s.prop39 = s.getNewRepeat();
        s.prop40 = s.getDaysSinceLastVisit();

        var subId = $.cookie('st_usr_sub_id');
        if (subId) {
            s.eVar20 = subId;
        } else {
            s.eVar20 = 'No DTI ID';
        }
        s.prop20 = s.eVar20;


        var username = $.cookie('st_usr_name');
        var saml = $.cookie('st_usr_saml_id');
        var email = $.cookie('st_usr_email');

        if (username || saml) { //There is a weird half logged in state. It's missing the username cookie and ONLY the username cookie. SAML is still there though.
            if (username) {
                s.eVar7 = username;
            } else if (email) {
                s.eVar7 = email;
            } else {
                s.eVar7 = 'N.A.';
            }
            s.eVar32 = '+1';
            s.prop33 = 'Logged In';
        } else {
            s.eVar7 = 'Not Logged In';
            s.prop33 = 'Not Logged In';
            s.eVar33 = '+1';
        }

        s.prop16 = s.eVar7;
        s.prop38 = s.getMonthlyVisitNumber();

        s.server = 'm.startribune.com';

        if (omniture.getData('photoGallery')) {
            s.eVar42 = 'Yes';
        }

        s.prop1 = omniture.getData('url');

        if (omniture.getData('isAjax')) {
            s.prop1 = document.location.href;
        }

        if (omniture.getData('contentSource')) {
            s.prop4 = omniture.getData('contentSource');
        }

        s.eVar31 = '+1';

        s.zip = $.cookie('weatherZipCode');

        s.prop36 = $.cookie('usersubs');
        s.prop8 = $.cookie('st_usr_zip'); //zip for logged in users
        s.prop9 = $.cookie('st_usr_gender'); //gender
        s.prop10 = $.cookie('st_usr_birth_date');//age

        s.prop71 = 'websites';

        s.setupPrevious();
        //var s_code = s.t();

        if (omniture.getData('contentType') && omniture.getData('contentType') != 'story' && omniture.getData('contentType') != 'blog') {
            window.pageViewShouldFired = false;
        }
    };

    return module;
}(jQuery);
