'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '34.248.103.39';
var token = '16d6997c-d90c-43d7-84f5-2c6535c629ce';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}

