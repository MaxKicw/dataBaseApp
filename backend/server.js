const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');

var url = "mongodb://localhost:27017/mydb";


mongoose.connect(url,{useMongoClient: true});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/',function(req,res){
    console.log(req.body);
    res.send({"name":'Hello World!'});
});

app.get('/get-data/:productId',function(req,res){
    const id = req.params.productId;
    User.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message: "Id ist nicht vorhanden!"
            });
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

app.post('/insert',function(req,res){
<<<<<<< HEAD
    console.log("INSERT IN DATABASE");
=======
>>>>>>> 6ef1d1060ac7a302d2c5bc24b7f0ba46bbbf4896
    console.log(req.body);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    });

    user.save()
    .then(result => {
        console.log(result);
<<<<<<< HEAD
        res.setHeader('Access-Control-Origin','http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
=======
        res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
        res.setHeader('Access-Control-Allow-Methods',"GET, POST, OPTIONS, PUT, PATCH, DELETE");
>>>>>>> 6ef1d1060ac7a302d2c5bc24b7f0ba46bbbf4896
        res.status(201).json({
            message: "Wurde eingespeichert",
            ceatedUser: result
        })
     })
     .catch(err => {
         console.log(err);
         res.status(500).json({
             message: "Hat nicht funktioniert",
             error: err,
         })
     });

});

app.get('/get-all-data',function(req,res){
    User.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if (docs.length >= 0){
            res.status(200).json(docs)
        } else {
            res.status(500).json({
                message: "Keine Einträge!"
            })
        }
      
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
        })
    });
}),

app.get('/delete/:id',function(req,res){
    var id = req.params.id;
    User.deleteOne({_id:id})
    .exec()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

// Anfrage für Änderung muss so aussehen. Was geändert und wie?
// [
//		{"propName":"name","value":"Hanswurschthatdurscht"}	
//  ]
    

app.patch('/change/:id',function(req,res){
    var id = req.params.id;
    const updateOps = {}
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({_id:id}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));