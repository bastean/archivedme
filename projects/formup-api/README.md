<div align="center">
  <a href="https://github.com/bastean" rel="noopener noreferrer" target="_blank">
    <img src="./doc/images/readme/logo-readme.png" alt="logo readme">
  </a>
</div>

---

> FormUp API allows you to verify the entries of a contact form and also the user response token provided by reCAPTCHA client-side integration into your site. Once verified, the contact information will be sent via email.

## Features

- **Validations**

  - Form Entries

    - Name

    - Lastname

    - Email

    - Number/t.me

    - Message

  - reCAPTCHA Token

- **CORS**

- **Routers**

- **Controllers**

- **Email Sending**

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

| Variable                                            | Value                                                                                       | Description                                                                                                            |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_URL`                                        | String                                                                                      | **Required**. Add to list of domains allowed by CORS                                                                   |
| `RECAPTCHA_PRIVATE_KEY`                             | [Private/Public Site Key](https://developers.google.com/recaptcha/intro#recaptcha-overview) | **Required**. Private Site Key for verifying client response and Public Site Key for reCAPTCHA client-side integration |
| `EMAIL_HOST` `EMAIL_PORT` `EMAIL_USER` `EMAIL_PASS` | [SMTP Server](https://help.mailtrap.io/article/12-getting-started-guide)                    | **Required**. You can use Mailtrap for testing or your own SMTP Server                                                 |
| `TO_EMAIL`                                          | String                                                                                      | **Required**. Email address to which contact information will be sent                                                  |

## Run

Install required

- [Node.js/npm](https://nodejs.org/en/download)

### Locally

Clone the repository

- HTTPS

  ```bash
  git clone https://github.com/bastean/formup-api.git
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/formup-api.git
  ```

Go to the repository directory

```bash
cd formup-api/
```

Install dev/Dependencies

```bash
npm i
```

Add Environment Variables to `.env` file

- You must replace **"somevalue"** with your own values.

```bash
echo $'CLIENT_URL=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue\n\nTO_EMAIL=somevalue' >> .env
```

Clear Bash History

```bash
history -cw
```

Start dev server

```bash
npm run dev
```

API base path URL on Server

```http
http://localhost:5172/api/v1
```

**All-In-One**

- HTTPS

  ```bash
  git clone https://github.com/bastean/formup-api.git; cd formup-api/; npm i; echo $'CLIENT_URL=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue\n\nTO_EMAIL=somevalue' >> .env; history -cw; npm run dev;
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/formup-api.git; cd formup-api/; npm i; echo $'CLIENT_URL=somevalue\n\nRECAPTCHA_PRIVATE_KEY=somevalue\n\nEMAIL_HOST=somevalue\nEMAIL_PORT=somevalue\nEMAIL_USER=somevalue\nEMAIL_PASS=somevalue\n\nTO_EMAIL=somevalue' >> .env; history -cw; npm run dev;
  ```

## API Reference

### Index

- Endpoints

  - Form

    - Publics

      - [Form Up](#form-up)

  - [Invalid Route](#invalid-route)

- Errors

  - Express

    - Middlewares

      - [Verify Data](#verify-data)

  - Validations

    - [reCAPTCHA](#recaptcha)

  - Utils

    - [Nodemailer](#nodemailer)

## Form Up

- ### POST

  ```http
  /form/up
  ```

  - **Request**

    - Body

      ```json
      {
      	"name": "bastean",
      	"lastname": "bastean",
      	"email": "bastean@example.com",
      	"number": "+1234567890",
      	"message": "Example Message",
      	"recaptchaToken": "00ANYoXqvI03P_WO1qXOHYrThd-ltX3jQ8HfQhDd5XT3jaSUe38ra9m9QF6yV8Example-"
      }
      ```

  - **Response**

    - Body

      - **Successfully**

        - **(200)**

          ```json
          {
          	"msg": "Successfully Sent"
          }
          ```

      - **Errors**

        - **(400)**

          - [Verify Data](#verify-data)

        - **(403)**

          - [reCAPTCHA](#recaptcha)

        - **(500)**

          - [Nodemailer](#nodemailer)

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
        	"msg": "Missing Properties"
        }
        ```

        ```json
        {
        	"msg": "Invalid reCAPTCHA"
        }
        ```

        ```json
        {
        	"msg": "Values length max. 200 characters"
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

## License

- [MIT](./LICENSE)
