import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, respond) => {
    respond.render('first')
})
app.get('/view', (req, respond) => {
    respond.send('My name is Rishav')
})
app.get('/profile', (req, res) => {
    res.send('<h1>Rishav</h1><p>I am a developer</p><br/><h3>I am a Boy</h3>')
})

app.post('/login', (req, res) => {
    const email=req.body.email
    const password=req.body.password
    console.log("Entered Email - ", email);
    console.log("Entered Pass", password);
    if(password=='rishav')
    {
        res.render('second')
    }else{
        res.send('error')
    }
})




app.listen(3000, () => {
     console.log('Server listening on port 3000!') 
})