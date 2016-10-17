/**
 * Created by hyou on 2016/10/17.
 */
/*****************输入验证函数*************************/
/*输入验证主函数*/
function inputVerification(str) {
    var dateArr=[];//活动日期数组
    var pattern=/^\d{4}-\d{2}-\d{2}\s\d{2}:00~\d{2}:00\s\d+$/;
    var strArr=str.split('\n');
    return strArr.every(function (e) {
        if(pattern.test(e)){
            var inputElement=e.split(' ');
            var date=inputElement[0];
            var dateState=dateVerify(date,dateArr);
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
function dateVerify(date,dateArr) {
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