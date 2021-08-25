<h1 align="center">
    CRUD TypeORM Node.js Example
</h1>

<p align="center">
  <a href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features-e-tecnologias">Features and Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licence</a>
</p>

## 💻 Project

A simple CRUD implementation with TypeORM in Node.js. API sever implemented with Express.
<br>

Base URL: `http://localhost:3333`


#### CREATE
`POST:  /user`<br>
`{ "name": "foo" }`
<br>

#### READ
`GET:  /user` - All<br>
`GET:  /user/1` - Specific
<br>

#### UPDATE
`PUT:  /user`<br>
`{ "id": 1 "name": "foo bar" } `
<br>

#### DELETE
`DELETE:  user/`<br>
`{ "id": 1 } `
<br>


## 🚀 Features and Technologies

[TypeORM](https://typeorm.io/)
<br>
[Node.js](https://nodejs.org/en/docs/)
<br>
[Express](https://expressjs.com)

## 🤔 How to contribute

- Create a fork from this repository;
- Make a branch and your feature: `git checkout -b my-feature`;
- Do a commit with yout implementations: `git commit -m 'feat: my new feature'`;
- Push your branch: `git push origin my-feature`.
- Create a pull request [here](https://github.com/SidiBecker/typeorm-nodejs-crud/pulls)".

## 📝 Licence

This project is under MIT License. Se the [LICENSE](LICENSE) file for more informations
