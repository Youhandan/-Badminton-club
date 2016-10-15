/**
 * Created by youhandan on 2016/10/14.
 */
$('#number').blur(function () {
    var num=$(this).val();
    if(num<0){
        alert("Please input positive number!");
        $(this).val(0);
    }
    else{
        $(this).val(parseInt(num));
    }
});
$('#endTime').blur(function () {
    if($(this).val()<$('#startTime').val()){
        alert("Please input correct time period!");
    }
});

$('#add').click(function () {
    var date=$('#date').val();
    var startTime=$('#startTime').val();
    var endTime=$('#endTime').val();
    var num=$('#number').val();
    if((startTime<endTime)&&(num!=="")){
        var str=date+' '+startTime+'~'+endTime+' '+num+'\n';
        $('#list').append(str);

    }
    else{
        alert('Please input correct information format!')
    }

});
$('#result').click(function () {
    var str=$('#list').text();
    var resultStr=generateSummary(str);
    $('#resultList').text(resultStr);

});
$('#clean').click(function () {
    $('textarea').val('');
});


