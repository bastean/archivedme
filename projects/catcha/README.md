<div align="center">
  <a href="https://github.com/bastean" rel="noopener noreferrer" target="_blank">
    <img src="./doc/images/readme/logo-readme.png" alt="logo readme">
  </a>
</div>

---

> Simple Client-side integration of reCAPTCHA v2 to obtain response tokens for testing purposes.

## Features

- **PWA Support**

- **Mobile-Friendly**

## Tech Stack

- **Runtime Environment**

  - [Node.js](https://github.com/nodejs/node)

- **Build**

  - [Vite](https://www.npmjs.com/package/vite)

- **UI**

  - [React](https://www.npmjs.com/package/react)

- **Router**

  - [React Router](https://www.npmjs.com/package/react-router-dom)

- **Style**

  - [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)

  - [Prettier plugin for Tailwind CSS](https://www.npmjs.com/package/prettier-plugin-tailwindcss)

  - [PostCSS](https://www.npmjs.com/package/postcss)

  - [Autoprefixer](https://www.npmjs.com/package/autoprefixer)

- **reCAPTCHA**

  - [React Google reCAPTCHA](https://www.npmjs.com/package/react-google-recaptcha)

## Environment Variables

:warning: Before running it, you must obtain the following values to initialize the required variables.

| Variable                    | Value                                                                                       | Description                                                                                                                                                                                                                                                                  |
| :-------------------------- | :------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                             |
| `VITE_RECAPTCHA_PUBLIC_KEY` | [Private/Public Site Key](https://developers.google.com/recaptcha/intro#recaptcha-overview) | **Required**. Public Site Key for [React Google reCAPTCHA](https://www.npmjs.com/package/react-google-recaptcha) and Private Site Key for Server-side validation. In Domains, you have to add ["localhost"](https://developers.google.com/recaptcha/docs/domain_validation). |

## Run

Install required

- [Node.js/npm](https://nodejs.org/en/download)

### Locally

Clone the repository

- HTTPS

  ```bash
  git clone https://github.com/bastean/catcha.git
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/catcha.git
  ```

Go to the repository directory

```bash
cd catcha/
```

Install dev/Dependencies

```bash
npm i
```

Add Environment Variables to `.env` file

- You must replace **"somevalue"** with your own values.

```bash
echo $'VITE_RECAPTCHA_PUBLIC_KEY=somevalue' >> .env
```

Clear Bash History

```bash
history -cw
```

Start dev server

```bash
npm run dev
```

In the browser, go to

```http
http://localhost:5173
```

**All-In-One**

- HTTPS

  ```bash
  git clone https://github.com/bastean/catcha.git; cd catcha/; npm i; echo $'VITE_RECAPTCHA_PUBLIC_KEY=somevalue' >> .env; history -cw; npm run dev;
  ```

- SSH

  ```bash
  git clone git@github.com:bastean/catcha.git; cd catcha/; npm i; echo $'VITE_RECAPTCHA_PUBLIC_KEY=somevalue' >> .env; history -cw; npm run dev;
  ```

## Screenshots

<div align="center">
    <h3>Desktop</h3>
	<img
		src="./doc/images/readme/desktop-public-home.png"
		alt="desktop public home"
	/>
</div>

<div align="center">
    <h3>Mobile</h3>
	<img
		src="./doc/images/readme/mobile-public-home.png"
		alt="mobile public home"
	/>
</div>

## License

- [MIT](./LICENSE)
