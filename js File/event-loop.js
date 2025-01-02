function a() {
    console.log('a');
    b();
    console.log('aa');

}
function b() {
    console.log('b');
    c();
    console.log('bb');
}
function c() {
    console.log('c');
    console.log('cc');
}

a();