# fastify-orientdb

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Under the hood [orientdb](https://github.com/orientechnologies/orientjs) client is used, the options that you pass to `register` will be passed to the orientdb connection.

## Install
```
npm i fastify-orientdb --save
```
## Usage
Add it to you project with `register` and you are done!  
You can access the *Orientdb Connection* via `fastify.db`.
```js
const fastify = require('fastify')

fastify.register(require('fastify-orientdb'), {
  host: 'localhost',
  port: 2424,
  username: 'admin',
  password: 'admin',
  name: 'GratefulDeadCocnerts'
}, err => {
  if (err) throw err
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

## License

Licensed under [MIT](./LICENSE).