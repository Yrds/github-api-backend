const memoryCache = require('memory-cache');

const defaultOptions = {
    timeout: 60000*5,
}
function withCache(req, res, name, callback, params = defaultOptions) {
    const cache = memoryCache.get(name);
    if(cache){
        res.send(cache);
    }
    else{
        callback().then(
            response => {
                memoryCache.put(name, response, params.timeout);
                res.send(response)
            },
            err => res.send('An error ocurred: ' + err.message)
        );
    }
}

module.exports = withCache;
