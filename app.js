const express = require('express');
const app = express();
const port = 3000; // port variable
var data = {}; // table to store for contacting user -- may not use

var tbl1 = [
    {
        name: "Travis Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "twavis Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "sfdg Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "ytrur Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "46574657 Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "56754hytdgfrh Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "7648576ubgssgfhb Cox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
     {
        name: "Travis5643658764u 4765u476iuCox",
        response: "Ocean man, take me by the hand, lead me to the land that you understand Ocean man, the voyage to the corner of the globe is a real trip Ocean man, the crust of a tan man imbibed by the sand Soaking up the thirst of the land"
    },
    
];
var tbl2 = [
    {
        name: "Adam",
        response: "I want into this program because my hair is dumb and I dont like doing extra work that applies to my class"  
    }
    
];
var tbl3 = [
    {
        name: "Roberto",
        response: "I can make a mean ham samwhich",
    }
];
var tbl4 = [
    {
        name: `Johnny "The Boi" Johnson`,
        response: "You should just let me in, I mean just look at my name"
    }
];
var tbl5 = [
    {
    name: "Jack Noviski",
    response: "Tonight, I'm gonna have myself a real good timeI feel alive and the world I'll turn it inside out, yeahAnd floating around in ecstasy So don't stop me now don't stop me Cause I'm having a good time, having a good time"
    }
];
var tbl6 = [
    {
        name: "Ej",
        response: "I make dank memes and can only intake sprite cranberry, as long as you can accomodate my needs then im a worthy worker, and if we play game you CANNOT ban draven",
    }
];
var tbl7 = [
    {
        name: "Twavis Toowner",
        response: "I dont have anything to work except a speech impediment"
    }
]; 
var tbl8 = [
    {
        name: "Catie",
        response: "I can actually do work and have a 243.5 gpa"
    }
];
var tbl9 = [
    {
        name: "Ashley",
        response: "I work hard and play harder wink wink wink please let me into this program its the only thing I have"
    }
];

app.use(express.static('public'));
app.use(express.json());


app.post('/received',(req,res) => { // receive and return to client
    var body = req.body.courses
    
    if (body == "Northview Comp Sci") {
        res.send(tbl1);
    } else if (body == "Art") {
        res.send(tbl2);
    } else if (body == "Engineering") {
        res.send(tbl3);
    } else if (body == "Interactive Media") {
        res.send(tbl4);
    } else if (body == "MedTech") {
        res.send(tbl5);
    } else if (body == "Cosmotology") {
        res.send(tbl6);
    } else if (body == "Southview Programming") {
        res.send(tbl7);
    } else if (body == "Computer Graphics") {
        res.send(tbl8);
    } else if (body == "Nuclear Warfare") {
        res.send(tbl9);
    }
    console.log(`Accessed: ${req.body.courses}`); // bash log
    console.log(`From IP: ${req.ip}`); // bash log
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})

