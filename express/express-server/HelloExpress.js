const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => {
    res.set({"Content-Type": "text/html; charset=utf-8"});
    res.end("헬로 express");
});

app.listen(port, () =>{
    console.log(`start server : user${port}`)
})