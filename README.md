# week-3-password-generator

## Description
This is a webpage which will generate a random and secure password using a series of promts. The series of prompts  will go through a few things which will be the amount of charcters the user would like and which characters they would like included such as "Uppercase", "Lowercase", "Numbers" and "Special" characters.

The prompts have been set up to have a few requirements and if the requiremnts are not fulfilled the application will cancel out and will require the user to try again. The two requirments that i have set are that the user has a password length set between 8 and 128 characters and that the user selects at least one character type set.

Once the user has completed all the promts and they have fulfilled the requirements the password is the generated with all of the random characters they have selected to the set legnth they have chosen.

## Problems and solutions 

One of the main issuses i ran into was when i was generating the password was it was including spaces and some of the commas which was not ideal. To fix the issue with the extra spaces i just had to simply go through the arrays and remove them as i had added them by mistake. To fix the commas problem i had to go into the "var password" which at the time was wrong and looked like the example below.

if(passwordUpper) {
avaliblecharacters.push(uppercase.concat(""));
}

To fix this I had to change the "concat" to "split" and add the comma into the quote marks. The split fixed this issue as it was adding everything into the array but spliting the commas out of it. 

## Image
![Image of the Password Generator](/Assets/PasswordGenDone.jpg)

## Link to Password Generator
https://adam-smart.github.io/week-3-password-generator/ 
## License
N/A