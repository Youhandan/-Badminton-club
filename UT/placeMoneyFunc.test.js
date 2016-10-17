/**
 * Created by youhandan on 2016/10/17.
 */
/*********placeMoneyFunc Test*********/

QUnit.module("placeMoneyFunc",{
    before:function () {
        this.day1=4;
        this.day2=7;

        this.startTime1=9;
        this.startTime2=12;
        this.startTime3=18;
        this.startTime4=20;

        this.endTime1=12;
        this.endTime2=14;
        this.endTime3=20;
        this.endTime4=22;

    }
});
QUnit.test("work days，9：00~12：00",function (assert) {
    var actual1=placeMoneyFunc(this.day1,this.startTime1,this.endTime1);
    assert.equal(actual1,90,"test succeed")
});
QUnit.test("work days，12：00~18：00",function (assert) {
    var actual1=placeMoneyFunc(this.day1,this.startTime2,this.endTime2);
    assert.equal(actual1,100,"test succeed")
});
QUnit.test("work days，18：00~20：00",function (assert) {
    var actual1=placeMoneyFunc(this.day1,this.startTime3,this.endTime3);
    assert.equal(actual1,160,"test succeed")
});
QUnit.test("work days，20：00~22：00",function (assert) {
    var actual1=placeMoneyFunc(this.day1,this.startTime4,this.endTime4);
    assert.equal(actual1,120,"test succeed")
});
QUnit.test("weekends，09：00~12：00",function (assert) {
    var actual1=placeMoneyFunc(this.day2,this.startTime1,this.endTime1);
    assert.equal(actual1,120,"test succeed")
});
QUnit.test("weekends，12：00~18：00",function (assert) {
    var actual1=placeMoneyFunc(this.day2,this.startTime2,this.endTime2);
    assert.equal(actual1,100,"test succeed")
});
QUnit.test("weekends，18：00~22：00",function (assert) {
    var actual1=placeMoneyFunc(this.day2,this.startTime3,this.endTime3);
    assert.equal(actual1,120,"test succeed")
});

