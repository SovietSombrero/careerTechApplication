const express = require('express');
const app = express();
var a=0;   
var b=0;    
var c=0;    
var d=0; 
app.use(express.static('public'));
app.use(express.json());

app.post('/answer', (req, res) => {
    var body = req.body.tvShow;
    
    if(body == "a") {
        a++;
    }else if (body == "b") {
        b++;
    }else if (body == "c") {
        c++;
    }else if (body == "d") {
        d++;
    }
    res.send([a,b,c,d]); 
    
    console.log(`
IP: ${req.ip}
A: ${a}
B: ${b}
C: ${c}
D: ${d}
   `)
});


app.listen(3000, () => {console.log('Listening on Port 3000...')});
