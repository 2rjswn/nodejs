const DB = [];

function register(user) {
    return saveDB(user, function(user) {
        return sendMail(user, function(user) {
            return getResult(user);
        });
    });
}

function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

function sendMail(user, callback) {
    console.log(`email to ${user.mail}`);
    return callback(user);
}

function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({mail : "ddd", pwd : "dddd", name : "ddddd"});
console.log(result)