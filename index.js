

// const numero = 3;

// if ( numero < 3) {
//     console.log("me i vogel");
// } else if ( numero == 3 ) {
//     console.log("baraz");
// } else {
//     console.log ("me i madh"); 
// }

// for (i=0; i<10; i++){
//  console.log((i));
// }



// const sayHi = require('./utilities')
// const name = require('./name')

// console.log(name);


// sayHi(name1);
// sayHi("anna");
// sayHi(name2);
// const httpja = require ('http');

// const server = httpja.createServer((request, response)=>{
//    if (request.url === "/") {
//     response.end("welcome again");
//    } else {
//     response.end(`<p> back to <a href="/">home</a>`);
//    }
// })

// server.listen(3000);

// console.log(httpja());


// const logu = 55;

// console.log(logu);


// const EventEmitter = require ('events');
// const { loadavg } = require('os');
// const { log } = require('util');

// const customEmitter = new EventEmitter();

// customEmitter.on('sms', ()=>{
//     console.log('started');
// })

// customEmitter.emit('sms');


// const {writeFileSync} = require('fs');

// for (let i=0; i<10; i++ ) {
//     writeFileSync('./filegrande.txt', `cio riga numero ${i}\n`, {flag: 'a'});
// }


// get ( te marresh te dhena );
// post ( te dergosh te dhena);
// put (modifikosh te dhena);
// delete (te fshish te dhena);




// app.get('/',  (req, res)=> {
//     res.send('Hello World')
//   })

// app.get('/about', (req, res)=>{
//     res.send('Lorem ipsum text')
// })

// app.get ('/contact', (req, res)=>{
//     res.send('nr i tel 069...')
// })
// app.all('*', (req, res)=> {
//     res.send("<h1>Doesn't exist<h1/>")
// })





// const express = require ('express')
// const app = express()
// const {persone} = require('./persone')

// app.get('/', (req, res) => {
//     res.send("<h1>Home Page</h1><a href='/persone'>Go to persone'<a/>")
// })

// app.get('/persone', (req, res) => {
//     const nuovaPersone = persone.map((persona)=>{
//         const{nome, cognome, eta} = persona
//         return{nome, cognome, eta}
//     })
//     res.json(nuovaPersone)
// })

// app.get('/persone/:id', (req, res)=>{
//     console.log(req.params);
// const {id} = req.params
// const persona = persone.find((persona) => persona.id === id)

// if (!persona){
//     return res.status(404).json({messaggio: "non trovato", code: 404})
// }

// res.json(persona)
// })

// app.get('/persone/search', (req, res)=>{
//     console.log(req.query);
//     res.send("hello")
// })

// app.listen(5000)    

const express = require('express')
const app = express()

const middlewareProva = (req, res, next) => {
    const {method, url} = req
    const time = new Date().getMinutes()
    console.log(method, url, time)
    next()
}

app.get ('/', middlewareProva, (req, res)=>{
    res.send("homepage")
})

app.get ('/about', middlewareProva, (req, res)=>{
    res.send("about")
})

app.listen(5000)