(function(){
    'use strict';
    
    var http        = require('http'),
        https       = require('https'),
        url         = require('url');
    
    module.exports  = function(host, callback) {
        var secure  = /^https/.test(host),
            options = url.parse(host);
        
        options.method = 'HEAD';
        
        (secure ? https : http).request(options, function(res) {
            callback(null, res.statusCode);
        }).on('error', function(error) {
            callback(error);
        }).end();
    };
})();
