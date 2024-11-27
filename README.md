# Planning my culmination

## Title of web app: **Louder**

### Description

This web app is a reviewer where the user will tell the answer through their mics. They also have the option to type the answer if they don't want to say the answer.

### Features

1. The app must have an authentication

   - The registration must have these fields:
     - first name (isSingleTextValid)
     - last name (isSingleTextValid)
     - email (isEmailValid)
     - password (passwordValidation: must contain at least 8 characters)
   - Login forms only contain the email and password

2. The user can open the reviewer they created and list all the terms and terminologies in a card view.
3. Inside the reviewer, is a back/close button and a "Test yourself" button.
4. Once the user clicks the "Test yourself" button, the quiz will start. It does not have a time limit.
5. The user has the choice to surrender. If they choose to surrender an alert message will pop up that contains this line: "Thank you for playing", and then the user shall now leave the game by redirecting to the main page. 
6. If the user proceeds and finishes the game, an overall score shall appear; if there are mistakes, it will be shown as well. It also has two choices: "Exit" and "Play again"
7. If the player chooses "Exit" it will go back to the home page and if the player clicks "Play again" it will start over.
8. The card contains the definition of the term.
9. The textbox border color changes depending on the answer of the player. The default is no color. If the player types or says the correct answer the border will change to green, else it will change to red.
10. The textbox has an enter button beside it so if the user types the answer they can click it or just press space or enter.
11. Try to use speech synthesis to read the definition.



### ERD description
Initial ERD:
![image](https://github.com/user-attachments/assets/a086a156-c368-4ef6-b199-4b889b64e842)

1. The reviewer set is set to TEXT variable where the objects will be stored as text by JSON.stringify
![image](https://github.com/user-attachments/assets/5676c1d9-5b5e-4a02-adbb-51e7489f549f)


