# Project-x
Use github username in login page to get your repositories.

## Tech Stack
### Frontend
- [React](https://reactjs.org/)

### Backend
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)

### CRON
- [NodeJS](https://nodejs.org/)
- [Cron](https://www.npmjs.com/package/node-cron) - cron command-line utility is a job scheduler on Unix-like operating systems. Users who set up and maintain software environments use cron to schedule jobs, also known as cron jobs, to run periodically at fixed times, dates, or intervals.

## How to run Backend
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
    "username" : "uk0724",
    "password" : "*****"
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
            "id": "400062373",
            "username": "uk0724",
            "repo_name": "lab-cricpro-scoreboard"
        }
    ]
}
}
```
'

# SCREENSHOTS
## System Architecture
![](images/system.png)

## Login page
![Alt text](images/login.png)

## Login page if invalid credential are entered
![Alt text](images/login_error.png)


## DASHBOARD PAGE
![Alt text](images/dashboard.png)


## DASHBOARD video


https://user-images.githubusercontent.com/105187981/175877571-bd74bc38-6cd8-461e-b6e5-30c68ba60586.mp4


