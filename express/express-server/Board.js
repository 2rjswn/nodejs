const express = require("express");
const app = express();
let posts = [];
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/", (req, res) => {
    res.json(posts);
});
app.post("/posts", (req, res) => {
    const {title , name , text} = req.body;
    posts.push({
                id: posts.length + 1,
                title,
                name,
                text,
                createDt: new Date()
            });
    res.json({title, name, text});
});
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLenthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLenthChanged) {
        res.json("OK");
        return;
    }
    res.json("Not Changed")
});
app.listen(3001, ()=> console.log("게시판 서버 시작!"));