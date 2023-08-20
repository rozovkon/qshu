const express = require('express');
const app = express();
const port = 3000;

let arr= []

app.get('/', (req, res)=> {res.sendFile(__dirname + "/index.html"); });

app.get('/send/:text', (req, res)=> {arr.push(new Date().toLocaleTimeString()+" "+req.params.text)
     console.log(arr)
     res.send(); });


 app.get('/get', (req, res)=> {
    let chat= ""
    for(let i = 0; i<arr.length; i++)
    {
        chat+= `<p>${arr[i]}</p>`
    }
    res.send({chat: chat}); 
   // a=  {property: value}
});













//app.get('/', (req, res)=> {res.send("imam bashta"); });

// app.get('/rozovkon', (req, res)=> {res.send("<button>az sum angel</button>"); });

// app.get('/angel', (req, res)=> {res.send("az sum angel"); });

// app.get('/ivan/toshko', (req, res)=> {res.send("az obicham malki kuchenca"); });

// app.get('/ivan/niki', (req, res)=> {res.send("az obicham malki pilenca"); });

// app.get('/nikifor/:a', (req, res)=> {res.send(req.params.a); });



app.listen(port,() =>{console.log(`server is running on port` + port);
})
