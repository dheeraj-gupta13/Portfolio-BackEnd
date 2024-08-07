const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const app = express();
const Home = require('./app/routes/home.routes')
const Problem = require('./app/routes/problem.routes')
const Tags = require('./app/routes/tags.routes')
const Projects = require('./app/routes/projects.routes')
const Works = require('./app/routes/works.routes')


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//other imports
app.use(
    cors({
      origin: "https://portfolio-front-end-pi.vercel.app",
      credentials: true
    })
)

// app.use(
//     cors({origin:"http://localhost:3000"})
// )

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.use('/', Home);
app.use('/', Works)
app.use('/', Projects);
app.use('/discuss', Problem)
app.use('/discuss', Tags)


app.listen(8080, () => {
    console.log("Listening to port 8080");
})