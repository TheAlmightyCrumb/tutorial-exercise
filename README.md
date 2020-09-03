# tutorial-exercise
Build Rest API that can create, retrieve, update, delete and find Tutorials by title with Nodejs, Express and Mongoose.

start with an Express web server. Next, add configuration for MongoDB database, create Tutorial model with Mongoose, write the controller. Then define routes for handling all CRUD operations (including custom finder).

Upload project to Github and Upload it to the following form https://forms.gle/W13c2L19snc14e7d8

Methods
GET

api/tutorials

get all Tutorials

GET

api/tutorials/:id

get Tutorial by id

POST

api/tutorials

add new Tutorial

PUT

api/tutorials/:id

update Tutorial by id

DELETE

api/tutorials/:id

remove Tutorial by id

DELETE

api/tutorials

remove all Tutorials

GET

api/tutorials/published

find all published Tutorials

GET

api/tutorials?title=[kw]

find all Tutorials which title contains 'kw'
