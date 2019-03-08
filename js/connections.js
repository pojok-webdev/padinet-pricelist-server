var mysql = require('promise-mysql'),
    config = require('./configs')
doQuery = (sql,callback)=>{
    con = mysql.createConnection(
        config.sql()
    )
    .then(cn => {
        var result = cn.query(sql)
        cn.end()
        return result
    })
    .then(rows => {
        callback(rows)
    })
    .error(err => {
        console.log('conn error',err)
    })
}
module.exports = {
    doQuery:doQuery
}