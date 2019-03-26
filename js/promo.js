remove = obj => {
    sql = 'delete from promos '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select * from promos a  '
    sql+= 'where now() between a.startdate and a.enddate '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into promos '
    sql+= '(name,termcondition,startdate,enddate,user_id,createuser)'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.name+'","'+obj.termcondition+'","'+obj.startdate+'","'+obj.enddate+'","'+obj.user_id+'","'+obj.createuser+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update promos '
    sql+= 'set name="'+obj.name+'", '
    sql+= 'termcondition="'+obj.termcondition+'", '
    sql+= 'startdate="'+obj.startdate+'", '
    sql+= 'enddate="'+obj.enddate+'", '
    sql+= 'user_id="'+obj.user_id+'", '
    sql+= 'createuser="'+obj.createuser+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
get = obj => {
    sql = 'select a.id,a.name,a.termcondition,a.startdate,a.enddate,a.user_id,a.createuser from promos a '
    sql+= 'where id="'+obj.id+'" '
    return sql
}
module.exports = {
    gets:gets,
    get:get,
    remove:remove,
    save:save,
    update:update
}