template = obj => {
    txt = '<html>'
    txt+= '<body>'
    txt+= 'Sebuah pengajuan penawaran telah dibuat<br />'
    txt+= '<br />'
    txt+= '<table>'
    txt+= '<tr><td>Nama:</td><td>'+obj.name+'</td></tr>'
    txt+= '<tr><td>Alamat:</td><td>'+obj.address+'</td></tr>'
    txt+= '<tr><td>Layanan:</td><td>'+obj.service+'</td></tr>'
    txt+= '<tr><td>Harga yang diajukan:</td><td>'+obj.price+'</td></tr>'
    txt+= '<tr><td>AM:</td><td>'+obj.am+'</td></tr>'
    txt+= '<tr><td>Tanggal Penawaran:</td><td>'+obj.quotation_date+'</td></tr>'
    txt+= '</table>'
    txt+= '</body>'
    txt+= '</html>'
}
module.exports = {
    template:template
}