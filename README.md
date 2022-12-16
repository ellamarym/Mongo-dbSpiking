# Mongo-dbSpiking
- install instructions
    https://www.mongodb.com/docs/manual/administration/install-community/
- Can be done globally or in selected repo
- To stop a mongod running as a background process, connect to the mongod using mongosh, and issue the shutdown command as needed.

# USING
- strong recommened using this video 
    https://www.youtube.com/watch?v=ofme2o29ngU&ab_channel=WebDevSimplified
    https://www.youtube.com/watch?v=fgTGADljAeg&ab_channel=WebDevSimplified
- to run: mongosh 
- will say test> 
    this represents your current db
- to create a new db > use <newname>
- uses collections instead of tables
    show collections 
- delete data base
    db.dropDatabase() 
- clear screen > cls
- if you try to access something that does not exist yet it will auto create it
- exit > to leave mongosh terminal

# USING WITH JS
- npm i express mongoose
    express : manages routing/requests etc
    mongoose : allows js to interact with mongoDb
- npm i -d dotenv nodemon
- scripts