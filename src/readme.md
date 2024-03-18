This src would have 4 folders
1) controllers :  for writting major functionalities
2) DB : for writting how my data will be connected
3) middlewares : If there is some thing i want to do before the data goes to server (middleware is the code, which you want to run inbetween)

Example for middleware : user is requesting server for some data. but i as a backend developer, write a cookie in between user and server, this cookie will understand that who you are, and wheather you are the right person to give that data or not. and then i allow the request to move to server.

4) Models folder
5) routes
6) Utils : utility such as file uploading, email sending, token taking or giving. (It contains the functionalities which is used multiple times, so we write it one time seperatly in our folder called utils)
7) 
