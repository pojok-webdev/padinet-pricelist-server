remove = obj => {
    sql = 'delete from pricelists '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    return sql
}
gets = ()=>{
    sql = 'select * from pricelists '
    return sql
}
save = obj => {
    sql = 'insert into pricelists '
    sql+= '(servicename,capacity,price)'
    sql+= 'values '
    sql+= '("'+obj.servicename+'","'+obj.capacity+'",'+obj.price+')'
    return sql
}
update = obj => {
    sql = 'update pricelists '
    sql+= 'set servicename"'+obj.servicename+'",'
    sql+= 'capacity="'+obj.capacity+'",'
    sql+= 'price='+obj.price+' '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    return sql
}
module.exports = {
    gets:gets,
    remove:remove,
    save:save,
    update:update
}