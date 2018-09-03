
const {getUser, getPosts, getComments} = require('./new-way-database');

//
// getUser(1, (error, user) => {
//
//     if (error) return console.error(error);
//
//     getPosts(user.id, (error, posts) => {
//
//         if (error) return console.error(error);
//
//         getComments(posts.owner, (error, result) => {
//
//             if (error) return console.error(error);
//
//             console.log('Comments: ', result.comments.join(';'));
//         });
//
//     });
//
// });

async function runScript() {
    const user = await getUser(1);
    const userPosts = await getPosts(user.id);
    const result  = await getComments(userPosts.owner);

    console.log('\n', 'Comments: ', result.comments.join(';'));

}


runScript();
