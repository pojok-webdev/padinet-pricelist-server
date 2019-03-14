remove = obj => {
    sql = 'delete from users '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select * from users '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into users '
    sql+= '(username,email)'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.username+'","'+obj.email+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update users '
    sql+= 'set name="'+obj.username+'", '
    sql+= 'email="'+obj.email+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
setPassword = obj => {
    sql = 'update users '
    sql+= 'set hash="'+obj.hash+'" '
    sql+= 'where '
    sql+= 'email="'+obj.email+'" '
    console.log("Update Password SQL",sql)
    return sql
}
getHash = obj => {
    sql = 'select hash from users '
    sql+= 'where email="'+obj.email+'" '
    return sql
}
authenticate = obj => {
    sql = 'select password from users '
    sql+= 'where email="'+obj.email+'" '
    console.log("authenticate",sql)
    return sql
}
module.exports = {
    gets:gets,
    getHash:getHash,
    remove:remove,
    save:save,
    setPassword:setPassword,
    update:update
}