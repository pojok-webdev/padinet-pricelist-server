remove = obj => {
    sql = 'delete from pricelists '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select a.*,b.name category,c.name servicename,d.name media from pricelists a '
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'left outer join services c on c.id=a.service_id '
    sql+= 'left outer join medias d on d.id=a.media_id '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into pricelists '
    sql+= '('
    sql+= 'category_id,'
    sql+= 'service_id,'
    sql+= 'media_id,'
    sql+= 'capacity,'
    sql+= 'basicprice,'
    sql+= 'normalprice,'
    sql+= 'bottomprice,'
    sql+= 'upperprice'
    sql+= ')'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.category_id+'",'
    sql+= '"'+obj.service_id+'",'
    sql+= '"'+obj.media_id+'",'
    sql+= '"'+obj.capacity+'",'
    sql+= ' '+obj.basicprice+','
    sql+= ' '+obj.normalprice+','
    sql+= ' '+obj.bottomprice+','
    sql+= ' '+obj.upperprice+' '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update pricelists '
    sql+= 'set category_id="'+obj.category_id+'",'
    sql+= 'service_id="'+obj.service_id+'",'
    sql+= 'media_id="'+obj.media_id+'",'
    sql+= 'capacity="'+obj.capacity+'",'
    sql+= 'basicprice='+obj.basicprice+', '
    sql+= 'normalprice='+obj.normalprice+', '
    sql+= 'bottomprice='+obj.bottomprice+', '
    sql+= 'upperprice='+obj.upperprice+' '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
getcapacities = obj => {
    sql = 'select capacity from pricelists '
    sql+= 'where '
    sql+= 'category_id="'+obj.category_id+'" '
    sql+= 'and service_id="'+obj.service_id+'" '
    sql+= 'and subservice_id="'+obj.subservice_id+'"'
    sql+= 'and media_id="'+obj.media_id+'" '
    console.log("get capacities SQL",sql)
    return sql
}
module.exports = {
    gets:gets,
    getcapacities:getcapacities,
    remove:remove,
    save:save,
    update:update
}