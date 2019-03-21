var express = require('express'),
    app = express(),
    connection = require('./js/connections'),
    pricelist = require('./js/pricelists'),
    category = require('./js/categories'),
    servicename = require('./js/servicenames'),
    custom = require('./js/customs'),
    user = require('./js/users'),
    bcrypt = require('./js/bcrypt'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    tokenList = {};
app.engine('html',require('ejs').renderFile)
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
app.get('/pricelistgets',(req,res) => {
    console.log('pricelists invoked bro')
    connection.doQuery(pricelist.gets(),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/pricelistsave',(req,res) => {
    console.log('save invoked bro')
    connection.doQuery(pricelist.save(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/pricelistupdate',(req,res) => {
    console.log('update invoked bro')
    connection.doQuery(pricelist.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})


app.get('/categorygets',(req,res) => {
    console.log('categorys invoked bro')
    connection.doQuery(category.gets(),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/categorysave',(req,res) => {
    console.log('save category invoked bro')
    connection.doQuery(category.save(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/categoryupdate',(req,res) => {
    console.log('update category invoked bro')
    connection.doQuery(category.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})


app.get('/servicenamegets',(req,res) => {
    console.log('servicenames invoked bro')
    connection.doQuery(servicename.gets(),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/servicenamegetbycatgory/:category_id',(req,res) => {
    console.log('servicenames invoked bro')
    connection.doQuery(servicename.getbycategory(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/servicenamesave',(req,res) => {
    console.log('save servicename invoked bro')
    connection.doQuery(servicename.save(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/servicenameupdate',(req,res) => {
    console.log('update servicename invoked bro')
    connection.doQuery(servicename.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})




app.get('/customgets',(req,res) => {
    console.log('customs invoked bro')
    connection.doQuery(custom.gets(),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/customsave',(req,res) => {
    console.log('save servicename invoked bro')
    connection.doQuery(custom.save(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/customupdate',(req,res) => {
    console.log('update custom invoked bro')
    connection.doQuery(custom.update(req.body),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/customremove/:id',(req,res) => {
    console.log('remove custom invoked bro')
    connection.doQuery(custom.remove(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.get('/getprices/:category_id/:servicename_id/:media_id/:capacity',(req,res) => {
    connection.doQuery(custom.getprices(req.params),result => {
        res.send(result)
    })
})
app.get('/getbymonth/:monthyear',(req,res) => {
    connection.doQuery(custom.getByMonth(req.params),result => {
        res.send(result)
    })
})


app.get('/getcapacities/:category_id/:servicename_id/:media_id',(req,res) => {
    console.log('getcapacity category invoked bro')
    connection.doQuery(pricelist.getcapacities(req.params),result => {
        console.log('result',result)
        res.send(result)
    })
})
app.post('/login',(req,res) => {
    const postData = req.body
    const user = {
        username:postData.username,
        email:postData.email
    }
    const token = jwt.sign(user,'padiNEt',{expiresIn:900})
    const refreshToken = jwt.sign(user,'surabaya',{expiresIn:1000})
    const response = {
        status: 'Logged in',
        token: token,
        refreshToken: refreshToken
    }
    tokenList[refreshToken] = response
    res.status(200).json(response)
})
app.post('/token',(req,res) => {
    const postData = req.body
    if((postData.refreshToken)&&(postData.refreshToken in tokenList)){
        const user = {
            username:postData.username,
            email:postData.email
        }
        const token = jwt.sign(user,'padiNET',{expiresIn:900})
        const response = {
            token:token
        }
        tokenList[postData.refreshToken].token = token
        res.status(200).json(response)
    }else{
        res.status(404).send('Invalid request')
    }
})


app.post('/userchangepassword',(req,res) => {
    const postData = req.body
    bcrypt.createPassword(postData,result => {
        console.log("Password created",result)
        connection.doQuery(user.setPassword({email:postData.email,hash:result}),result => {
            res.send(result)
        })
    })
})
app.post('/usercheckpassword',(req,res) => {
    const postData = req.body
    console.log('POST DATA',postData)
    connection.doQuery(user.get(postData),obj=>{
        console.log("USER GET SQL",user.get(postData))
        bcrypt.comparePassword({password:postData.password,hash:obj[0].hash},result => {
            console.log("Password compare",result)
            res.send({result:result,obj:obj})
        })
    })
})
app.get('/usergets',(req,res) => {
    connection.doQuery(user.gets(),result => {
        res.send(result)
    })
})
app.listen(process.env.PORT||2219)