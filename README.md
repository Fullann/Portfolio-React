# PortfolioV2

Welcome to PortfolioV2, a React-based personal portfolio website designed for showcasing the skills and projects of a computer professional. The site is **multilingual (i18n)**, **full responsive **, easily customizable, and can be configured through the `/src/config.json` file.

## Features

- **Multilingual Support (i18n):** The website supports multiple languages for a broader audience.

- **Project Showcase:** Display and organize all your projects easily. Projects are sortable by category.

- **Customization:** Easily configure the website using the `/src/config.json` file.

- **hCaptcha Integration:** Secure your site by configuring hCaptcha. Rename `.env.example` to `.env` and update the `REACT_APP_HCAPTCHA` variable.

- **Email Functionality:** Configure email services for personal use. Update the following variables in the `.env` file:
   ```env
   REACT_APP_MAIL_SERVICE=
   REACT_APP_MAIL_TEMPLATE=
   REACT_APP_MAIL_PUBLIC_KEY=
   ```
   Note: [emailJS](https://www.emailjs.com/) is recommended for its free service.

## Getting Started
To set up the project, follow these simple steps:

- Clone the repository:
```
  git clone https://github.com/Fullann/PortfolioV2.git
```
- Install dependencies:
```
npm install
```
- Start the development server:
```
npm start
```
Access the site at [http://localhost:3000](http://localhost:3000).
## Project Configuration
Customize the website easily using the /src/config.json file. Organize and showcase your projects, making them sortable by category. 
![main Page](/img-github/1.png "main page")
![project Page](/img-github/2.png "projects page")
![phone Page](/img-github/3.png "phone page")

## Dockerization
If you prefer to use Docker, follow these steps:

- Build the Docker container:
```
docker build -t portfolio .
```
- Run the Docker container:
```
docker run --name portfolio -p 3000:3000 portfolio
```
Access the site at [http://localhost:3000](http://localhost:3000).

## Contact
For any inquiries or issues, feel free to reach out.
