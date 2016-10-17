/**
 * Created by youhandan on 2016/10/17.
 */
/*********generateOnce Test*********/

QUnit.module("generate every activity summary",{
    before:function () {
        this.str1="2016-10-18 17:00~20:00 50";
        this.result1="2016-10-18 17:00~20:00 +1500 -1680 -180";
    }
});
QUnit.test("2016-10-18 17:00~20:00 50",function (assert) {
    var actual1=generateOnce(this.str1);
    assert.equal(actual1.resultStr,this.result1,"test succeed")
});