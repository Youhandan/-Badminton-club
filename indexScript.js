/**
 * Created by youhandan on 2016/10/14.
 */
$(function () {
    var dateArr=[];
    /**********事件*************/
    /*Participation失去焦点事件*/
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
    /*EndTime 失去焦点事件*/
    $('#endTime').blur(function () {
        if(!(getHour($(this).val())-getHour($('#startTime').val())==2||getHour($(this).val())-getHour($('#startTime').val())==3)){
            alert("Please input correct time period!");
        }
    });
    /*添加活动信息到Activity List事件*/
    $('#add').click(function () {
        var date=$('#date').val();
        if(dateArr.indexOf(date)==-1){
            dateArr.push(date);
            var startTime=$('#startTime').val();
            var endTime=$('#endTime').val();
            var num=$('#number').val();
            var listContent=$('#list').val();
            if((getHour(endTime)-getHour(startTime)==2||getHour(endTime)-getHour(startTime)==3)&&(num!=="")){
                if(listContent==''){
                    listContent+=date+' '+startTime+'~'+endTime+' '+num;
                    $('#list').val(listContent);
                }
                else{
                    listContent+='\n'+date+' '+startTime+'~'+endTime+' '+num;
                    $('#list').val(listContent);
                }

            }
            else{
                alert('Please add correct information format!')
            }
        }
        else{
            alert('Date is duplicated')
        }


    });
    /*生成summary*/
    $('#result').click(function () {
        var str=$('#list').val();
        if(inputVerification(str)){
            var resultStr=generateSummary(str);
            $('#resultList').val(resultStr);
        }
        else alert('Input format is wrong!')


    });
    /*清除textarea的内容*/
    $('#clean').click(function () {
        $('textarea').val('');
        dateArr=[];
    });
    

});
