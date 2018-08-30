var database = [
    {
        username: "slofton",
        password: "some123",
    }
];

var newsfeed = [
    {
        username: "macz",
        timeline: "Chillin at the house",
    },
    
    {
        username: "mikeh",
        timeline: "chillin' with Roblox",
    },
    {
        username: "mama20",
        timeline: "Watching the kids",
    },
    ];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user,pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    }else {
        alert("Sorry, worng username and password!");
        }
}