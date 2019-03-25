remove = obj => {
    sql = 'delete from services '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = () => {
    sql = 'select * from services '
    console.log("gets SQL",sql)
    return sql
}
getsbycategory = obj => {
    sql = 'select * from services '
    sql+= 'where category_id = ' + obj.category_id + ' '
    console.log("gets SQL",sql)
    return sql
}

getsubservices = obj =>{
    sql = 'select * from subservices '
    sql+= 'where service_id = ' + obj.service_id + ' '
    console.log("getsubservices SQL",sql)
    return sql
}
getsubserviceslevel2 = obj =>{
    sql = 'select * from subserviceslevel2 '
    sql+= 'where subservice_id = ' + obj.subservice_id + ' '
    console.log("getsubserviceslevel2 SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into services '
    sql+= '(name)'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.name+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update services '
    sql+= 'set name="'+obj.name+'", '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
get = obj => {
    sql = 'select a.id,a.name from services a '
    sql+= 'where email="'+obj.id+'" '
    return sql
}
module.exports = {
    gets:gets,
    get:get,
    getsubservices:getsubservices,
    getsubserviceslevel2:getsubserviceslevel2,
    remove:remove,
    save:save,
    update:update
}