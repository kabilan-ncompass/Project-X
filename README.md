# Project-x
Use github username in login page to get your repositories.


## How to run
```
# start server
npm start or npm run start:dev in development
```

## How to test
Install [Postman](https://www.getpostman.com/)


## API endpoints

HTTP route prefix : http://localhost:3000/

### API endpoints summary

### USER

Route      | Method | Description
-----------|--------|--------------------
/user/login     | post    | to get access token

### Repo

Route      | Method | Description
-----------|--------|--------------------
/post/getRepo  | GET    | read repo (Authentication needed)




#### POST http://localhost:3000/user/login

##### HTTP Request Body Example
```javascript
{
    "EMAIL" : "Narayan@gmail.com",
    "PASSWORD" : "Narayan"
}
```

##### HTTP Response Body Example
```javascript
{
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5hcmF5YW5AZ21haWwuY29tIiwiaWF0IjoxNjUzODg3NjExLCJleHAiOjE2NTM4ODgyMTF9.GdZBS5LbxPllp-osTSYz6CURZC3eH3a8p7kn0Hx18JE"
}
```

#### get http://localhost:3000/repo/getRepo


##### TOKEN 
 BEARER TOKEN in authorization header

##### HTTP Request Body Example
Repo details will be fetched after logingin


##### HTTP Response Body Example
```javascript
{
    {
    [
        {
            "post_id": 13,
            "title": "types of elements in html",
            "description": "inline,block",
            "tag": "HTML,CSS"
        }
    ]
}
}
```


