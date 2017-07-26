$(function(){

//HTML‚ğ‰Šú‰»
$("table.tbl tbody").html("");

//HTML‚ğ¶¬
$.getJSON("data2.json", function(data){
$(data.release).each(function(){
$('<tr>'+
'<th>'+this.day+'</th>'+
'<td class="label"><span class="' + this.label + '">' +
this.category + '</span></td>'+
'<td><a href="' + this.url + '" target="' +
this.target + '">' + this.content + '</a></td>'+
'</tr>').appendTo('table.tbl tbody');
})
})
});