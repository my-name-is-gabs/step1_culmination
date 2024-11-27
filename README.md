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

### ERD description
1. The reviewer set is set to TEXT variable where the objects will be stored as text by JSON.stringify
![image](https://github.com/user-attachments/assets/5676c1d9-5b5e-4a02-adbb-51e7489f549f)
