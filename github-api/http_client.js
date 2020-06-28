const https = require('https');

const defaultOptions = {
    host: 'api.github.com',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Github Middleware App'
    }

}

function get(params, callback){
    return new Promise((resolve, reject) => {
        const options = Object.assign(defaultOptions, params);

        const httpRequest = https.request(options, httpResponse => {
            let output = '';

            httpResponse.on('data', chunk => {
                output += chunk;
            })

            httpResponse.on('end', () => {
                resolve({status: httpResponse.statusCode, response: JSON.parse(output), headers: httpResponse.headers});
            })

            httpResponse.on('error', (err) => reject(err));
        });

        httpRequest.on('error', (err) => {
            reject(err);
        });

        httpRequest.end();
    });
}

module.exports = {
    get
}
