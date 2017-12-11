// THE LOGIN WILL AUTOMATICALLY RECOGNIZE THE USER AS STUDENT OR ADMIN
	// DATA FOR USERS
	// Assign and store users and password in an array of objects
	var uLogin = 
	[
	{user: "John Smith", password: "UT_Smith"},
    //{user: "Mai-Anh Ha", password: "UT_Ha"},
    //{user: "Sofia Shubert", password: "UT_Shubert"},
    //{user: "Logan Zipkes", password: "UT_Zipkes"},
	//{user: "Matthew McClelland", password: "UT_McClelland"},
	//{user: "Will He", password: "UT_He"},
	//{user: "Nina Ignatchenko", password: "UT_Ignatchenko"},
	];
	
	//
	
	// DATA FOR ADMIN, only one
	// Assign and store admin and password in an array of object
	// There is an array for this one so it is easy to add more admins, if necessary
	var aLogin = 
	[{user: "Stephany Coffman-Wolph", password: "UT_Coffman-Wolph"}];
	
	//console.log("Admin is " + aLogin[0].user + ". Password is " + aLogin[0].password);
	
	
	//
	
	// CHECK IF USER IS VALID
	function isValidUser()
	{
		// get the user input form HTML
		var username = document.getElementById("user").value;
		var password = document.getElementById("pswrd").value;
		
		// USER CHECK
		// if the username input is in uLogin, 
		// then check to see if the password input corresponds to the valid username in the set data
		for (var i=0; i<uLogin.length; i++)
		{
			// check to see if the user exists
			if (username == uLogin[i].user)
			{
				console.log("WELCOME USER");
				// if the user exists, check to see if the password is correct
				if (password == uLogin[i].password)
				{
					// if the password is correct, check to see if user agreed to the terms & conditions
					if (document.getElementById("checkTerms").checked)
					{
						// TAKE TO NEXT PAGE
						window.location.href = "Page 2 - Student.html";
						console.log("CORRECT USER PASSWORD");
						console.log("USER AGREED TO TERMS");
					}
					// if the password is correct but the user does not agree to the terms & conditions
					else
					{
						window.alert("You must agree to the terms & conditions to log in!");
						console.log("CORRECT USER PASSWORD");
						console.log("USER HAS NOT AGREED TO TERMS");
					}
				}
				// if the password is wrong, alert the user
				else
				{
					window.alert("Invalid User Password!");
					console.log("WRONG USER PASSWORD");
				}
			}
			// if the user doesn't exist
			// ISSUE with this because it would notify multiple times until the user is found 
			else 
			{
				// window.alert("Invalid User!");
				console.log("INVALID STUDENT");
			}
		}
		
		//
		
		// ADMIN CHECK
		// if the username input is in aLogin, 
		// then check to see if the password input corresponds to the valid username in the set data
		for (var j=0; j<aLogin.length; j++)
		{
			// check to see if the admin exists
			if (username == aLogin[j].user)
			{
				console.log("WELCOME ADMIN");
				// if the admin exists, check to see if the password is correct
				if (password == aLogin[j].password)
				{
					// if the password is correct, check to see if admin agreed to the terms & conditions
					if (document.getElementById("checkTerms").checked)
					{
						// TAKE TO NEXT PAGE
						window.location.href = "Page 2 - Admin.html";
						console.log("CORRECT ADMIN PASSWORD");
						console.log("ADMIN AGREED TO TERMS");
					}
					// if the password is correct but the admin does not agree to the terms & conditions
					else
					{
						window.alert("You must agree to the terms & conditions in order to log in!");
						console.log("CORRECT ADMIN PASSWORD");
						console.log("ADMIN HAS NOT AGREED TO TERMS");
					}
				}
				// if the password is wrong, alert the admin
				else
				{
					window.alert("Invalid Admin Password!");
					console.log("WRONG ADMIN PASSWORD");
				}
			}
			// if the admin doesn't exist
			else 
			{
				// window.alert("Invalid Admin!");
				console.log("INVALID ADMIN");
			}
		}
	}