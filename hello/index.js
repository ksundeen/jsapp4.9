const app = require("express")();
app.get("/hello", (req, res) => 
                  res.send("Test app set up"));
app.listen(8080, () => console.log("Listening on port 8080"));