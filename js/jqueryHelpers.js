var chatBoxPosition = document.getElementById('chat-section');

// Projects Button Not Visible if it is not activated by the Chat
$("#projectsButton").click(function(){
    $("#projectsButton").hide("slow");
    chatBoxPosition.scrollIntoView({block: 'end',  behaviour: 'smooth'});
});

