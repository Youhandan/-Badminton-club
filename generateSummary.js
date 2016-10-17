/**
 * Created by hyou on 2016/10/14.
 */
"use strict";
/**********主函数************/
function generateSummary(input) {
    if(inputVerification(input)) {
        var inputArr = input.split('\n');
        var incomeTotal = 0;
        var outcomeTotal = 0;
        var profitTotal = 0;
        var calculateList = '';
        inputArr.forEach(function (content) {
            if (content) {
                var resultOnce = generateOnce(content);
                incomeTotal += resultOnce.income;
                outcomeTotal += resultOnce.outcome;
                profitTotal += resultOnce.profit;
                calculateList += resultOnce.resultStr + '\n';
            }

        });
        return '[Summary]\n\n' + calculateList + '\n' + 'Total Income: ' + incomeTotal + '\n' + 'Total Payment: ' + outcomeTotal + '\n' + 'Profit: ' + profitTotal;
    }
    else return "Wrong input！"
}
/********子函数**************/
/*生成单次活动财务总结*/
function generateOnce(input){
    var inputElement=input.split(' ');
    var date=new Date(inputElement[0]);
    var timePeriod=inputElement[1];
    var participantNum=parseInt(inputElement[2]);
    var income=incomeFunc(participantNum);
    var outcome=outcomeFunc(date,timePeriod,participantNum);
    var profit=income-outcome;
    var resultStr='';
    var result={};
    if (profit>0){
        resultStr=inputElement[0]+' '+inputElement[1]+' '+'+'+income+' '+'-'+outcome+' '+'+'+profit;
    }
    else if(profit<0){
        resultStr=inputElement[0]+' '+inputElement[1]+' '+'+'+income+' '+'-'+outcome+' '+profit;
    }
    else {
        resultStr=inputElement[0]+' '+inputElement[1]+' '+'+'+income+' '+'-'+outcome+' '+profit;
    }
    result['income']=income;
    result['outcome']=outcome;
    result['profit']=profit;
    result['resultStr']=resultStr;
    return result
}

/*根据参与人数计算收入*/
function incomeFunc(participantNum) {
    if(participantNum<4){
        return 0
    }
    else{
        return 30*participantNum
    }
}
/*根据日期、时间段、参与人数计算支出*/
function outcomeFunc(date,timePeriod,participantNum) {
    /*输入参数预处理*/
    var day=date.getDay();
    var timeElement=timePeriod.split('~');
    var timePattern=/\d{2}/;
    var startTime=parseInt(timeElement[0].match(timePattern)[0]);
    var endTime=parseInt(timeElement[1].match(timePattern)[0]);
    var placeMoney=placeMoneyFunc(day,startTime,endTime);
    var placeNum=placeNumFunc(participantNum);
    return placeMoney*placeNum
}
/*根据人数计算预定场地数*/
function placeNumFunc(participantNum) {
    var T=parseInt(participantNum/6);
    var X=participantNum%6;
    if(T==0){
        if(X<4){
            return T
        }
        else {
            return T+1
        }
    }
    else if(T==1){
        return T+1
    }
    else if(T==2||T==3){
        if(X>=4){
            return T+1
        }
        else{
            return T
        }
    }
    else{
        return T
    }
}
/*根据星期和时间段计算场地金额总数*/
function placeMoneyFunc(day,startTime,endTime) {

    /*计算不同时间场地金额*/
    /*工作日*/
    if(day<6){
        /*开始时间段9:00~11:00*/
        if(startTime>=9&&startTime<12){
            if(endTime<=12){
                return 30*(endTime-startTime);
            }
            else{
                return 30*(12-startTime)+50*(endTime-12);
            }
        }
        /*开始时间段12:00~17:00*/
        else if(startTime>=12&&startTime<18){
            if(endTime<=18){
                return 50*(endTime-startTime)
            }
            else{
                return 50*(18-startTime)+80*(endTime-18)
            }
        }
        /*开始时间段18：00~19:00*/
        else if(startTime>=18&&startTime<20){
            if(endTime<=20){
                return 80*(endTime-startTime)
            }
            else {
                return 80*(20-startTime)+60*(endTime-20)
            }
        }
        /*开始时间段20:00~20:00*/
        else{
            return 60*(endTime-startTime)
        }
    }
    /*休息日*/
    else{
        /*开始时间段9:00~11:00*/
        if(startTime>=9&&startTime<12){
            if(endTime<=12){
                return 40*(endTime-startTime)
            }
            else {
                return 40*(12-startTime)+50*(endTime-12)
            }
        }
        /*开始时间段12:00~17:00*/
        else if(startTime>=12&&startTime<18){
            if(endTime<=18){
                return 50*(endTime-startTime)
            }
            else {
                return 50*(18-endTime)+60*(endTime-18)
            }
        }
        /*开始时间段18:00~20:00*/
        else{
            return 60*(endTime-startTime)
        }
    }
}