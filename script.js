var value = 10
function timer()
{
    var ele = document.getElementById("root");
    ele.innerHTML=value--;
    if(value == 0)
    {
        ele.innerHTML="Happy Independance Day!!!";
        return;
    }
    setTimeout(timer, 1000);
}