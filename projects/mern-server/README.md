<div align="center">
  <a href="https://github.com/bastean" rel="noopener noreferrer" target="_blank">
    <img src="./doc/images/readme/logo-readme.png" alt="logo readme">
  </a>
</div>

---

> MERN Server API is based on REST, uses JSON in request bodies and responses, also uses standard HTTP response codes, authorization bearer tokens and verbs such as GET, POST, PUT and DELETE. It allows accessing a MongoDB deployment and performing CRUD operations through an ODM.

## Features

- **Node.js**

  - Project & Package Structure

  - Environment Variables

  - Import Aliases & Directories

- **Express**

  - CORS Policy

  - Routers

  - Middlewares

  - Controllers

  - Response Compression

  - Rate Limiting

- **Mongoose**

  - MongoDB Connection

  - Schemas

  - Models

- **Bcrypt**

  - Password Hashing

- **JSON Web Token**

  - Sign

  - Verify

- **Nodemailer**

  - Transport

  - Mail

- **Axios**

  - Custom Instance

- **reCAPTCHA**

- **README Structure**

## Tech Stack

- **Runtime Environment**

  - [Node.js](https://github.com/nodejs/node)

- **Environment Variables**

  - [Dotenv](https://www.npmjs.com/package/dotenv)

- **Web Framework**

  - [Express](https://www.npmjs.com/package/express)

- **CORS Policy**

  - [CORS](https://www.npmjs.com/package/cors)

- **Response Compression**

  - [compression](https://www.npmjs.com/package/compression)

- **HTTP Headers**

  - [Helmet](https://www.npmjs.com/package/helmet)

- **Rate Limiting**

  - [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)

  - [Express Slow Down](https://www.npmjs.com/package/express-slow-down)

- **Database**

  - [MongoDB](https://www.mongodb.com/docs)

- **ODM**

  - [Mongoose](https://www.npmjs.com/package/mongoose)

- **Password Hashing**

  - [Bcrypt](https://www.npmjs.com/package/bcrypt)

- **Authentication**

  - [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)

- **Email**

  - [Nodemailer](https://www.npmjs.com/package/nodemailer)

- **Colors & Styles**

  - [Colors.js](https://www.npmjs.com/package/colors)

- **ASCII Art**

  - [FIGlet](https://www.npmjs.com/package/figlet)

- **HTTP Client**

  - [Axios](https://www.npmjs.com/package/axios)

- **Automatic Restart**

  - [nodemon](https://www.npmjs.com/package/nodemon)

## Environment Variables

:warning: Before running it, you must obtain the following values to initialize the required variables.

| Variable                                            | Value                                                                                       | Description                                                                                                                                                      |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_URL`                                        | [MERN Client](https://github.com/bastean/mern-client#locally)                               | **Required**. Add to list of domains allowed by CORS                                                                                                             |
| `MONGODB_URI`                                       | [MDB URI](https://www.mongodb.com/docs/manual/reference/connection-string/)                 | **Required**. Connect to a MongoDB deployment                                                                                                                    |
| `JWT_PRIVATE_KEY`                                   | [Keygen](https://randomkeygen.com/)                                                         | **Required**. Signed a JWT using that Private Key                                                                                                                |
| `RECAPTCHA_PRIVATE_KEY`                             | [Private/Public Site Key](https://developers.google.com/recaptcha/intro#recaptcha-overview) | **Required**. Private Site Key for verifying client response and Public Site Key for [MERN Client](https://github.com/bastean/mern-client#environment-variables) |
| `EMAIL_HOST` `EMAIL_PORT` `EMAIL_USER` `EMAIL_PASS` | [SMTP Server](https://help.mailtrap.io/article/12-getting-started-guide)                    | **Required**. You can use Mailtrap for testing or your own SMTP Server                                                                                           |

## Run

Install required

- [Node.js/npm](https://nodejs.org/en/download)

### Locally

Clone the repository

- HTTPS

  ```bash
  git clone https://github.com/bastean/mern-server.git
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/mern-server.git
  ```

Go to the repository directory

```bash
cd mern-server/
```

Install dev/Dependencies

```bash
npm i
```

Add Environment Variables to `.env` file

- You must replace **"somevalue"** with your own values.

```bash
echo $'CLIENT_URL=somevalue\n\nMONGODB_URI=somevalue\n\nJWT_PRIVATE_KEY=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env
```

Clear Bash History

```bash
history -cw
```

Start dev server

```bash
npm run dev
```

In the [MERN Client](https://github.com/bastean/mern-client#environment-variables), add to `VITE_SERVER_URL`

```http
http://localhost:5172/api/v1
```

**All-In-One**

- HTTPS

  ```bash
  git clone https://github.com/bastean/mern-server.git; cd mern-server/; npm i; echo $'CLIENT_URL=somevalue\n\nMONGODB_URI=somevalue\n\nJWT_PRIVATE_KEY=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env; history -cw; npm run dev;
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/mern-server.git; cd mern-server/; npm i; echo $'CLIENT_URL=somevalue\n\nMONGODB_URI=somevalue\n\nJWT_PRIVATE_KEY=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue' >> .env; history -cw; npm run dev;
  ```

## API Reference

### Index

- Endpoints

  - User

    - Publics

      - [Register](#register)

      - [Email Confirm](#email-confirm)

      - [Log In](#log-in)

      - [Forgot Password](#forgot-password)

      - [Reset Password](#reset-password)

    - Privates

      - [Get Profile](#get-profile)

      - [Set Profile](#set-profile)

      - [Change Password](#change-password)

      - [Delete Account](#delete-account)

  - [Invalid Route](#invalid-route)

- Errors

  - Express

    - Middlewares

      - [Verify Auth](#verify-auth)

      - [Verify Data](#verify-data)

  - Mongoose

    - Middlewares

      - [Save](#save)

      - [Find](#find)

    - Instance Methods

      - [Verify Password](#verify-password)

  - Validations

    - [reCAPTCHA](#recaptcha)

  - Utils

    - [Nodemailer](#nodemailer)

- Request Settings

  - Path Variables

    - [Email Token](#email-token)

  - Headers

    - [Authorization](#authorization)

## Register

- ### POST

  ```http
  /user
  ```

  - **Request**

    - Body

      ```json
      {
      	"name": "bastean",
      	"email": "bastean@example.com",
      	"password": "Example321",
      	"repeatPassword": "Example321",
      	"recaptchaToken": "00ANYoXqvI03P_WO1qXOHYrThd-ltX3jQ8HfQhDd5XT3jaSUe38ra9m9QF6yV8Example-"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Successfully created. Please check your inbox"
          }
          ```

      - **Errors**

        - **(400)**

          - [Verify Data](#verify-data)

        - **(403)**

          - [reCAPTCHA](#recaptcha)

        - **(400/500)**

          - [Save](#save)

        - **(500)**

          - [Nodemailer](#nodemailer)

## Email Confirm

- ### GET

  ```http
  /user/email-confirm/:emailToken
  ```

  - **Request**

    - Params

      - [Path Variables](#path-variables)

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Email Confirmed Successfully"
          }
          ```

      - **Errors**

        - **(404/403)**

          - [Find](#find)

        - **(400/500)**

          - [Save](#save)

## Log In

- ### POST

  ```http
  /user/login
  ```

  - **Request**

    - Body

      ```json
      {
      	"email": "bastean@example.com",
      	"password": "Example321"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"jwtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmY5NGFhYjA4ZWE3ZjJkNzRmM2VkNWIiLCJpYXQiOjE2NjA1MDQ5OTcsImV4cCI6MTY2MzA5Njk5N30.D03LdkBb26KWkJnKpZStpXNlA7SbdmiCyzPuMHKDSTE"
          }
          ```

      - **Errors**

        - **(400)**

          - [Verify Data](#verify-data)

        - **(404/403)**

          - [Find](#find)

        - **(403)**

          - [Verify Password](#verify-password)

## Forgot Password

- ### POST

  ```http
  /user/forgot-password
  ```

  - **Request**

    - Body

      ```json
      {
      	"email": "bastean@example.com",
      	"recaptchaToken": "00ANYoXqvI03P_WO1qXOHYrThd-ltX3jQ8HfQhDd5XT3jaSUe38ra9m9QF6yV8Example-"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Link sent. Please check your inbox"
          }
          ```

      - **Errors**

        - **(400)**

          - [Verify Data](#verify-data)

        - **(403)**

          - [reCAPTCHA](#recaptcha)

        - **(404/403)**

          - [Find](#find)

        - **(400/500)**

          - [Save](#save)

        - **(500)**

          - [Nodemailer](#nodemailer)

## Reset Password

- ### POST

  ```http
  /user/forgot-password/:emailToken
  ```

  - **Request**

    - **Params**

      - [Path Variables](#path-variables)

    - **Body**

      ```json
      {
      	"password": "Example321",
      	"repeatPassword": "Example321"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Password Reset Successfully"
          }
          ```

      - **Errors**

        - **(400)**

          - [Verify Data](#verify-data)

        - **(404/403)**

          - [Find](#find)

        - **(400/500)**

          - [Save](#save)

## Get Profile

- ### GET

  ```http
  /user/account/profile
  ```

  - **Request Headers**

    - [Authorization](#authorization)

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"name": "bastean",
          	"email": "bastean@example.com"
          }
          ```

      - **Errors**

        - **(404/403)**

          - [Verify Auth](#verify-auth)

## Set Profile

- ### PUT

  ```http
  /user/account/profile
  ```

  - **Request**

    - **Headers**

      - [Authorization](#authorization)

    - **Body**

      ```json
      {
      	"name": "bastean",
      	"email": "bastean@example.com"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Successfully Update"
          }
          ```

      - **Errors**

        - **(404/403)**

          - [Verify Auth](#verify-auth)

        - **(400)**

          - [Verify Data](#verify-data)

        - **(400/500)**

          - [Save](#save)

## Change Password

- ### PUT

  ```http
  /user/account/change-password
  ```

  - **Request**

    - **Headers**

      - [Authorization](#authorization)

    - **Body**

      ```json
      {
      	"password": "Example321",
      	"newPassword": "321Example",
      	"repeatPassword": "321Example"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Password Changed Successfully"
          }
          ```

      - **Errors**

        - **(404/403)**

          - [Verify Auth](#verify-auth)

        - **(400)**

          - [Verify Data](#verify-data)

        - **(403)**

          - [Verify Password](#verify-password)

        - **(400/500)**

          - [Save](#save)

## Delete Account

- ### DELETE

  ```http
  /user/account/delete
  ```

  - **Request**

    - **Headers**

      - [Authorization](#authorization)

    - **Body**

      ```json
      {
      	"password": "Example321"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Account Deleted Successfully"
          }
          ```

      - **Errors**

        - **(404/403)**

          - [Verify Auth](#verify-auth)

        - **(400)**

          - [Verify Data](#verify-data)

        - **(403)**

          - [Verify Password](#verify-password)

## Invalid Route

- ### ALL

  ```http
  /all-undefined
  ```

  - **Response**

    - Body

      - **Errors**

        - **(404)**

          ```json
          {
          	"msg": "Invalid Route"
          }
          ```

## Verify Auth

- **Response**

  - Body

    - **Errors**

      - **(404)**

        ```json
        {
        	"msg": "Bearer Token Not Found"
        }
        ```

      - **(403)**

        ```json
        {
        	"msg": "Invalid Token"
        }
        ```

      - **(404/403)**

        - [Find](#find)

## Verify Data

- **Response**

  - Body

    - **Errors**

      - **(400)**

        ```json
        {
        	"msg": "Empty Object"
        }
        ```

        ```json
        {
        	"msg": "Invalid Properties"
        }
        ```

        ```json
        {
        	"msg": "Empty/Blank Values"
        }
        ```

        ```json
        {
        	"msg": "Invalid reCAPTCHA"
        }
        ```

        ```json
        {
        	"msg": "Values length max. 50 characters"
        }
        ```

        ```json
        {
        	"msg": "Invalid Characters"
        }
        ```

        ```json
        {
        	"msg": "Invalid Email"
        }
        ```

        ```json
        {
        	"msg": "Password length min. 8 characters"
        }
        ```

        ```json
        {
        	"msg": "Passwords do not match"
        }
        ```

## Save

- **Response**

  - Body

    - **Errors**

      - **(400)**

        ```json
        {
        	"msg": "Email Already Registered"
        }
        ```

      - **(400)**

        ```json
        {
        	"msg": "Required: (Missing Properties...)"
        }
        ```

      - **(500)**

        ```json
        {
        	"msg": "Save Error"
        }
        ```

## Find

- **Response**

  - Body

    - **Errors**

      - **(404)**

        ```json
        {
        	"msg": "User Not Found"
        }
        ```

      - **(403)**

        ```json
        {
        	"msg": "Email Not Confirmed. Please check your inbox"
        }
        ```

## Verify Password

- **Response**

  - Body

    - **Errors**

      - **(403)**

        ```json
        {
        	"msg": "Incorrect Password"
        }
        ```

## reCAPTCHA

- **Response**

  - Body

    - **Errors**

      - **(403)**

        ```json
        {
        	"msg": "Unsuccessfully reCAPTCHA"
        }
        ```

## Nodemailer

- **Response**

  - Body

    - **Errors**

      - **(500)**

        ```json
        {
        	"msg": "Unsuccessfully. Please try again"
        }
        ```

## Request Settings

- #### Path Variables

  - #### Email Token

    | Key          | Value                                | Description                             |
    | :----------- | :----------------------------------- | :-------------------------------------- |
    | `emailToken` | xxxxxxxx-xxxx-4xxx-Nxxx-xxxxxxxxxxxx | _UUID v4_ value received in Email Inbox |

- #### Headers

  - #### Authorization

    | Key             | Value        | Description                                   |
    | :-------------- | :----------- | :-------------------------------------------- |
    | `Authorization` | Bearer `JWT` | _jwtoken_ value received in [Log In](#log-in) |

## License

- [MIT](./LICENSE)
