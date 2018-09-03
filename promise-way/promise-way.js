const {getUser, getPosts, getComments} = require('../1new-way/new-way-database');

function runScript() {

    return getUser(1)
        .then((user) => getPosts(user.id))
        .then((userPosts) => getComments(userPosts.owner))
        .then((result) => log(result))
        .catch((error) => console.error(error));

}

function log(result) {
    console.log('\n', 'Comments: ', result.comments.join(';'));
}

runScript();