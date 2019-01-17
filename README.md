# Timestamp Microservice
A simple microservice that gives you a timestamp using ISO-8601 formats, or milliseconds.

## usage:

In the folder the project has been downloaded, execute
```
npm install
```

Then run the server:
```
node server/server
```

the server should be listening at port 3000. 
All requests should be done to this URL:
```
localhost:3000/api/timestamp/:date?
```
NOTE: 'date' is optional. if there is no given date, the server will return the current timestamp.

examples of usage:

```
localhost:3000/api/timestamp
localhost:3000/api/timestamp/2018-09-21 // ISO-8601 format
localhost:3000/api/timestamp/190000000 // milliseconds
```

this project is a challenge of the freeCodeCamp's curriculum. for more info, go to freecodecamp.org .
