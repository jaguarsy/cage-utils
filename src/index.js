/**
 * Created by johnnycage on 16/4/21.
 */
var cageUtils = require('./core');

var map = require('./libs/map');

cageUtils.extend({
    map: map
});

window.cageUtils = window._ = cageUtils;
