const list = ["Anil","Sunil","Steve","Kevi"];

const employees = [{name:"Anil",dept:"IT"},{name:"Sunil",dept:"Sales"}];

console.log(list);
console.log(employees);

// for (const val in list){
//     console.log(" Value#" + val);
// }
for (const emp of employees){
    const tmpEmp = JSON.stringify(emp);
    console.log("Employee 1 Info:" + tmpEmp);
    const empObj = JSON.parse(tmpEmp);
    // for(const attr of empObj){
        console.log("Object #"+empObj.name);
    // }
}
