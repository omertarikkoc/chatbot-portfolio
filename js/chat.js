		// this is the most basic conversation JSON.
		var convo = {
		    "ice": { // default conversation block for the bot to start, this key is9 required.
		        "says": [ // you can have array of text bubbles here
		            "Hi, I'm Omer Tarik 👋 It is good to see you in my website!",
		            "<img src=\"https://scontent.fhou1-1.fna.fbcdn.net/v/t31.0-8/22528786_10214348103994243_7281425222001538778_o.jpg?oh=74e1176e28849b385c0812d5417d5561&oe=5ACA9756\"/>",
		            "Currently, I am seeking a transfer scholarship to a university as a Computer Science major in US.",
		            "Select your side to continue :)"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Support scholarsip", // this is the text label for one of the options
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
		            "🍌",
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
		            "Which side of me do you want to learn?"
		        ],
		        "reply": [ // this is an array of possible answers that user can pick. 3 or less options recommended.
		            {
		                "question": "Professional", // this is the text label for one of the options
		                "answer": "professional", // you can sent the user back to the original (first) conversation block
		            },
		            {
		                "question": "Social", // this is the text label for one of the options
		                "answer": "social", // you can sent the user back to the original (first) conversation block
		            },
		        ]
		    },
		    "professional": { // this is another conversation block, to which the chat bot can be sent (see above ^^)
		        "says": [ // you can have array of text bubbles here
		            "Perfect! 😊",
		            "You can have a look at my projects or my resume"
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
		            {
		                "question": "Resume", // this is the text label for one of the options
		                "answer": "resume", // you can sent the user back to the original (first) conversation block
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
            givemeBubbles.talk(convo, "projects"); // Continue conversation

            var portfolioPosition = document.getElementById("projects"); // Get the portfolio element
            portfolioPosition.scrollIntoView({block: 'end',  behaviour: 'smooth'}); // Scroll down to the element

            isProjectsChecked = true; // Change the flag to show the button
		    $('#projectsButton').show("slow");
		    // givemeBubbles.reply("projects");
            
		}