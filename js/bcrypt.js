var bcrypt = require('bcrypt')
createPassword = (obj,callback) => {
    bcrypt.hash(obj.password,10,(err,data) => {
        console.log("Hash",data)
        if(data){
            callback(data)
        }
        if(err){
            callback(err)
        }
    })
}
comparePassword = (obj,callback) => {
    console.log('Bcrypt input',obj)
    bcrypt.compare(obj.password,obj.hash,(err,data) => {
        if(data){
            callback(data)
        }else{
            callback(false)
        }
        if(err){
            console.log("Password doesnt match",err)
            callback(err)
        }
    })
}

module.exports = {
    createPassword:createPassword,
    comparePassword:comparePassword
}