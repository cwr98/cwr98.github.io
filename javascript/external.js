//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
// A prompt box is used to prompt users to input a value
//before entering a page.
//user_name = window.prompt("Please enter your name", "Corban Rosenauer");
//document.write(user_name);
//x = 22;
//const y = 33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);
document.writeln("<button onclick='condition()'>Conditional Test</button>")
function condition()
{
 x = confirm("Are you sure you want to proceed?");
 if(x)
 {
 document.writeln("You chose Okay!");
 }
 else
 {
 document.writeln("You chose Cancel!");
 }
}