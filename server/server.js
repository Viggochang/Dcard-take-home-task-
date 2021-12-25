const express = require("express");
const axios = require("axios");
const app = express();

app.get("/list", (req, res) => {
  const articleApi =
    "https://www.dcard.tw/v2/posts?popular=true" +
    (req.query.id ? `&before=${req.query.id}` : "");

  (async function () {
    const { data } = await axios.get(articleApi);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  })();
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
