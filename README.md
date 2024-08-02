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


