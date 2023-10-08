import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import path from 'path';
const __dirname = path.resolve();
import hbs from 'hbs';
// import __dirname from '__dirname';

//in order to make run static website in public folder i.e index.html

const staticPath = (path.join(__dirname, "../public"));
const template_path = path.join(__dirname, "../src/templates/views");
const partials_path = path.join(__dirname, "../src/templates/partials");
app.use(express.static(staticPath));

// to create viewengine
app.set('view engine', "hbs");
// to rename views
app.set("views", template_path);
// in order to use partials we hvae to first register it
hbs.registerPartials(partials_path);
//routing
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render("weather")
});
//if from the above url doesn't matches we have to show a 404 error page
app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg: "Oops! Something went wrong"
    });
});

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
});