/**
 * Created by hyou on 2016/10/17.
 */

/*********incomeFunc Test*********/
QUnit.module("incomeFunc", {
    before:function () {
        this.participantNum1=3;
        this.participantNum2=10;
        this.participantNum3=4;
    }
});
QUnit.test("participantNum < 4",function (assert) {
    var actual1=incomeFunc(this.participantNum1);
    assert.equal(actual1,0,"test succeeds");
});

QUnit.test("participantNum >= 4", function (assert) {
    var actual1=incomeFunc(this.participantNum2);
    assert.equal(actual1,300,"test succeeds")
});

QUnit.test("participantNum >= 4",function (assert) {
    var actual1=incomeFunc(this.participantNum3);
    assert.equal(actual1,120,"test succeeds")
});
