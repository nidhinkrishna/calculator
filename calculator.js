function valueclick(val)
{
    document.getElementById("screen").value+=val
}
function clrdisplay()
{
    document.getElementById("screen").value=null

}
function equalclick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    

}
function clrOneChar(val)
{
    
    var values=document.getElementById("screen").value
    document.getElementById('screen').value=values.substr(0, values.length-1)
    
}
