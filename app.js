const express = require('express');
const app = express();
const port = 3000; // port variable
var data = {}; // table to store for contacting user -- may not use
var fakeData = [
    {
    name: "Travis Cox",
    course: "Northview Comp Sci",
    response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    }
    
];
app.use(express.static('public'));
app.use(express.json());


app.post('/received',(req,res) => { // receive and return to client
    var body = req.body.courses
    
    if (body == "Northview Comp Sci") {
        res.send(fakeData);
    }

    console.log(`Accessed: ${req.body.courses}`); // bash log
    console.log(`From IP: ${req.ip}`); // bash log
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})

