import axios from "axios";
import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://secrets-api.appbrewery.com/random");
      res.render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username,
      });
    } catch (error) {
      console.log(error.response.data);
      res.status(500);
    }
  });


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
