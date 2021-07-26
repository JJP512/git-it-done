var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.githu.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};