const express = require('express')
const path = require('path')
const indexRouter = require('./routes/indexRouter')


const app = express();
const port = process.env.port || 8000;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)

app.listen(port, (err) => {
    if(err) console.log(err)
    console.log(`Server running on port ${port}`)
})