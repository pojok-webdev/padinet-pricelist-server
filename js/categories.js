remove = obj => {
    sql = 'delete from categories '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select * from categories '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into categories '
    sql+= '(name)'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.name+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update categories '
    sql+= 'set name="'+obj.name+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
module.exports = {
    gets:gets,
    remove:remove,
    save:save,
    update:update
}