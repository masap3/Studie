<script type="text/javascript">
$(document).ready(function () {
    $.getJSON("data.json", function(data){
        for(var i in data){
        $("#output").append("<li><strong>" + data[i].division + "</strong></li>");
            for(var j in data[i].person){
                $("#output").append("<li>" + data[i].person[j].name + "i" + data[i].person[j].age + "Ëj</li>n");
            }
        }
    });
});
</script>
