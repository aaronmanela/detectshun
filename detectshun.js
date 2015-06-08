!function(e,t){typeof module!="undefined"&&module.exports?module.exports.browser=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=n(/edge\/(\d+(\.\d+)?)/i),a=n(/version\/(\d+(\.\d+)?)/i),f=/tablet/i.test(t),l=!f&&/[^-]mobi/i.test(t),c;/opera|opr/i.test(t)?c={name:"Opera",opera:e,version:a||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?c={name:"Yandex Browser",yandexbrowser:e,version:a||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(c={name:"Windows Phone",windowsphone:e},u?(c.msedge=e,c.version=u):(c.msie=e,c.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?c={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?c={name:"Microsoft Edge",msedge:e,version:u}:/chrome|crios|crmo/i.test(t)?c={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(c={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},a&&(c.version=a)):/sailfish/i.test(t)?c={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?c={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(c={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(c.firefoxos=e)):/silk/i.test(t)?c={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?c={name:"Android",version:a}:/phantom/i.test(t)?c={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?c={name:"BlackBerry",blackberry:e,version:a||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(c={name:"WebOS",webos:e,version:a||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(c.touchpad=e)):/bada/i.test(t)?c={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?c={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||a}:/safari/i.test(t)?c={name:"Safari",safari:e,version:a}:c={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!c.msedge&&/(apple)?webkit/i.test(t)?(c.name=c.name||"Webkit",c.webkit=e,!c.version&&a&&(c.version=a)):!c.opera&&/gecko\//i.test(t)&&(c.name=c.name||"Gecko",c.gecko=e,c.version=c.version||n(/gecko\/(\d+(\.\d+)?)/i)),!c.msedge&&(o||c.silk)?c.android=e:i&&(c[i]=e,c.ios=e);var h="";c.windowsphone?h=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(h=n(/os (\d+([_\s]\d+)*) like mac os x/i),h=h.replace(/[_\s]/g,".")):o?h=n(/android[ \/-](\d+(\.\d+)*)/i):c.webos?h=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):c.blackberry?h=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):c.bada?h=n(/bada\/(\d+(\.\d+)*)/i):c.tizen&&(h=n(/tizen[\/\s](\d+(\.\d+)*)/i)),h&&(c.osversion=h);var p=h.split(".")[0];if(f||i=="ipad"||o&&(p==3||p==4&&!l)||c.silk)c.tablet=e;else if(l||i=="iphone"||i=="ipod"||o||c.blackberry||c.webos||c.bada)c.mobile=e;return c.msedge||c.msie&&c.version>=10||c.yandexbrowser&&c.version>=15||c.chrome&&c.version>=20||c.firefox&&c.version>=20||c.safari&&c.version>=6||c.opera&&c.version>=10||c.ios&&c.osversion&&c.osversion.split(".")[0]>=6||c.blackberry&&c.version>=10.1?c.a=e:c.msie&&c.version<10||c.chrome&&c.version<20||c.firefox&&c.version<20||c.safari&&c.version<6||c.opera&&c.version<10||c.ios&&c.osversion&&c.osversion.split(".")[0]<6?c.c=e:c.x=e,c}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n})

var detectshun = {
    feature: function(needs, callback) {
        var supported = document.getElementsByTagName('html')[0].className.split(/\s+/);
        var score = 0;

        for (var i = 0; i < needs.length; i++) {
            var has = supported.indexOf(needs[i]);
            if (has != -1) {
                score++;
            }
        }

        if (score < 1) {
            console.log("WARNING: detectshun requires modernizr 2.x or higher to be included in your project");
            callback(false);
        } else {
            if (score == needs.length) {
                callback(true);
            } else {
                callback(false);
            }
        }
    },

    browser: function() {
        var grade = null;

        if(bowser.a) {
            grade = "a";
        } else if(bowser.c) {
            grade = "c";
        } else {
            grade = "x";
        }

        return {
            name: bowser.name,
            version: bowser.version,
            grade: grade
        };
    }
};