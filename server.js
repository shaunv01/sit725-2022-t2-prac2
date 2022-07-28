// Include express JS library
const express = require("express");
// create instance of express library
const app = express();

app.use(express.json());

const books = [
    {
        title: "Book 1",
        author: "author 1",
        price: 200
    },
    {
        title: "Book 2",
        author: "author 2",
        price: 150
    },
    {
        title: "Book 3",
        author: "author 3",
        price: 50
    },
    {
        title: "Book 4",
        author: "author 4",
        price: 105
    },
    {
        title: "Book 5",
        author: "author 5",
        price: 25
    }
];

const bookExists = (myTitle) => {
    for (var i = 0; i < books.length; i++) {
        if (myTitle == books[i].title) {
            return true;
        }
    }
};

app.get("/book", (req, res) => {
    try{
        if(req.query.p != null) {
            res.json({
                statusCode: 200, data: books.filter(x => x.price <= parseInt(req.query.p))
            });
        }
        res.json({ statusCode:200, data:books });
        
    }catch(e){
        res.json({ statusCode:500, data: "something went wrong with get" });
    }
});

app.put("/book", (req, res) => {
    try{
        let bookFound = false;
        for (var i = 0; i < books.length; i++) {
            console.log(books[i].title + ' ' + req.body.title + ' ' + req.query.title);
            //if (req.body.title == books[i].title) {
            if (req.query.title == books[i].title) {
                books[i].author = req.body.author;
                books[i].price = req.body.price;
                bookFound = true;
            }
        }
        if (!bookFound) {
            res.json({ statusCode: 500, data: "could not find the book with the title " + req.body.title });
        } else {
            res.json({ statusCode:200, data:books });
        }
        
    }catch(e){
        res.json({ statusCode:500, data: "something went wrong with get" });
    }
});

app.delete("/book", (req, res) => {
    try{
        let bookFound = false;
        for (var i = 0; i < books.length; i++) {
            console.log(books[i].title);
            if (req.body.title == books[i].title) {
                delete books[i];
                bookFound = true;
            }
        }
        if (!bookFound) {
            res.json({ statusCode: 500, data: "could not find the book with the title " + req.body.title });
        } else {
            res.json({ statusCode:200, data:books });
        }
        
    }catch(e){
        res.json({ statusCode:500, data: "something went wrong with get" });
    }
});

app.post("/book", (req, res) => {
    try{
        //validation
        var exists = bookExists(req.body.title);
        if (exists) {
            res.json({ statusCode: 500, data: "already exists" });
        } else {
            books.push(req.body);
            res.json({ statusCode: 200 });
        }
        
    }catch(e){
        res.json({ statusCode: 500, data: "something went wrong with post" });
    }
});

// console.log(addTwoNumber(1,2));

const doMath = (n1, n2, op) => {
    if (Number.isNaN(n1) || Number.isNaN(n2)){
        throw "error";
    }
    if (op == "+") {
        return n1 + n2;
    } else if (op == "-") {
        return n1 - n2;
    } else if (op =="*") {
        return n1 * n2;
    } else if (op =="%") {
        return n1 / n2l
    }
};

const addTwoNumber = (n1, n2) => {
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        throw "error";
    }
    console.log("n1=" + n1 + " n2=" + n2);
    return n1 + n2;
};

app.get("/addTwoNumbers", (req, res) => {
    try{
        const n1 = parseInt(req.query.n1);
        const n2 = parseInt(req.query.n2);
        const result = addTwoNumber(n1, n2);
        res.json({ statusCode : 200, data: result });
    }catch(e){
        res.json({ statusCode : 500, data:"whoopsie get" })
    }
    
});

app.post("/addTwoNumbers", (req, res) => {
    try{
        const n1 = parseInt(req.body.n1);
        const n2 = parseInt(req.body.n2);
        const result = addTwoNumber(n1, n2);
        res.json({ statusCode : 200, data: result });
    }catch(e){
        res.json({ statusCode : 500, data : "whoopsie post" })
    }    
});

// setup a constant for the application port to listen on
const port = 3030;

// start the application listening on the port
app.listen(port,() => {
    console.log("Hello I'm listening to port " + port);
})

// console.log("Hello I'm here at line 13");

