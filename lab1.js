// an object of type UserException to catch the exceptions
function UserException(message)
{
	this.message = message;
	this.name = "UserException"; 
}

//to determine the whether the parameters passed are numbers and are finite
function isNumber(n)
{
	return !isNaN(n) && isFinite(n);
}


function sumOfSquares(num1, num2, num3)
{
	if(isNumber(num1) && isNumber(num2) && isNumber(num3))
	{
	return num1*num1 + num2*num2 + num3*num3
	}
	else
	{
       throw new UserException ("The value entered is not a number. Please enter a valid number");
	}
}
console.log("The sum of squares of three numbers is:" +sumOfSquares(5,3,10));


function sayHelloTo(firstName, lastName, title)
{
   if(isNaN(firstName) && isNaN(lastName) && isNaN(title)) 
   {
	   if(firstName && lastName && title)
	   {
         console.log("Hello," +title+""+firstName+" "+lastName+"!" +"Have a good evening!");
	   }
	  if(firstName && lastName && !title)
	  {
		 console.log("Hello," +firstName+ +lastName+"." +"I hope you have are having a good day!");
	  }
	  if(firstName && !lastName && !title)
	  {
		 console.log("Hello," +firstName+"!");
	  }
	  if(!firstName)
	  {
		  throw new UserException("Firstname is required!!! please enter the firstName");
	  }
   }
   else
   {
	   throw new UserException("Name cannot be a number or an integer");
   }

}
console.log(sayHelloTo("Moulya", "SomaSundara","Miss"));


function cupsOfCoffee(howManyCups)
{
     if (howManyCups != null)
	{
	 if(isNumber(howManyCups))
	{
      if(howManyCups > 0) 
	  {
		  for(var num = howManyCups; num>0; num--)
		  {
			  if (num ==1)
			  {
				  console.log("1 cup of coffee on the desk! 1 cup of coffee!");
				  console.log("Pick it up, drink it up, no more coffee left on the desk!");
			  }
			  else 
			  {
                  console.log(num+ "cups of coffee on the desk!" +num+"cups of coffee!");
				   if((num-1) == 1)
				     {
                       console.log("Pick one up, drink the cup, 1 cup of coffee on the desk!");
				     }
				   else{
                           console.log("Pick one up, drink the cup," +(num-1)+"cups of coffee on the desk!");
				       }
			  }
		  }
		 
	    }
	   else
		  {
		    throw new UserException("Number of cups should be greater than zero");	  
		  }
	}
	else
	{
            throw new UserException("Enter a number greater than zero, characters or special characters not allowed");
	}
	}
	else
	{
		throw new UserException("Number should not be null");
	}
	
 }
 console.log(cupsOfCoffee(5));


 function occurrencesOfSubstring(fullString,substring)
{
	if(isNaN(fullString))
	{
		if(fullString.length>=substring.length)
		{
			var occurrence = 0;
			for(var count = 0;count<=(fullString.length-substring.length);count++)
			{
				var suboffull = fullString.substring(count,substring.length+count);
				
				if(suboffull == substring)
				{
					occurrence++;
				}
			}
			return occurrence;
		}
		else
		{
			return 0;
		}
	}
	else{
		throw new UserException('Full String cannot be number or null');
	}
}
console.log("The count of occurrence of the substring is:" +occurrencesOfSubstring("Helllllllo, class!" , "ll"));


function randomizeSentences(paragraph)
{
  var finalString="";
   //regex
	var sentences = paragraph.split(/[.|?|!]+/g);
	 for(var count = 0;count<sentences.length;count++)
	{
		if(sentences[count].length>0)
		{
			sentences[count] = paragraph.substring(paragraph.search(sentences[count]),paragraph.search(sentences[count])+sentences[count].length+1).trimLeft();
			paragraph = paragraph.replace(sentences[count],'');
			
		}
		else{
			sentences.splice(count,1);
		}
	}

	
	while(sentences.length>0)
	{
		var index = Math.floor(Math.random() * (sentences.length));
		finalString= finalString+sentences[index]+' ';
		sentences.splice(index,1);
	}
	return finalString.trimRight();  
}
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

console.log(randomizeSentences(paragraph));