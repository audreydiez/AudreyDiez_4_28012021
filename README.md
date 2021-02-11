<h1 align="center">Projet GameOn</h1>

<div align="center">
  
</div>
<div align="center">
  <strong>Créez une landing page avec Javascript</strong>
<div></div>
<br/>
</div>

<div align="center">
  <!-- Last Commit -->
  <a href="h#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/audreydiez/AudreyDiez_4_28012021?style=for-the-badge">     
  </a>
  <!-- W3C  -->
  <a href="#">
   <img alt="W3C Validation" src="https://img.shields.io/w3c-validation/default?style=for-the-badge&targetUrl=https%3A%2F%2Faudreydiez.github.io%2FAudreyDiez_4_28012021%2F%23">
  </a> 
</div>

<div align="center">
  <h3>
    <a href="https://www.audreydiez.com">
      My Website
    </a>
    <span> | </span>
    <a href="https://github.com/audreydiez">
      My Github profile
    </a> 
    <span> | </span>
    <a href="https://audreydiez.github.io/AudreyDiez_4_28012021/#">
      The GameOn project
    </a>    
  </h3>
</div>

## Features
- __Vanilla code:__ No Bootstrap, no jquery, no Js Framework
- __CSS:__ Vanilla CSS refactored with SCSS for maintainability
- __Javascript POO:__ Form validation use global object Formcheck
- __Responsive:__ built for Desktop, tablet and mobile
- __Webpack ready:__ Package with SASS, ESlint, Babel-loader for JS compiler/transpiler
- __Commented:__ Yes !

## Global Object 
```js
const formCheck = {
    global : false,
    inputs : {
        firstName : false,
        lastName : false,
        email : false,
        birthdate : false,
        gameOnParticipation : false,
        city : false,
        conditionsAccepted : false
    },
    messages : {
        firstName : "Votre prénom doit contenir au moins deux caractères.",
        lastName : "Votre nom doit contenir au moins deux caractères.",
        email : "Vous devez entrer un email valide.",
        birthdate : "Vous devez entrer une date de naissance",
        gameOnParticipation : "Si vous n'avez jamais participé, indiquez '0'.",
        city : "Vous devez choisir une option.",
        conditionsAccepted : "Vous devez accepter les termes et conditions"
    }
}
```

## Installation
For Running on your machine :

Run `npm install`


## Global Object
In `'webpack.config.js'`, use following script for start hot reload server, build and push in `'gh-pages'` branch.
```js
"scripts": {
    "dev": "webpack --mode development",
    "start": "webpack serve --open 'Chrome'",
    "build": "webpack build",
    "deploy": "gh-pages -d dist"
  },
```