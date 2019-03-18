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
    sql+= 'b.name branch,'
    sql+= 'c.name category,'
    sql+= 'd.name service,'
    sql+= 'e.name media '
    sql+= 'from customs a '
    sql+= 'left outer join branches b on b.id=a.branch_id '
    sql+= 'left outer join categories c on c.id=a.category_id '
    sql+= 'left outer join servicenames d on d.id=a.servicename_id '
    sql+= 'left outer join medias e on e.id=a.media_id '
    sql+= 'order by a.quotation_date desc '
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
    sql+= 'b.name branch,'
    sql+= 'c.name category,'
    sql+= 'd.name service,'
    sql+= 'e.name media '
    sql+= 'from customs a '
    sql+= 'left outer join branches b on b.id=a.branch_id '
    sql+= 'left outer join categories c on c.id=a.category_id '
    sql+= 'left outer join servicenames d on d.id=a.servicename_id '
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
    sql+= 'servicename_id,'
    sql+= 'media_id,'
    sql+= 'customprice'
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
    sql+= '"'+obj.servicename_id+'", '
    sql+= '"'+obj.media_id+'", '
    sql+= ' '+obj.customprice+' '
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
    sql+= 'category_id="'+obj.servicename_id+'",'
    sql+= 'servicename_id="'+obj.media_id+'",'
    sql+= 'customprice="'+obj.customprice+'", '
    sql+= 'where '
    sql+= 'id='+obj.id+' '
    console.log("Update SQL",sql)
    return sql
}
getprices = obj => {
    sql = 'select normalprice from pricelists '
    sql+= 'where category_id='+obj.category_id+' '
    sql+= 'and servicename_id='+obj.servicename_id+' '
    sql+= 'and media_id='+obj.media_id+' '
    sql+= 'and capacity='+obj.capacity+' '
    return sql
}
module.exports = {
    gets:gets,
    getByMonth:getByMonth,
    remove:remove,
    save:save,
    update:update,
    getprices:getprices
}