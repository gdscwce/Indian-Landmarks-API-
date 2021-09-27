const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;


const{randomLandmark , getCityLandmark ,getlocalityLandmark , getStateLandmark,getCityLocalityLandmark} = require('./functions');


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: true}));




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  
app.get("/city/:cityname/locality/:localityname",(req,res)=>{
    res.json(getCityLocalityLandmark(req.params.cityname,req.params.localityname));
});


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/city/:cityname",(req,res)=>{
    res.json(getCityLandmark(req.params.cityname));

});

app.get("/state/:statename",(req,res)=>{
    res.json(getStateLandmark(req.params.statename));
});

app.get("/locality/:localityname",(req,res)=>{
    res.json(getlocalityLandmark(req.params.localityname));

});




app.get("/random",(req,res)=>{
    res.json(randomLandmark());
});