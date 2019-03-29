remove = obj => {
    sql = 'delete from customs '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("remove SQL",sql)
    return sql
}
gets = ()=>{
    sql = 'select a.clientname,'
    sql+= 'a.clientpic,'
    sql+= 'a.clienttlp,'
    sql+= 'a.clientpichp,'
    sql+= 'a.clientemail,'
    sql+= 'a.clientaddress,'
    sql+= 'date_format(activationtarget,"%d-%b-%Y") activationtarget,'
    sql+= 'a.img,'
    sql+= 'a.quotation_date,'
    sql+= 'a.reason,'
    sql+= 'a.customprice,'
    sql+= 'b.name branch,'
    sql+= 'c.name category,'
    sql+= 'd.name service,'
    sql+= 'e.name media, '
    sql+= 'a.createuser '
    sql+= 'from customs a '
    sql+= 'left outer join branches b on b.id=a.branch_id '
    sql+= 'left outer join categories c on c.id=a.category_id '
    sql+= 'left outer join services d on d.id=a.service_id '
    sql+= 'left outer join medias e on e.id=a.media_id '
    sql+= 'order by a.quotation_date desc '
    console.log("gets SQL",sql)
    return sql
}
getById = obj => {
    sql = 'select a.clientname,'
    sql+= 'a.clientpic,'
    sql+= 'a.clienttlp,'
    sql+= 'a.clientpichp,'
    sql+= 'a.clientemail,'
    sql+= 'a.clientaddress,'
    sql+= 'date_format(activationtarget,"%d-%b-%Y") activationtarget,'
    sql+= 'a.img,'
    sql+= 'a.quotation_date,'
    sql+= 'a.reason,'
    sql+= 'a.customprice,'
    sql+= 'b.name branch,'
    sql+= 'c.name category,'
    sql+= 'd.name service,'
    sql+= 'e.name media, '
    sql+= 'a.createuser '
    sql+= 'from customs a '
    sql+= 'left outer join branches b on b.id=a.branch_id '
    sql+= 'left outer join categories c on c.id=a.category_id '
    sql+= 'left outer join services d on d.id=a.service_id '
    sql+= 'left outer join medias e on e.id=a.media_id '
    sql+= 'where a.id='+obj.id+' '
    console.log("gets SQL",sql)
    return sql
}
getByMonth = obj => {
    sql = 'select a.clientname,'
    sql+= 'a.clientpic,'
    sql+= 'a.clienttlp,'
    sql+= 'a.clientpichp,'
    sql+= 'a.clientemail,'
    sql+= 'a.clientaddress,'
    sql+= 'date_format(activationtarget,"%d-%b-%Y") activationtarget,'
    sql+= 'a.img,'
    sql+= 'a.quotation_date,'
    sql+= 'a.reason,'
    sql+= 'a.customprice,'
    sql+= 'b.name branch,'
    sql+= 'c.name category,'
    sql+= 'd.name service,'
    sql+= 'e.name media, '
    sql+= 'a.createuser '
    sql+= 'from customs a '
    sql+= 'left outer join branches b on b.id=a.branch_id '
    sql+= 'left outer join categories c on c.id=a.category_id '
    sql+= 'left outer join services d on d.id=a.service_id '
    sql+= 'left outer join medias e on e.id=a.media_id '
    sql+= 'where date_format(quotation_date,"%Y-%m")="'+obj.monthyear+'" '
    sql+= 'order by a.quotation_date desc '
    console.log("gets SQL",sql)
    return sql
}
save = obj => {
    sql = 'insert into customs '
    sql+= '('
    sql+= 'branch_id,'
    sql+= 'clientname,'
    sql+= 'clientpic,'
    sql+= 'clienttlp,'
    sql+= 'clientpichp,'
    sql+= 'clientemail,'
    sql+= 'clientaddress,'
    sql+= 'activationtarget,'
    sql+= 'reason,'
    sql+= 'img,'
    sql+= 'quotation_date,'
    sql+= 'category_id,'
    sql+= 'service_id,'
    sql+= 'subservice_id,'
    sql+= 'media_id,'
    sql+= 'capacity,'
    sql+= 'customprice,'
    sql+= 'createuser'
    sql+= ')'
    sql+= 'values '
    sql+= '('
    sql+= '"'+obj.branch_id+'", '
    sql+= '"'+obj.clientname+'", '
    sql+= '"'+obj.clientpic+'", '
    sql+= '"'+obj.clienttlp+'", '
    sql+= '"'+obj.clientpichp+'", '
    sql+= '"'+obj.clientemail+'", '
    sql+= '"'+obj.clientaddress+'", '
    sql+= '"'+obj.activationtarget+'", '
    sql+= '"'+obj.reason+'", '
    sql+= '"'+obj.img+'", '
    sql+= '"'+obj.quotation_date+'",'
    sql+= '"'+obj.category_id+'", '
    sql+= '"'+obj.service_id+'", '
    sql+= '"'+obj.subservice_id+'", '
    sql+= '"'+obj.media_id+'", '
    sql+= '"'+obj.capacity+'", '
    sql+= ' '+obj.customprice+', '
    sql+= '"'+obj.createuser+'" '
    sql+= ')'
    console.log("Save SQL",sql)
    return sql
}
update = obj => {
    sql = 'update customs '
    sql+= 'set '
    sql+= 'branch_id="'+obj.branch_id+'",'
    sql+= 'clientname="'+obj.clientname+'",'
    sql+= 'clientpic="'+obj.clientpic+'",'
    sql+= 'clienttlp="'+obj.clienttlp+'",'
    sql+= 'clientpichp="'+obj.clientpichp+'",'
    sql+= 'clientemail="'+obj.clientemail+'",'
    sql+= 'clientaddress="'+obj.clientaddress+'",'
    sql+= 'activationtarget="'+obj.activationtarget+'",'
    sql+= 'reason="'+obj.reason+'",'
    sql+= 'img="'+obj.img+'",'
    sql+= 'quotation_date="'+obj.quotation_date+'",'
    sql+= 'category_id="'+obj.category_id+'",'
    sql+= 'service_id="'+obj.service_id+'",'
    sql+= 'media_id="'+obj.media_id+'",'
    sql+= 'capacity="'+obj.capacity+'",'
    sql+= 'customprice="'+obj.customprice+'", '
    sql+= 'createuser="'+obj.createuser+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
getprices = obj => {
    sql = 'select normalprice from pricelists '
    sql+= 'where category_id='+obj.category_id+' '
    sql+= 'and service_id='+obj.service_id+' '
    sql+= 'and media_id='+obj.media_id+' '
    sql+= 'and capacity='+obj.capacity+' '
    return sql
}
setApprove = obj => {
    sql = 'update customs '
    sql+= 'set '
    sql+= 'approved="'+obj.approved+'" '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Approve SQL",sql)
    return sql
}
module.exports = {
    gets:gets,
    getById:getById,
    getByMonth:getByMonth,
    remove:remove,
    save:save,
    update:update,
    getprices:getprices,
    setApprove:setApprove
}