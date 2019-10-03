var webmaps =
  [
    ["Democratic Primary Fundraising",
    "https://www.nytimes.com/interactive/2019/08/02/us/politics/2020-democratic-fundraising.html",
    "The map allows us to see where the candidates are getting there funding, this is significant because many of them have yet to break out of there own states or local areas. This application was made for political analyst who are interested in seeing a graphical representation of who is getting the most funding."
  ],
  ["Highly Detailed 2016 Election Map",
  "https://www.nytimes.com/interactive/2018/upshot/election-2016-voting-precinct-maps.html",
  "The propose of this map is to show the user how their home area voted in the 2016 presidential election. This allows us to see exactly how much each candidate took each county by. It could be used for spatial analysis of different voting patterns in the states that flipped."
  ]
];

function welcome()
  {
    let a = "Please enter your name.";
    let b = "Type your name here.";

//A prompt box is used to prompt users to imput a value before entering a page
    user_name = window.prompt(a,b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
  }


  function webmap_table()
  {
    document.write("<table width=100%>");
    for (var row=0; row < webmaps.length; row++)
    {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
      {
        if (column < 2){
          document.write("<td>" + webmaps[row][column] + "</td>");
        }
        else{
          document.write("</tr>");
          document.write("<tr>");
          document.write("<td colspan='2'>" + webmaps[row][column] + "<p></td>");
        }
      }
      document.write("</tr>");

    }
    document.write("</table>");
  }

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
//user_name = window.prompt("Please enter your name", "Type your name here");
// var is varible, the x is the ID with the unique name of "Hello welcome"
//var x = "Hello, Welcome ";
//The step adds var or x with the text user_name.
//the =welcome_message is combineing the var and text
//welcome_message = x+user_name;
//This method writes HTML expressions or JS code
// to a document
//document.write(welcome_message);
