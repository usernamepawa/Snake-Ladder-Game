let pfs1=0;
const handleP1=()=>
{
  let s=Math.floor(Math.random() * 6) + 1;

    document.getElementById("s1").innerHTML=s;
    pfs1=pfs1+s;
    document.getElementById("s2").innerHTML=pfs1;
    document.getElementById("btn1").disabled=true;
    document.getElementById("btn2").diabled=false;

    if(pfs1>100)
    {
      alert("Player 1 is Winner")
    }
   

}

let pfs2=0;
 const handleP2=()=>
 {
    let s1=Math.floor(Math.random() * 6) + 1;
    document.getElementById("s3").innerHTML=s1;
    pfs2=pfs2+s1;
    document.getElementById("s4").innerHTML=pfs2;

    document.getElementById("btn2").diabled=true;
    document.getElementById("btn1").disabled=false;
    if(pfs2>100)
    {
      alert("Player 2 is Winner")
    }




 }