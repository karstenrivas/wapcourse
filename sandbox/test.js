
 var protoObj = {x:5, y:7, z:9};
var myObj1 = Object.create(protoObj);
console.log(myObj1.x);
var myObj2 = Object.create(protoObj);
    myObj2.x = 0;

console.log(myObj2.x, "obj2");
delete myObj1.y;
console.log(myObj2.y);
console.log(myObj1.y);
console.log(protoObj.y);
delete protoObj.z;
console.log(myObj2.z);
console.log(myObj1.z);
console.log(protoObj.z);
