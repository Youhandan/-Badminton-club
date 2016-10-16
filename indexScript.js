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

    /*****************输入验证函数*************************/
    /*输入验证主函数*/
    function inputVerification(str) {
        dateArr=[];
        var pattern=/^\d{4}-\d{2}-\d{2}\s\d{2}:00~\d{2}:00\s\d+$/;
        var strArr=str.split('\n');
        return strArr.every(function (e) {
            if(pattern.test(e)){
                var inputElement=e.split(' ');
                var date=inputElement[0];
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

    /*输入验证子函数*/
    /*输入日期格式验证及重复性验证*/
    function dateVerify(date) {
        if(String(new Date(date))!=='Invalid Date'){
            if(dateArr.indexOf(date)==-1){
                dateArr.push(date);
                return true
            }
        }
        else return false

    }
    /*输入时间段验证*/
    function timePeriodVerify(timePeriod) {
        var timeElement=timePeriod.split('~');
        return ((getHour(timeElement[1])-getHour(timeElement[0])==2)||(getHour(timeElement[1])-getHour(timeElement[0])==3))
    }
    /*输入人数验证*/
    function participantVerify(participantNum){
        var positiveInteger=/^\d+$/;
        return positiveInteger.test(participantNum)
    }
    /*获取输入时间的Hour部分*/
    function getHour(time) {
        return parseInt(time.match(/\d{2}/)[0]);
    }


});
