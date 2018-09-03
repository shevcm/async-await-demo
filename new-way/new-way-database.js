const fs = require('fs');
const path = require('path');
const DATABASE_PATH = './../db/database.json';

module.exports = {getUser, getPosts, getComments};

async function getUser(userId) {

    console.log('Fetching user...');

    try {
        const data = await readdir('users');
        const user = data.find((item) => item.id === userId);

        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }

}

async function getPosts(userId) {
    console.log('Fetching user posts...');

    try {
        const data = await readdir('posts');
        const post = data.find((item) => item.owner === userId);

        if (!post) {
            throw new Error('User posts not found');
        }
        return post;
    } catch (error) {
        throw error;
    }

}

async function getComments(postId) {
    console.log('Fetching comments...');

    try {
        const data = await readdir('comments');
        const comment = data.find((item) => item.post === postId);

        if (!comment) {
            throw new Error('Comments not found');
        }
        return comment;
    } catch (error) {
        throw error;
    }
}

async function readdir(dataType) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, DATABASE_PATH), 'utf-8', (error, data) => {

            if (error) return reject(error);

            const parsedData = JSON.parse(data);
            const targetData = parsedData[dataType];

            return resolve(targetData);
        });
    });
}