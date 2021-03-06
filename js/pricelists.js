remove = obj => {
    sql = 'delete from pricelists '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select '
    sql+= 'a.normalprice,'
    sql+= 'format(a.normalprice,2)normalpricef,'
    sql+= 'a.basicprice,'
    sql+= 'format(a.basicprice,2)basicpricef,'
    sql+= 'a.bottomprice,'
    sql+= 'format(a.bottomprice,2)bottompricef,'
    sql+= 'a.upperprice,'
    sql+= 'format(a.upperprice,2)upperpricef,'
    sql+= 'a.capacity,a.media_id,a.service_id,a.subservice_id,a.category_id,a.createuser,a.createdate,'
    sql+= 'b.name category,c.name servicename,e.name subservice,d.name media from pricelists a '
    sql+= 'left outer join categories b on b.id=a.category_id '
    sql+= 'left outer join services c on c.id=a.service_id '
    sql+= 'left outer join subservices e on e.id=a.subservice_id '
    sql+= 'left outer join medias d on d.id=a.media_id '
    console.log("gets SQL",sql)
    return sql
}
getMedias = obj => {
    sql = "select distinct b.id, b.name from pricelists a "
    sql+= "left outer join medias b on b.id=a.media_id "
    sql+= "where "
    sql+= "category_id = " + obj.category_id + " "
    sql+= "and service_id = " + obj.service_id + " "
    sql+= "and subservice_id = " + obj.subservice_id + " "
    console.log("getMedias",sql)
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
    sql+= 'and subservice_id="'+obj.subservice_id+'" '
    sql+= 'and media_id="'+obj.media_id+'" '
    console.log("get capacities SQL",sql)
    return sql
}
getprices = obj => {
    sql = 'select basicprice,'
    sql+= 'format(basicprice,2)basicpricef,'
    sql+= 'normalprice,'
    sql+= 'format(normalprice,2)normalpricef,'
    sql+= 'bottomprice,'
    sql+= 'format(bottomprice,2)bottompricef,'
    sql+= 'upperprice, '
    sql+= 'format(upperprice,2) upperpricef '
    sql+= 'from pricelists '
    sql+= 'where '
    sql+= 'category_id="'+obj.category_id+'" '
    sql+= 'and subservice_id="'+obj.subservice_id+'" '
    sql+= 'and media_id="'+obj.media_id+'" '
    sql+= 'and capacity="'+obj.capacity+'" '
    console.log("get prices SQL",sql)
    return sql
}
module.exports = {
    gets:gets,
    getcapacities:getcapacities,
    getprices:getprices,
    getMedias:getMedias,
    remove:remove,
    save:save,
    update:update
}