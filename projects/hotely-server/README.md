<div align="center">
  <a href="https://github.com/bastean" target="_blank" rel="noopener noreferrer">
    <img width="" src="./images/readme/logo.png" alt="Hotely-Logo">
  </a>
</div>

---

> Hotely-Server API is based on REST, uses JSON in request bodies and responses, also uses standard HTTP response codes, authorization bearer tokens and verbs such as GET, POST, PUT and DELETE. It allows accessing a MongoDB deployment and performing CRUD operations through an ODM.

## Features

- **Endpoints**

  - Publics

    - Hotel Profile

      - Create

      - Confirm Email

      - Authenticate

      - Forgot Password

        - Update Password

  - Privates

    - Hotel Profile

      - Read and Update Profile

      - Update Password

    - Bookings

      - Create

      - Read All Bookings

      - Read, Update and Delete Booking

  - Invalid Route

- **Models**

  - Hotel

  - Booking

- **Routers**

- **Controllers**

- **Password-Hashing**

- **Authentication**

- **Email Sending**

## Tech Stack

- **Runtime Environment**

  - [Node.js](https://github.com/nodejs/node)
  - [Dotenv](https://github.com/motdotla/dotenv)

- **HTTP-Server**

  - [Express](https://github.com/expressjs/express)
  - [CORS](https://github.com/expressjs/cors)

- **Database**

  - [MongoDB](https://www.mongodb.com/docs/)

- **ODM**

  - [Mongoose](https://github.com/Automattic/mongoose)

- **Hashing**

  - [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)

- **Authentication**

  - [JSON Web Token](https://github.com/auth0/node-jsonwebtoken)

- **Email**

  - [Nodemailer](https://github.com/nodemailer/nodemailer)

- **Dev**

  - [nodemon](https://github.com/remy/nodemon)

## Environment Variables

Before running it locally, you must obtain the following values to initialize the required variables.

| Variable                                            | Value                                                                       | Description                                                                           |
| :-------------------------------------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `CLIENT_URL`                                        | [Hotely-Client](https://github.com/bastean/hotely-client)                   | **Required**. To whitelist CORS domains                                               |
| `MONGODB_URI`                                       | [MDB-URI](https://www.mongodb.com/docs/manual/reference/connection-string/) | **Required**. Connect to a MongoDB deployment                                         |
| `JWT_PRIVATE_KEY`                                   | [Keygen](https://randomkeygen.com/)                                         | **Required**. Signed a JWT using that Private Key                                     |
| `EMAIL_HOST` `EMAIL_PORT` `EMAIL_USER` `EMAIL_PASS` | [SMTP-Server](https://help.mailtrap.io/article/12-getting-started-guide)    | **Required**. For Nodemailer you can use Mailtrap for testing or your own SMTP server |

## Run Locally

Install required

- [Node.js/npm](https://nodejs.org/en/download)

Clone the repository

- HTTPS

  ```bash
  git clone https://github.com/bastean/hotely-server.git
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/hotely-server.git
  ```

Go to the repository directory

```bash
  cd hotely-server/
```

Install dev/Dependencies

```bash
  npm i
```

Add Environment Variables to `.env` file

- You must replace **"somevalue"** with your own values.

```bash
  echo $'CLIENT_URL=somevalue\nMONGODB_URI=somevalue\nJWT_PRIVATE_KEY=somevalue\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env
```

Start the server

```bash
  npm run dev
```

In the [Hotely-Client](https://github.com/bastean/hotely-client), add to `VITE_SERVER_URL`

```
  http://localhost:4000/api
```

**All-In-One**

- HTTPS

  ```bash
  git clone https://github.com/bastean/hotely-server.git; cd hotely-server/; npm i; echo $'CLIENT_URL=somevalue\nMONGODB_URI=somevalue\nJWT_PRIVATE_KEY=somevalue\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env; npm run dev;
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/hotely-server.git; cd hotely-server/; npm i; echo $'CLIENT_URL=somevalue\nMONGODB_URI=somevalue\nJWT_PRIVATE_KEY=somevalue\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env; npm run dev;
  ```

## API Reference

### Index

- Endpoints

  - Publics

    - Hotel

      - [Register Hotel](#register-hotel)

      - [Confirm Email](#confirm-email)

      - [Log In](#log-in)

      - [Forgot Password](#forgot-password)

      - [Password Reset](#password-reset)

  - Privates

    - Hotel

      - [Get Profile](#get-profile)

      - [Set Profile](#set-profile)

      - [Change Password](#change-password)

    - Booking

      - [Register](#register-booking)

      - [Get All](#get-all-bookings)

      - [Get](#get-booking)

      - [Set](#set-booking)

      - [Delete](#delete-booking)

  - [Invalid Route](#invalid-route)

- Configs

  - Path Variables

    - [Hotel](#hotel)

    - [Booking](#booking)

  - [Headers](#headers)

- Middleware Errors

  - [Verify Data](#verify-data)

  - [Verify Auth](#verify-auth)

### Register Hotel

- #### POST

  ```
  /hotel
  ```

  - **REQ - Body**

    ```json
    {
    	"name": "bastean",
    	"password": "Example321",
    	"email": "bastean@example.com",
    	"phone": "+1234567890",
    	"web": "example.com"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Successfully created. Please check your inbox"
      }
      ```

  - **Errors**

    - **(400) RES - Body**

      ```json
      {
      	"msg": "Email Already Registered"
      }
      ```

      ```json
      {
      	"msg": "Phone Already Registered"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

### Confirm Email

- #### GET

  ```
  /hotel/email-confirm/:emailToken
  ```

  - [Path Variables](#hotel)

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Email Confirmed Successfully"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Token Not Found"
      }
      ```

### Log In

- #### POST

  ```
  /hotel/login
  ```

  - **REQ - Body**

    ```json
    {
    	"email": "bastean@example.com",
    	"password": "Example321"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"jwtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3RlbElEIjoiNjJlOTZmMzI0ODU1YTEwMDQyODBmNGY1IiwiaWF0IjoxNjU5NDY4ODE0LCJleHAiOjE2NjIwNjA4MTR9.BzmqIItGUFX8RnyDlFW1bfhAQeoRPwy47JTfrScmnek"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Email Not Registered"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Email Not Confirmed. Please check your inbox"
      }
      ```

      ```json
      {
      	"msg": "Incorrect Password"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

### Forgot Password

- #### POST

  ```
  /hotel/forgot-password
  ```

  - **REQ - Body**

    ```json
    {
    	"email": "bastean@example.com"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Link sent. Please check your inbox"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Email Not Registered"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Email Not Confirmed. Please check your inbox"
      }
      ```

      ```json
      {
      	"msg": "Already sent. Please check your inbox"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

### Password Reset

- #### POST

  ```
  /hotel/forgot-password/:emailToken
  ```

  - [Path Variables](#hotel)

  - **REQ - Body**

    ```json
    {
    	"password": "Example321"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Password Changed Successfully"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Token Not Found"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

### Get Profile

- #### GET

  ```
  /hotel/profile
  ```

  - [Headers](#headers)

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"_id": "62e96f324855a1004280f4f5",
      	"name": "bastean",
      	"email": "bastean@example.com",
      	"phone": "+1234567890",
      	"web": "example.com",
      	"__v": 0
      }
      ```

  - **Errors**

    - **(403/404) [Verify Auth](#verify-auth)**

### Set Profile

- #### PUT

  ```
  /hotel/profile
  ```

  - [Headers](#headers)

  - **REQ - Body**

    ```json
    {
    	"name": "bastean",
    	"email": "bastean@example.com",
    	"phone": "+1234567890",
    	"web": "example.com"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Successfully Update"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Profile Not Found"
      }
      ```

    - **(400) RES - Body**

      ```json
      {
      	"msg": "Email Already Registered"
      }
      ```

      ```json
      {
      	"msg": "Phone Already Registered"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

    - **(403/404) [Verify Auth](#verify-auth)**

### Change Password

- #### PUT

  ```
  /hotel/change-password
  ```

  - [Headers](#headers)

  - **REQ - Body**

    ```json
    {
    	"password": "Example321",
    	"newPwd": "321Example"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Password Changed Successfully"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Profile Not Found"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Incorrect Password"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

    - **(403/404) [Verify Auth](#verify-auth)**

### Register Booking

- #### POST

  ```
  /booking
  ```

  - [Headers](#headers)

  - **REQ - Body**

    ```json
    {
    	"name": "bastean",
    	"lastname": "bastean",
    	"email": "bastean@example.com",
    	"phone": "+1234567890",
    	"checkIn": "2022-08-01T00:00:00.000Z",
    	"checkOut": "2022-08-07T00:00:00.000Z",
    	"room": "A-01",
    	"total": "$ 100"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"name": "bastean",
      	"lastname": "bastean",
      	"email": "bastean@example.com",
      	"phone": "+1234567890",
      	"checkIn": "2022-08-01T00:00:00.000Z",
      	"checkOut": "2022-08-07T00:00:00.000Z",
      	"room": "A-01",
      	"total": "$ 100",
      	"_id": "62e988084855a1004280f507",
      	"hotel": "62e96f324855a1004280f4f5",
      	"createdAt": "2022-08-01T00:00:00.000Z",
      	"updatedAt": "2022-08-01T00:00:00.000Z",
      	"__v": 0
      }
      ```

  - **Errors**

    - **(400) [Verify Data](#verify-data)**

    - **(403/404) [Verify Auth](#verify-auth)**

### Get All Bookings

- #### GET

  ```
  /booking
  ```

  - [Headers](#headers)

  - **Successfully**

    - **(200) RES - Body**

      ```json
      [
      	{
      		"_id": "62e988084855a1004280f501",
      		"name": "bastean",
      		"lastname": "bastean",
      		"email": "bastean@example.com",
      		"phone": "+1234567890",
      		"checkIn": "2022-08-01T00:00:00.000Z",
      		"checkOut": "2022-08-07T00:00:00.000Z",
      		"room": "A-01",
      		"total": "$ 100",
      		"hotel": "62e96f324855a1004280f4f5",
      		"createdAt": "2022-08-01T00:00:00.000Z",
      		"updatedAt": "2022-08-01T00:00:00.000Z",
      		"__v": 0
      	},
      	{
      		"_id": "62e988084855a1004280f502",
      		"name": "bastean",
      		"lastname": "bastean",
      		"email": "bastean@example02.com",
      		"phone": "+1234567890",
      		"checkIn": "2022-08-01T00:00:00.000Z",
      		"checkOut": "2022-08-07T00:00:00.000Z",
      		"room": "A-02",
      		"total": "$ 100",
      		"hotel": "62e96f324855a1004280f4f5",
      		"createdAt": "2022-08-01T00:00:00.000Z",
      		"updatedAt": "2022-08-01T00:00:00.000Z",
      		"__v": 0
      	}
      ]
      ```

  - **Errors**

    - **(403/404) [Verify Auth](#verify-auth)**

### Get Booking

- #### GET

  ```
  /booking/:bookingId
  ```

  - [Path Variables](#booking)

  - [Headers](#headers)

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"_id": "62e988084855a1004280f507",
      	"name": "bastean",
      	"lastname": "bastean",
      	"email": "bastean@example.com",
      	"phone": "+1234567890",
      	"checkIn": "2022-08-01T00:00:00.000Z",
      	"checkOut": "2022-08-07T00:00:00.000Z",
      	"room": "A-01",
      	"total": "$ 100",
      	"hotel": "62e96f324855a1004280f4f5",
      	"createdAt": "2022-08-01T00:00:00.000Z",
      	"updatedAt": "2022-08-01T00:00:00.000Z",
      	"__v": 0
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Booking Not Found"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Action Not Allowed"
      }
      ```

    - **(403/404) [Verify Auth](#verify-auth)**

### Set Booking

- #### PUT

  ```
  /booking/:bookingId
  ```

  - [Path Variables](#booking)

  - [Headers](#headers)

  - **REQ - Body**

    ```json
    {
    	"name": "bastean",
    	"lastname": "bastean",
    	"email": "bastean@example.com",
    	"phone": "+1234567890",
    	"checkIn": "2022-08-01T00:00:00.000Z",
    	"checkOut": "2022-08-07T00:00:00.000Z",
    	"room": "A-01",
    	"total": "$ 100"
    }
    ```

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"_id": "62e988084855a1004280f507",
      	"name": "bastean",
      	"lastname": "bastean",
      	"email": "bastean@example.com",
      	"phone": "+1234567890",
      	"checkIn": "2022-08-01T00:00:00.000Z",
      	"checkOut": "2022-08-07T00:00:00.000Z",
      	"room": "A-01",
      	"total": "$ 100",
      	"hotel": "62e96f324855a1004280f4f5",
      	"createdAt": "2022-08-01T00:00:00.000Z",
      	"updatedAt": "2022-08-01T00:00:00.000Z",
      	"__v": 0
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Booking Not Found"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Action Not Allowed"
      }
      ```

    - **(400) [Verify Data](#verify-data)**

    - **(403/404) [Verify Auth](#verify-auth)**

### Delete Booking

- #### DELETE

  ```
  /booking/:bookingId
  ```

  - [Path Variables](#booking)

  - [Headers](#headers)

  - **Successfully**

    - **(200) RES - Body**

      ```json
      {
      	"msg": "Booking Deleted Successfully"
      }
      ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Booking Not Found"
      }
      ```

    - **(403) RES - Body**

      ```json
      {
      	"msg": "Action Not Allowed"
      }
      ```

    - **(403/404) [Verify Auth](#verify-auth)**

### Invalid Route

- #### ALL

  ```
  /*
  ```

  - **Errors**

    - **(404) RES - Body**

      ```json
      {
      	"msg": "Invalid Route"
      }
      ```

### Configs

- #### Path Variables

  - #### Hotel

    | Variable     | Value                                | Description                         |
    | :----------- | :----------------------------------- | :---------------------------------- |
    | `emailToken` | 058b47ec-860a-4512-845b-e1e0156fa16c | Token value received in Email Inbox |

  - #### Booking

    | Variable    | Value                    | Description                                                      |
    | :---------- | :----------------------- | :--------------------------------------------------------------- |
    | `bookingId` | 62e988084855a1004280f507 | ObjectId value received in [Get All Bookings](#get-all-bookings) |

- #### Headers

  | Key             | Value            | Description                                 |
  | :-------------- | :--------------- | :------------------------------------------ |
  | `Authorization` | Bearer `JWToken` | JWToken value received in [Log In](#log-in) |

### Verify Data

- **Errors**

  - **(400) RES - Body**

    ```json
    {
    	"msg": "Empty Values"
    }
    ```

    ```json
    {
    	"msg": "Invalid Values"
    }
    ```

    ```json
    {
    	"msg": "Invalid Characters"
    }
    ```

    ```json
    {
    	"msg": "Invalid Password"
    }
    ```

    ```json
    {
    	"msg": "Invalid Email"
    }
    ```

### Verify Auth

- **Errors**

  - **(404) RES - Body**

    ```json
    {
    	"msg": "Token Not Found"
    }
    ```

    ```json
    {
    	"msg": "Profile Not Found"
    }
    ```

  - **(403) RES - Body**

    ```json
    {
    	"msg": "Token Not Valid"
    }
    ```

## License

- [MIT](./LICENSE)
