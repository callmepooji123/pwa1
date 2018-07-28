//function Loadjson(file,callback) {
  //var xhr=new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange=function () {
    //if(xhr.readyState === 4 && xhr.status == "200"){
      //callback(xhr.responseText);
    //}
  //};
  //xhr.send(null);
//}
//Loadjson("data.json",function(text){
  //var data=JSON.parse(text);
  //console.log(data);
  //basics(data.details);
  //basics2(data.caree);
  //education(data.Education);
  //tecskills(data.Techinical);
  //achievements(data.Achievements);
//})
function Loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile=Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  basics2(data.caree);
  education(data.Education);
  tecskills(data.Techinical);
  achievements(data.Achievements);
})
var child1=document.querySelector(".child1");
function basics(det) {
  var image = document.createElement("img");
  var name = document.createElement("h4");
  var phone=document.createElement("h4");
  var email=document.createElement("a");
  var add=document.createElement("h2");
  var hr=document.createElement("hr");
  var p=document.createElement("p");
  name.textContent=det.name;
  image.src= det.image;
  phone.textContent=det.phoneno;
  email.href="poojithanumu@gmail.com";
  email.textContent=det.email;
  add.textContent="Address";
  p.textContent=det.address;
  child1.appendChild(image);
  child1.appendChild(name);
  child1.appendChild(phone);
  child1.appendChild(email);
  child1.appendChild(add);
  child1.appendChild(hr);
  child1.appendChild(p);
}
var child2=document.querySelector(".child2");
function basics2(dc){
  var info=document.createElement("h4");
  var heading=document.createElement("h2");
  var hr=document.createElement("hr");
  info.textContent=dc.info;
  heading.textContent="Caree Objective";
  child2.appendChild(heading);
  child2.appendChild(hr);
  child2.appendChild(info);
}
function education(edu)
{
  var head=document.createElement("h2");
  var c=document.createElement("hr");
  var table1=document.createElement("table");
  head.textContent="Educational Qualifications";
  child2.appendChild(head);
  child2.appendChild(c);
  table1.border="1";
  child2.appendChild(table1);
  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
    }
    table1.innerHTML=tabledata;
}
function tecskills(tec)
{
  var hd=document.createElement("h2");
  var a=document.createElement("hr");
  hd.textContent="Techinical Skills";
  child2.appendChild(hd);
  child2.appendChild(a);
  for(i=0;i<tec.length;i++){
    var s=document.createElement("h4");
    s.textContent=tec[i].title;
    child2.appendChild(s);
    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=tec[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function achievements(ach)
{
  var h=document.createElement("h2");
  var f=document.createElement("hr");
  h.textContent="Achievements";
  child2.appendChild(h);
  child2.appendChild(f);
  for(i=0;i<ach.length;i++){
    var title=document.createElement("h4");
    title.textContent=ach[i].title;
    child2.appendChild(title);
    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=ach[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function openpage() {
  window.open("resume.html","_self",true)

}
