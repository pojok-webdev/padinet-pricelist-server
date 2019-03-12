remove = obj => {
    sql = 'delete from servicenames '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select * from servicenames '
    console.log("gets SQL",sql)
    return sql
}
getbycategory = obj => {
    sql = 'select * from servicenames '
    sql+= 'where category_id='+obj.category_id+' '
    console.log('getbycategory',sql)
    return sql
}
save = obj => {
    sql = 'insert into servicenames '
    sql+= '(name)'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.name+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update servicenames '
    sql+= 'set name="'+obj.name+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
module.exports = {
    gets:gets,
    getbycategory:getbycategory,
    remove:remove,
    save:save,
    update:update
}