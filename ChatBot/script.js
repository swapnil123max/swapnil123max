function talk() {
var know={
    "Who are you":"Hello,my name is Swapnil Srivastava",
    "How are you":"awesome,How about you dear :)",
    "What can i do for you":"You can help in gaining persons experience",
    "Hi":"Greetings",
    "Where would you like to be in five years time?":"Lots of different places",
    "wow":"What�s something you like to do the old-fashioned way?",
    "Which common saying or phrase describes you?":"sort close to the other one",
    };
    var user=document.getElementById('userbox').value;
   
    document.getElementById('chatlog').innerHTML=user+"<br>";
    if(user in know){
        document.getElementById('chatlog').innerHTML=know[user]+"<br>";
    }
    else{
        document.getElementById('chatlog').innerHTML="Sorry,I didn't understand <br>"
    }
}
