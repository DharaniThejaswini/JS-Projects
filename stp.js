let state=false
document.getElementById("bt3").style.display="none"
document.getElementById("bt4").style.display="none"

function start()
 {
    state=true
    if (state) 
    {
        document.getElementById("bt3").style.display="none"
        document.getElementById("bt4").style.display=""
        document.getElementById("bt3").style.display="none"
        
    }
    
    document.getElementById("bt2").style.display="block"
    document.getElementById("bt1").style.display ="none"
    document.getElementById("bt2").style.backgroundColor =""
    document.getElementById("bt3").style.backgroundColor =""


}
function stop() 
{
    state=false
    document.getElementById("bt2").style.backgroundColor="red"
document.getElementById("bt1").style.backgroundColor =""
document.getElementById("bt3").style.backgroundColor =""
document.getElementById("bt1").style.display ="block"
document.getElementById("bt3").style.display=""
document.getElementById("bt4").style.display ="none"
document.getElementById("bt2").style.display="none"



}



setInterval(watch_start,10)

function reset() 
{
    document.getElementById("msec").innerHTML="00"
    document.getElementById("sec").innerHTML="00"
    document.getElementById("min").innerHTML="00"
    document.getElementById("bt1").style.backgroundColor =""
    document.getElementById("bt2").style.backgroundColor =""
    document.getElementById("bt3").style.backgroundColor ="blue"
    document.getElementById("bt3").style.display ="none"
    document.getElementById("lp").innerHTML = " "
    document.getElementById("lp").style.display="none"
  
}


let msec,sec,min;

function watch_start()
{
        msec=Number(document.getElementById("msec").innerText)
        sec=Number(document.getElementById("sec").innerText)
        min=Number(document.getElementById("min").innerText)
    if (state)
    {

        msec=msec+1
        if (msec>=100) 
        {
            msec=0;
            sec=sec+1
            
        }
        if (sec>60) 
        {
         min=min+1
         sec=0   
        }
        document.getElementById("msec").innerHTML=msec=msec<10?msec="0"+msec:msec
        document.getElementById("sec").innerHTML=sec=sec<10?sec="0"+sec:sec
        document.getElementById("min").innerHTML=min=min<10?min="0"+min:min


    }
   

}

// function lap() 
// {
//  document.getElementById("lp").innerHTML = `${min}:${sec}:${msec}`

// }

let bt4 = document.getElementById("bt4")
let count=0

bt4.addEventListener(
    "click",()=>
        {
            count++;
            let lap=`${count})${min}:${sec}:${msec}`
            let Element = document.createElement("h2")
            let txt=document.createTextNode(lap)
            Element.appendChild(txt)
            document.getElementById("lp").appendChild(Element)
            document.getElementById("lp").style.display="block"            
        }
)