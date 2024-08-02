# Chat-App

Real-Time Communication Application Using the MERN (MongoDB, Express.js, React.js, Node.js) Stack

GENERAL OVERVIEW

- I utilized Tailwind CSS and Daisy UI components to create a modern and attractive interface.
- Security and user management are handled via JWT (JSON Web Token) and authorization middleware.
- Real-time communication is enabled using the Socket.IO library, allowing instantaneous interaction between users and real-time updates of conversations.
- The code is written in an organized and modular manner.
- Application state management is implemented using two modern solutions: React Context and Zustand, ensuring efficient data and information flow management within the application.

Features:
- Real-time communication
- Real-time online status
- Notification sound for received messages
- Attractive design
- Organized code
- Message sending: text, emoticons, images
- Complete authentication system with JWT and authorization middleware
- Real-time communication with Socket.IO library
- The API handles each error and returns a corresponding message, which is displayed in the user interface
 
 Structure:
![Structura](https://github.com/user-attachments/assets/dcbef46a-6b32-407b-8648-751948270298)

Instructions to Run the Project:
- Clone the project.
- In the terminal, run the command npm install.
- Create a .env file in the root directory with the following content:
---- JWT_SECRET
---- MONGODB_URI
---- NODE_ENV=development
- In the root directory, run `npm run server`.
- In the frontend directory, `run npm run dev`.

 
 

Guide:
1.login and registration
- 1.1.login
- go to login page

![p1](https://github.com/user-attachments/assets/355d438a-f59c-485c-aae3-a89d869e5629)

- if you don't have an account yet click on "Don't have an account?" and you will be redirected to the registration page
- enter your email and password then click the "Login" button, if your credentials are correct, you will be redirected to the Home page

1.2 registration

![p2](https://github.com/user-attachments/assets/c8463a87-8c7c-40e8-8025-d4801b47d289)

- complete the form and click on the "Sign up" button
- in case you receive error messages, please follow them

![p3](https://github.com/user-attachments/assets/38faf144-d209-45e2-bd9d-e8013b77a3b1)

- if the data has been entered correctly you will be automatically redirected to the "Home" page

2.Home page
- 2.1 Conversations
- on the main page, on the left side, you will see the available conversations according to how many users have an account
- to open an existing conversation, click on its name in the conversation list

![p4](https://github.com/user-attachments/assets/3a62983e-aee8-44b8-9af4-cee70b8133e8)

2.2 User search
- at the top of the main page, you will find a search field
- enter the username of the person you want to search for
- click the search button
- this will be selected automatically

![p5](https://github.com/user-attachments/assets/659c5a65-b569-4fea-8670-f00f6aae24ee)

- if a person is online, a green bubble will appear at the top right as in the following image:

![p6](https://github.com/user-attachments/assets/98321510-4a75-47a5-999b-98a0c7078dea)

3.Conversations
- 3.1 Sending messages
- In a conversation use the input field to write a message
- click the send button on the right side
- 3.2 Viewing messages
- Sent and received messages will be displayed in the conversation with the most recent at the bottom
- When you receive a message you will hear a notification sound

![p7](https://github.com/user-attachments/assets/870ce741-fa9e-4e7a-9f36-b846c661e5af)

4.Logout
- to log out of your account, click on the bottom left button on the main page
 


