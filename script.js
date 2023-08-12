function addNewField(){

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("expField");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter Here...');
newNode.classList.add('mt-2');

let Expob=document.getElementById("Exp");
let weAddButtonob=document.getElementById("weAddButton");

Expob.insertBefore(newNode,weAddButtonob);
}


function addAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here...');
    newNode.classList.add('mt-2');
    
    let AQob=document.getElementById("AQ");
    let weAddButton1ob=document.getElementById("weAddButton1");
    
    AQob.insertBefore(newNode,weAddButton1ob);

}




function printCV(){
let namefield=document.getElementById("nameField").value;
let namet1=document.getElementById('nameT1');
nameT1.innerHTML=namefield;

let nameT2=document.getElementById('nameT2');
nameT2.innerHTML=namefield;


let contactfield=document.getElementById("contactField").value;
let contact=document.getElementById('contact');
contact.innerHTML=contactfield;


let addressfield=document.getElementById('addressField').value;
let address=document.getElementById('address');
address.innerHTML=addressfield;

let lkdField=document.getElementById('lkdField').value;
let linkedin=document.getElementById('linkedin1');
linkedin.innerHTML=lkdField;

document.getElementById('gh').innerHTML=document.getElementById('ghField').value;

document.getElementById('cc').innerHTML=document.getElementById('ccField').value;

document.getElementById('obj').innerHTML=document.getElementById('objField').value;


let exp=document.getElementsByClassName("expField");
let str="";
for(let e of exp){
str = str+ `<li> ${e.value} </li>`;
}
document.getElementById('we').innerHTML=str;


let aqual=document.getElementsByClassName("aqField");
let str1="";
for(let i of aqual){
    str1=str1+`<li>${i.value}</li>`
}
document.getElementById('aq').innerHTML=str1;

let x=document.getElementById('cv-form');
x.classList.add('main');

let y=document.getElementById('cv-template');
y.classList.remove('main2');

}


function download(){

    window.print();
}