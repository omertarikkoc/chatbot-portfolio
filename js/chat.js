		// this is the most basic conversation JSON.
		var convo = {
		    "ice": { // default conversation block for the bot to start, this key is9 required.
		        "says": [ // you can have array of text bubbles here
		            "Hi, I'm Omer Tarik 👋 It is good to see you in my website!",
		            "<img src=\".\/img\/omer.jpg\" \/>",
		            "Currently, I am seeking a transfer scholarship to a university as a Computer Science major in US.",
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Help you with the scholarship", // this is the text label for one of the options
		                "answer": "scholarship", // this is the reference for next block in this conversation (see below)
		            },
		            {
		                "question": "I want to learn more about you", // users can see this text and click it
		                "answer": "learn-more", // it will take them to the next conversation block
		            }
		        ]
		    },
		    "scholarship": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
					"It's been my dream to get a Computer Science degree ever since I came to the US.",
					"That's why I am doing a crowdfunding campaign in which you can donate any amount you want to help me pay my college tuition. ",
					"If you are a decision maker in any scholarship application that I have applied for please use this website as my innovative personal statement :)"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "I want to fund your campaign", // this is the text label for one of the options
		                "answer": "fundingFunction", // you can sent the user back to the original (first) conversation block
					},
					{
		                "question": "I want to learn more about you", // this is the text label for one of the options
		                "answer": "learn-more", // you can sent the user back to the original (first) conversation block
		            },
		        ]
			},

			"funding": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
					"Thank you so much!",
					"The site for the funding will be open shortly.",
					"If it is not open please <a href=\"https:\/\/www.gofundme.com\/omertarikkoc\" target=\"_blank\"> click here<\/a> to open."
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Start Over", // this is the text label for one of the options
		                "answer": "ice", // you can sent the user back to the original (first) conversation block
					},
		        ]
			},
			
		    "learn-more": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
		            "Great!",
		            "What do you want to know? "
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Projects", // this is the text label for one of the options
		                "answer": "projects", // you can sent the user back to the original (first) conversation block
		            },
		            {
		                "question": "Resume", // this is the text label for one of the options
		                "answer": "resume", // you can sent the user back to the original (first) conversation block
		            },
		        ]
			},
			
		    "projects": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
		            "Cool!",
		            "Check out my projects and come back again!"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "I am ready, show your projects!", // this is the text label for one of the options
		                "answer": "projectsFunction", // you can sent the user back to the original (first) conversation block
		            },
		        ]
			},
			
			"after-projects": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
		            "You have seen my projects!",
		            "What do you want to do next?"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Show me your resume!", // this is the text label for one of the options
		                "answer": "resume", // you can sent the user back to the original (first) conversation block
					},
					{
		                "question": "Help you with the scholarship", // this is the text label for one of the options
		                "answer": "scholarship", // you can sent the user back to the original (first) conversation block
		            },
		        ]
			},
			
			"resume": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
		            "Simply <a href=\".\/docs\/OmerTarikKoc_Resume_last.pdf\" target=\"_blank\"> click here<\/a> and download will start shortly.",
		            "What do you want to do next?"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "I want to see your projects", // this is the text label for one of the options
		                "answer": "projects", // you can sent the user back to the original (first) conversation block
					},
					{
		                "question": "Help you with the scholarship", // this is the text label for one of the options
		                "answer": "scholarship", // you can sent the user back to the original (first) conversation block
		            },
		        ]
		    },
		}

		// set up the chatbot script
		var givemeBubbles = new Bubbles(
		    document.getElementById('chat'), // attach chatbot to placeholder above ^^
		    "givemeBubbles" // you need to pass the name of the constructor variable that evokes Bubble function here
		);

		// pass JSON to your function and you're done!
		givemeBubbles.talk(convo);

        // variables for scrolling functionality
        var isProjectsChecked = false;
        var isResumeChecked = false;

		projectsFunction = function () {
            givemeBubbles.talk(convo, "after-projects"); // Continue conversation

            var portfolioPosition = document.getElementById("projects"); // Get the portfolio element
            portfolioPosition.scrollIntoView({block: 'end',  behaviour: 'smooth'}); // Scroll down to the element

            isProjectsChecked = true; // Change the flag to show the button
		    $('.projectsButton').show("slow");
		    // givemeBubbles.reply("projects");
            
		}

		fundingFunction = function () {
			givemeBubbles.talk(convo, "funding");
			setTimeout(function() {window.open("https://www.gofundme.com/omertarikkoc",'_blank');}, 5000)
		}