/**
 * Created by youhandan on 2016/10/17.
 */

/*********generateSummary Test*********/

QUnit.module("generate all activity summary",{
    before:function () {
        this.str1="2016-06-02 20:00~22:00 7\n2016-06-03 09:00~12:00 14";
        this.result1='[Summary]\n\n2016-06-02 20:00~22:00 +210 -240 -30\n2016-06-03 09:00~12:00 +420 -180 +240\n\nTotal Income: 630\nTotal Payment: 420\n' + 'Profit: 210';
    }
});
QUnit.test("2016-10-18 17:00~20:00 50",function (assert) {
    var actual1=generateSummary(this.str1);
    assert.equal(actual1,this.result1,"test succeed")
});
