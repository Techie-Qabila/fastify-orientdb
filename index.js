'use strict'

const fp = require('fastify-plugin')
const ODatabase = require('orientjs').ODatabase

function fastifyOrientdb (fastify, options, next) {
  const database = new ODatabase(options)
  database
  .open()
  .then(db => {
    fastify
    .decorate('db', db)
    .addHook('onClose', close)
    next()
  })
  .catch(err => {
    next(err)
  })
}

function close (fastify, done) {
  fastify
    .db
    .close()
    .finally(() => {
      done()
    })
}

module.exports = fp(fastifyOrientdb, '>=0.13.1')
