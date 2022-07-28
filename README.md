# sit725-2022-t2-prac2
2022 trimester 2 practical 2

Express JS is required to run this

Application can be run using: "node server.js", alternatively we can use "nodemon server.js" to automatically restart and run the application when the server script changes. 
This is done by adding the nodemon statement in a script called "start" to the package.json scripts and then running "npm run start". VS Code does also have the run & debug option.

A "get" method has been implemented to add 2 number together, this can be called from a brower using the url:
localhost:3030/addTwoNumber?n1=10&n2=15

A "post" method has been implement to add 2 number together, using postman, we can pass json in the body of the request and we will get the same reult.

A book database in json has been created. There are get and push functions.
The get function will allow for a price selection, so if "p" is specified then the all the books less than or equal to that price will be returned.
The post method will allow a new book to be added, provided that the book does not have a title which already exists.

The put method has been implemented to update the "author" or the "price" of the book. This put method uses a query string as input, but there is also code commented out which can use the body json title value.
The delete method has been implement to remove books by title. The title is passed in the body as json. It could be a query variable though, but I have used the body.