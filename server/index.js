const express = require('express');
const massive = require('massive');
require("dotenv").config();
const app= express();
app.use(express.json());
massive({
    connectionString:process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false}
}).then(database=>{
    app.set('db', database)
    app.get('db').init()
    console.log('DATABASE Connected!!!!!!!')
}).catch(err=>console.log('Error connecting to DB', err))

app.get('/api/clientOrders', (req,res)=>{
    req.app.get('db').get().then(order=>{
        res.send(order)
    })
})
app.post('/api/clientOrders', (req,res)=>{
    req.app.get('db').create([
        req.body.itemOrder,
        req.body.quantity
    ]).then(order=>{
        console.log('what are is the req.body?', req.body)
        res.send(order)
    })
})
// app.post('api/clientOrders/:id',(req, res)=>{
//    // console.log('REQ.BODY', req.body)
//     req.app.get('db').create([
//         req.body.itemOrder,
//         req.body.quantity
//     ]).then(order=>res.send(order))
// })
app.delete('/api/clientOrders/:id', (req, res)=>{
    req.app.get('db').delete([req.params.id])
    .then(order=>res.send(order));
})







// app.put('/api/clientOrders/:cole', (req, res)=>{
//     console.log('REQ.BODY', req.body, req.params )
//     req.app.get('db').update([
//         req.params.cole,
//         req.body.itemOrder,
//         req.body.quantity
//     ]).then(order=>res.send(order))
// });


app.put('/api/clientOrders/:id', (req, res) =>{
req.app.get('db').update([
    req.params.id,
    req.body.itemOrder,
    req.body.quantity
]).then(order=>res.send(order))
})











app.listen(4000,()=>console.log('SERVER STARTED!!!!!!!!!'))