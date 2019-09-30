//The const value behaves like a let varible only
//it can not be reassigned
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
//document.writeln("<button onclick='condition()'>Conditional Test</button>")
//function condition()
//{
 //x = confirm("Are you sure you want to proceed?");
 //if(x)
 //{
 //document.writeln("You chose Okay!");
 //}
 //else
 //{
 //document.writeln("You chose Cancel!");
 //}
//}
//Display a prompt box which ask the user for her or his name,
//and output a message
user_name = window.prompt("Please enter your name", "Type your name here");
// var is varible, the x is the ID with the unique name of "Hello welcome"
var x = "Hello, Welcome ";
//The step adds var or x with the text user_name.
//the =welcome_message is combineing the var and text
welcome_message = x+user_name;
//This method writes HTML expressions or JS code
// to a document
document.write(welcome_message);
