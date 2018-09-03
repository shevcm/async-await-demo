const {getUser, getPosts, getComments} = require('./old-way-database');


getUser(1, (error, user) => {

    if (error) return console.error(error);

    getPosts(user.id, (error, posts) => {

        if (error) return console.error(error);

        getComments(posts.owner, (error, result) => {

            if (error) return console.error(error);

            console.log('Comments: ', result.comments.join(';'));
        });

    });

});
