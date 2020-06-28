const express = require('express')
const withCache = require('../express_cache');

const controller = express.Router();
const githubClient = require('../github-api/index');

controller.get('/', (req, res) => {
    withCache (req, res, 'users?since=' + req.query.since, function () {
        return githubClient.getUsers(req.query.since);
    });
})

controller.get('/:username/details', (req, res) => {
    withCache(req, res, 'users/details/' + req.params.username, function (){
        return githubClient.getUserDetails(req.params.username)
    });
});

controller.get('/:username/repos', (req, res) => {
    withCache(req, res, 'users/repos/' + req.params.username, function (){
        return githubClient.getUserRepos(req.params.username)
    });
});

module.exports = controller;
