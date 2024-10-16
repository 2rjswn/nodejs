const DB = [];

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error("error!"));
        }
    });
}

function sendMail(user) {
    console.log(`email to ${user.mail}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    });
}

function registerByPromise(user) {
    const result = saveDB(user).then(sendMail).then(getResult).catch(error => new Error(error)).finally(() => console.log("완료"));
    console.log(result);
    return result;
}

const myUser = {mail : "1234@gmail.com", pwd : "1234", name : "gun"};
// const result = registerByPromise(myUser);
// result.then(console.log).catch(console.error);
allResult = Promise.all([saveDB(myUser), sendMail(myUser), getResult(myUser)]);
allResult.then(console.log) 