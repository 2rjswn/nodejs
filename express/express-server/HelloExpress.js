const express = require("express");
const app = express();
const port = 3001;
const url = require("url");

app.listen(port, () =>{
    console.log("라우터 리팩터링");
});
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);
function user(req, res) {
    const user = url.parse(req.url, true).query;
    res.json(`[user] name : ${user.name}, age:${user.age}`);
}
function feed(_, res) {
    res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
    `);
}
