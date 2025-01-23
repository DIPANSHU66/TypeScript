"use strict";
// // function add(num1:number,num2:number ,r :boolean,s:string){
// //     if(r)  console.log(`${s}`);
// //      else return num1+num2;
// // }
// // add(1,2,true,'sum of two  number is');
// console.log('lets learn pbjcect');
//     var person:{
//     firstname:string;
//     age:number;
//     skills:string[];
// }={
//     firstname:"dipanshu",
//     age:21,
//     skills:['reactjs','nodejs'],
// };
// console.log(person);
// var language:string="english";
// // let languae:string[];
// var person :{
//     name:string;
//     age:number;
//     skills:string[];
//     product:[number,string];
//     role:string;
// }={
//     name:"rahul",
//     age:1,
//     skills:["React","Node"],
//     product:[1,"macbook"],
//     role:'author'
// }
// person.product[0]=3;
// enum role {ADMIN,AUTHOR,READ_USER_ONLY};
//literals
// function   combine(num1:number|string  ,num2:number|string,check:"astring"|"asno"){
//     let result;
//     if(typeof num1 === "number" &&  typeof num2 === "number")
//         result=num1+num2;
//     else result=num1.toString()+num2.toString();
//     console.log(result);
// }
// combine(10,20,'asno');
// combine('ranhil','sra','astring')
//type alias
// // type c=number;
// interface User  {
//  name:string;   
// age:number;
// };
//     const u:User={
//     name:"rahaul",
//     age:21,}
// function add(num1:number,num2:number):number{return num1+num2;}
// let c:(a:number,b:number)=>number;
//c=function(a:number,b:number){
// return  a+b;
// }
// function all callbacks
// function addhandle(num1:number,num2:number,cb:(n:number)=>void){
//     const  result=num1+num2;
//     cb(result);
// }
// addhandle(10,20,(result)=>console.log(result));
// let userinput:any;
// let username:string;
// userinput=10;
// username="pal";
// userinput=username;
// function generateError(message:string,code:number):never{
//     throw{message:message,statuscode:code};
// }
// console.log(generateError("hi",2020));
// // classes
// class department{
//      name:string;
//     constructor (n:string){
//         this.name=n;}
// describle(this:department){console.log("Department",this.name);}
// };
// const accounting=new department('accounting');
// accounting.describle();
// const accountcopy={name:"suresh",describe:accounting.describle()}
// accountcopy.describe();
//private,public excess modifier
// class department{
//      readonly  name:string;
//     private employee:string[];
// constructor(n:string){
//       this.name=n;           
//    this.employee=[];
// }
// describe(this:department){
// console.log("department",this.name);}
//    addemployee(emp:string){
//    this.employee.push(emp);}
//    printemployeeinformation(){
//       console.log('no of employees',this.employee.length) }
// }
// const accounting=new department("Accounting");
// accounting.addemployee('rahul');
// accounting.addemployee('bedi');
// accounting.printemployeeinformation();u
// class department{
//       name:string;
//     private employee:string[];
// constructor(n:string){
//       this.name=n           
//    this.employee=[];
// }
// describe(this:department){
// console.log("department",this.name);}
//    addemployee(emp:string){
//    this.employee.push(emp);}
//    printemployeeinformation(){
//       console.log('no of employees',this.employee.length) }
// }
// class accountdepartment extends department{
//    // reports:string[]=[];
//      constructor(private id:string,private reports:string[],n:string){
//         super(n);}
//       addreports(text:string){
//          this.reports .push(text);
//       }
// }
// const accdep=new accountdepartment('d3',[],'d2');
// accdep.addreports("bugs");
// accdep.name="don";
// console.log(accdep);
// class department3 {
//     constructor(id, n) {
//         this.employees = [];
//         this.id = id;
//         this.nam = n;
//     }
// }
// class subclass extends department3 {
//     constructor(id, reports) {
//         super(id, "Accounting");
//         this.reports = reports;
//     }
//     describe() {
//         console.log("Department", this.id);
//     }
//     displayname() {
//         console.log(this.nam);
//     }
// }
// const suclass = new subclass("d1", []);
// suclass.describe();



=








