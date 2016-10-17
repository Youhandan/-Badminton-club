/**
 * Created by youhandan on 2016/10/17.
 */
/*********placeNumFun Test*********/
QUnit.module("placeNumFunc",{
    before:function () {
        this.t1=0;
        this.t2=1;
        this.t3=2;
        this.t4=3;
        this.t5=4;

        this.x1=3;
        this.x2=4;
        this.x3=5;
    }

});
QUnit.test("T=0,X<4",function (assert) {
    var actual1=placeNumFunc(this.t1,this.x1);
    assert.equal(actual1,this.t1,"test succeeds")
});
QUnit.test("T=0,X=4",function (assert) {
    var actual1=placeNumFunc(this.t1,this.x2);
    assert.equal(actual1,this.t1+1,"test succeeds")
});
QUnit.test("T=0,X>4",function (assert) {
    var actual1=placeNumFunc(this.t1,this.x3);
    assert.equal(actual1,this.t1+1,"test succeeds")
});
QUnit.test("T=1,X任意",function (assert) {
    var actual1=placeNumFunc(this.t2,this.x1);
    assert.equal(actual1,this.t1+2,"test succeeds")
});
QUnit.test("T=1,X任意",function (assert) {
    var actual1=placeNumFunc(this.t2,this.x2);
    assert.equal(actual1,this.t1+2,"test succeeds")
});
QUnit.test("T=2,X>=4",function (assert) {
    var actual1=placeNumFunc(this.t3,this.x2);
    assert.equal(actual1,this.t3+1,"test succeeds");
    var actual2=placeNumFunc(this.t3,this.x3);
    assert.equal(actual2,this.t3+1,"test succeeds")
});
QUnit.test("T=2,X<4",function (assert) {
    var actual1=placeNumFunc(this.t3,this.x1);
    assert.equal(actual1,this.t3,"test succeeds")
});

QUnit.test("T=3,X>=4",function (assert) {
    var actual1=placeNumFunc(this.t4,this.x2);
    assert.equal(actual1,this.t4+1,"test succeeds");
    var actual2=placeNumFunc(this.t4,this.x3);
    assert.equal(actual2,this.t4+1,"test succeeds")
});
QUnit.test("T=3,X<4",function (assert) {
    var actual1=placeNumFunc(this.t4,this.x1);
    assert.equal(actual1,this.t4,"test succeeds")
});
QUnit.test("T>3,X任意",function (assert) {
    var actual1=placeNumFunc(this.t5,this.x1);
    assert.equal(actual1,this.t5,"test succeeds");
    var actual2=placeNumFunc(this.t5,this.x2);
    assert.equal(actual2,this.t5,"test succeeds");
    var actual3=placeNumFunc(this.t5,this.x3);
    assert.equal(actual3,this.t5,"test succeeds")
});