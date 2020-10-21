window.onload=function()
{
  var colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  const btn1=document.getElementsByClassName("btn")[0];
  const btn2=document.getElementsByClassName("btn")[1];
  const span1 =document.getElementById("content-span");
  const span2 =document.getElementById("content-span2");
  const header=document.getElementsByTagName("header")[0];
  btn1.addEventListener("click",function(){

    let x = "#"
    for(let i=0;i<6;i++)
    {
        x+=colors[randomNumber()];
    }
    document.body.style.backgroundColor=x;
    span1.textContent=x;
  })
  btn2.addEventListener("click",function(){

    let x = "#"
    for(let i=0;i<6;i++)
    {
        x+=colors[randomNumber()];
    }
    header.style.backgroundColor=x;
    span2.textContent=x;
  })
  
  
  
  
  
  function randomNumber()
  {
     return Math.floor(Math.random()*colors.length);
  }

}
