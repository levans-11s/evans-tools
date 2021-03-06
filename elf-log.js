/**
 * Created by Lisa Evans on 2/21/16.
 */
/**
 * Created by charlie on 11/30/15.
 */

(function() {

    'use strict';

    function ElfLog() {
        this.debugLevel = this.logLevelWarn;
    }

    //var levels = ['error', 'warn', 'info', 'silent'];
    var that;

    /* ElfLog.prototype.logLevelError = 0;
    ElfLog.prototype.logLevelWarn = 1;
    ElfLog.prototype.logLevelDetails = 2;
    ElfLog.prototype.logLevelInfo = 3;
    ElfLog.prototype.logLevelSilent = 4; */

    ElfLog.prototype.logLevelMinorDetails = 0;
    ElfLog.prototype.logLevelDetails = 1;
    ElfLog.prototype.logLevelWarn = 2;
    ElfLog.prototype.logLevelError = 3;
    ElfLog.prototype.logLevelInfo = 4;
    ElfLog.prototype.logLevelSilent = 5;

    ElfLog.prototype.debugLevel = undefined;

    ElfLog.prototype.setLevel = function(level) {
        // console.log("Set log level", level);
        this.debugLevel = level;
    };

    ElfLog.prototype.log = function(level, message) {
        // console.log("Level:", level, 'debugLevel: ', this.debugLevel);
        if (level >= this.debugLevel) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            }
            console.log(level + ': ' + message);
        }
    };

    that = new ElfLog();
    window.elfLog = that;
})();
