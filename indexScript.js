/**
 * Created by youhandan on 2016/10/14.
 */
$(function () {
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
        var listContent=$('#list').val();
        if((startTime<endTime)&&(num!=="")){
            if(listContent==''){
                listContent+=date+' '+startTime+'~'+endTime+' '+num;
                $('#list').val(listContent);
            }
            else{
                listContent+='\n'+date+' '+startTime+'~'+endTime+' '+num
                $('#list').val(listContent);
            }

        }
        else{
            alert('Please add correct information format!')
        }

    });
    $('#result').click(function () {
        var str=$('#list').val();
        if(inputVerification(str)){
            var resultStr=generateSummary(str);
            $('#resultList').val(resultStr);
        }
        else alert('Input format is wrong!')


    });
    $('#clean').click(function () {
        $('textarea').val('');
    });

    function inputVerification(str) {
        var pattern=/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}~\d{2}:\d{2}\s\d+$/;
        var strArr=str.split('\n');
        return strArr.every(function (e) {
            if(pattern.test(e)){
                var inputElement=e.split(' ');
                var date=new Date(inputElement[0]);
                var dateState=dateVerify(date);
                var timePeriod=inputElement[1];
                var timeState=timePeriodVerify(timePeriod);
                var participantNum=parseInt(inputElement[2]);
                var participantState=participantVerify(participantNum);
                return dateState&&timeState&&participantState

            }
            else return false

        })

    }



    function dateVerify(date) {
        return String(date)!=='Invalid Date'
    }
    function timePeriodVerify(timePeriod) {
        var timeElement=timePeriod.split('~');
        var timePattern=/^\d{2}:00$/;
        return timeElement.every(function (e) {
            if(timePattern.test(e)){
                var startTime=parseInt(timeElement[0].match(/\d{2}/)[0]);
                var endTime=parseInt(timeElement[1].match(/\d{2}/)[0]);
                return endTime-startTime==2||endTime-startTime==3;
            }
            else return false
        });
    }
    function participantVerify(participantNum){
        var positiveInteger=/^\d+$/;
        return positiveInteger.test(participantNum)
    }





});
