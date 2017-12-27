var chatBoxPosition = document.getElementById('chat-section');

// Projects Button Not Visible if it is not activated by the Chat
$("#projectsButton").click(function(){
    $("#projectsButton").hide("slow");
    chatBoxPosition.scrollIntoView({block: 'end',  behaviour: 'smooth'});
});


//Portfolio Options
$('#portfolio').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
