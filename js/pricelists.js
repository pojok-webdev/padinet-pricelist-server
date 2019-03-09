remove = obj => {
    sql = 'delete from pricelists '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select * from pricelists '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into pricelists '
    sql+= '(servicename,capacity,basicprice,bottomprice,upperprice)'
    sql+= 'values '
    sql+= '("'+obj.servicename+'","'+obj.capacity+'",'+obj.basicprice+','+obj.bottomprice+','+obj.upperprice+')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update pricelists '
    sql+= 'set servicename="'+obj.servicename+'",'
    sql+= 'capacity="'+obj.capacity+'",'
    sql+= 'basicprice='+obj.basicprice+', '
    sql+= 'bottomprice='+obj.bottomprice+', '
    sql+= 'upperprice='+obj.upperprice+' '
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