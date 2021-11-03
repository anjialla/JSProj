const express = require('express');
let members = require('./data/Members');

console.log(members);
// const newMember = 
members.push({"id":4,"name":'Satya',"age":33});
console.log(members);
// members.push({"id":4,"name":'Satya',"age":33});
members = members.filter((member)=>{
    console.log(member.id);
    return member.name !== 'Satya';
});

console.log(members);
// const list = ["Anil","Sunil","Steve","Kevi"];

// const employees = [{name:"Anil",dept:"IT"},{name:"Sunil",dept:"Sales"}];

// console.log(list);

// // for (const val in list){
// //     console.log(" Value#" + val);
// // }
// for (const emp of employees){
//     const tmpEmp = JSON.stringify(emp);
//     console.log("Employee 1 Info:" + tmpEmp);
//     const empObj = JSON.parse(tmpEmp);
//     // for(const attr of empObj){
//         console.log("Object #"+empObj.name);
//     // }
// }

// const http = require("http");

// const server = http.createServer((req,res) => {
//     console.log("Request....."+req.url);
//     switch(req.url){
//         case '/html':
//             res.write("<html><head><title>sample</title><body>")
//             res.write("<b>hello world!</b>");
//             res.write("</body></html>")
//             break;
//         case '/json':
//             res.send();
//             break;
//     }
//     res.end();
// });

// server.listen(8080,"localhost",()=>{
//     console.log("Started server");
// });