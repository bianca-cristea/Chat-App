# Chat-App

Aplicatie de comunicare in timp real cu ajutorul MERN ( MongoDB, Express.js,React.js,Node.js) Stack

PREZENTARE GENERALA
- am folosit Tailwind CSS si componente Daisy UI pentru a conferi o interfata moderna si atragatoare
- securitatea si gestionarea utilizatorilor realizate prin JWT(JSON Web Token) si middleware de autorizare 
- comunicare in timp real, utilizand biblioteca Socket.lO, astfel, permitand comunicarea instantanee intre utilizatori si actualizarea in timp real a conversatiilor
- codul este scris intr-o maniera organizata si modularizata
- managementul starii aplicatiei este implementat, folosind 2 solutii moderne: React Context si Zustand,  asigurand un management eficient al fluxului de date si
informatii in aplicatiei

Caracteristici:
-comunicare in timp real
-online status in timp real
-sunet notificare primire mesaj
-design atractiv
-cod organizat
-trimitere mesaj: text,emoticoane,imagini
-sistem complet de autentificare cu jwt si middleware de autorizare
-comunicare in timp real cu Socket.IO library
-API-ul gestioneaza fiecare eroare si returneaza un mesaj corespunzator, care
 este afisat in interfata utilizatorilor
 
 Structura:
![Structura](https://github.com/user-attachments/assets/dcbef46a-6b32-407b-8648-751948270298)

 Instructiuni rulare proiect:
 1.Clonati proiectul
 2.in terminal scrieti comanda npm install
 3.creati in root .env file in care sa scrieti 
 JWT_SECRET
 MONGODB_URI
 NODE_ENV=development
 4.in root rulati npm run server
 5.in frontend rulati npm run dev
 
 

 Ghid de utilizare:
1.login and registration
1.1.login
-go to login page

![p1](https://github.com/user-attachments/assets/355d438a-f59c-485c-aae3-a89d869e5629)

-if you don't have an account yet click on "Don't have an account?" and you will be redirected to the registration page
-enter your email and password then click the "Login" button, if your credentials are correct, you will be redirected to the Home page

1.2 registration

![p2](https://github.com/user-attachments/assets/c8463a87-8c7c-40e8-8025-d4801b47d289)

-complete the form and click on the "Sign up" button
-in case you receive error messages, please follow them

![p3](https://github.com/user-attachments/assets/38faf144-d209-45e2-bd9d-e8013b77a3b1)

-if the data has been entered correctly you will be automatically redirected to the "Home" page

2.Home page
2.1 Conversations
-on the main page, on the left side, you will see the available conversations according to how many users have an account
-to open an existing conversation, click on its name in the conversation list

![p4](https://github.com/user-attachments/assets/3a62983e-aee8-44b8-9af4-cee70b8133e8)

2.2 User search
-at the top of the main page, you will find a search field
-enter the username of the person you want to search for
-click the search button
-this will be selected automatically

![p5](https://github.com/user-attachments/assets/659c5a65-b569-4fea-8670-f00f6aae24ee)

-if a person is online, a green bubble will appear at the top right as in the following image:

![p6](https://github.com/user-attachments/assets/98321510-4a75-47a5-999b-98a0c7078dea)

3.Conversations
3.1 Sending messages
-In a conversation use the input field to write a message
-click the send button on the right side
3.2 Viewing messages
-Sent and received messages will be displayed in the conversation with the most recent at the bottom
-When you receive a message you will hear a notification sound

![p7](https://github.com/user-attachments/assets/870ce741-fa9e-4e7a-9f36-b846c661e5af)

4.Logout
-to log out of your account, click on the bottom left button on the main page
 


