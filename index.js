var express = require('express'),
    app = express(),
    connection = require('./js/connections'),
    pricelist = require('./js/pricelists'),
    bodyParser = require('body-parser');
app.engine('html',require('ejs').renderFile)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
app.get('/gets',(req,res) => {
    console.log('pricelists invoked bro')
    connection.doQuery(pricelist.gets(),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/save',(req,res) => {
    console.log('save invoked bro')
    connection.doQuery(pricelist.save(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/update',(req,res) => {
    console.log('update invoked bro')
    connection.doQuery(pricelist.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})

app.listen(process.env.PORT||2219)