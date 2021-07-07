# Tunts-Challenge
Application to read a google spreadsheet, get the necessary information, calculate and write results

[GitHub Directory](https://github.com/gabs-m/Tunts-Challenge)

[Spreadsheet](https://docs.google.com/spreadsheets/d/1_ARfixKCTYCLliZFI4nOM6HRO3gLbZvNdxUdUupy0B0/edit?usp=sharing)

### Programming knowledge used: JavaScript, NodeJs, Git

### Instructions

First you need to install [NodeJS](https://nodejs.org/en/download/).
Then, save this directory on your computer:

```bash
git clone "https://github.com/gabs-m/Tunts-Challenge.git"
```

Install all project files:

```bash
cd "Tunts-Challenge"
npm install
```

To utilize the API, an authentication key is needed. [Click here](https://developers.google.com/identity/protocols/oauth2/service-account) to learn more about it, and how to create one.

Move the .json key to the folder ```Tunts-Challenge/main``` and rename it to **key.json**

At the [sheet](https://docs.google.com/spreadsheets/d/1_ARfixKCTYCLliZFI4nOM6HRO3gLbZvNdxUdUupy0B0/edit?usp=sharing) link click on "Share" and add the e-mail available on the key.json file so it can be written on the sheet.

To execute the project localy on PC, open a command prompt window at the root folder of the project and execute the code, so you can follow on your sheet: 

```bash
npm run start
```
