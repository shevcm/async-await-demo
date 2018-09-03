const fs = require('fs');


module.exports = {getUser, getPosts, getComments};

function getUser(userId, cb) {

    console.log('Fetching user...');

    fs.readFile('./db/database.json', 'utf-8', (error, data) => {

        if (error) return cb(error);

        const user = JSON.parse(data).users.find((item) => item.id === userId);
        if (!user) {
            const error = new Error('User not found');
            return cb(error);
        }
        return cb(null, user);
    });
}

function getPosts(userId, cb) {
    console.log('Fetching user posts...');

    fs.readFile('./db/database.json', 'utf-8', (error, data) => {
        if (error) return cb(error);

        const post = JSON.parse(data).posts.find((item) => item.owner === userId);

        if (!post) {
            const error = new Error('User posts not found');
            return cb(error);
        }
        return cb(null, post);
    });
}

function getComments(postId, cb) {
    console.log('Fetching comments...');

    fs.readFile('./db/database.json', 'utf-8', (error, data) => {
        if (error) return cb(error);

        const comment = JSON.parse(data).comments.find((item) => item.post === postId);

        if (!comment) {
            const error = new Error('Comments not found');
            return cb(error);
        }
        return cb(null, comment);
    });
}


//
// module.exports.users = [
//     {id: 1, email: 'ihshmidt@gmail.com'},
//     {id: 2, email: 'igora042@gmail.com'},
//     {id: 3, email: 'ihor.shmidt@techmagic.co'},
// ];
//
//
// module.exports.posts = [
//     {
//         owner: 1,
//         posts: [
//             {id: 1, post: 'A falsis, buxum magnum heuretes.'},
//             {id: 2, post: 'Nunquam imperium exsul.'},
//             {id: 3, post: 'Parallel visions knows most paradoxs.'}
//         ]},
//     {
//         owner: 2,
//         posts: [
//             {id: 1, post: 'Love is a weird grog.'},
//             {id: 2, post: 'The lotus synthesises.'},
//             {id: 3, post: 'Cum tumultumque crescere, omnes solitudoes imperium barbatus, grandis sensoremes.'}
//         ]
//     },
//     {
//         owner: 3,
//         posts: [
//             {id: 1, post: 'Where is the most unusual particle.'},
//             {id: 2, post: 'Cur terror volare.'},
//             {id: 3, post: 'The seeker has history, but not everyone shapes it.'}
//         ]
//     },
// ];
//
// module.exports.comments = [
//     {
//         post: 1,
//         comments: [
//             'A falsis, buxum magnum heuretes.',
//             'Nunquam imperium exsul.',
//             'Parallel visions knows most paradoxs.'
//         ]},
//     {
//         post: 2,
//         comments: [
//             'Love is a weird grog.',
//             'The lotus synthesises.',
//             'Cum tumultumque crescere, omnes solitudoes imperium barbatus, grandis sensoremes.',
//         ]
//     },
//     {
//         post: 3,
//         comments: [
//             'Where is the most unusual particle.',
//             'Cur terror volare.',
//             'The seeker has history, but not everyone shapes it.',
//         ]
//     },
// ];