const httpClient = require('./http_client')

function getUsers(since = 1) {
    return httpClient.get({path: '/users' + '?since=' + since});
}

function getUserDetails(userName){
    return httpClient.get({path: '/users/' + userName});
}

function getUserRepos(userName){
    return httpClient.get({path: '/users/' + userName + '/repos'});
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserRepos
};
