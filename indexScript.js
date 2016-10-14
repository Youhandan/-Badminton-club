/**
 * Created by youhandan on 2016/10/14.
 */
$('form').submit(function () {
    event.preventDefault();
});


$('#add').click(function () {
    var date=$('#date').val();
    var startTime=$('#startTime').val();
    var endTime=$('#endTime').val();
    var num=$('#number').val();
    var str=date+' '+startTime+'~'+endTime+' '+num+'\n';
    $('#list').append(str);
});
$('#result').click(function () {
    var str=$('#list').text();
    var resultStr=generateSummary(str);
    $('#resultList').text(resultStr);

});


