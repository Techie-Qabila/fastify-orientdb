'use strict'

const t = require('tap')
const test = t.test
const Fastify = require('fastify')
const fastifyOrientdb = require('./index')

const dbOpt = {
  host: 'localhost',
  port: 2424,
  username: 'admin',
  password: 'admin',
  name: 'GratefulDeadCocnerts'
}

test('fastify.db should exist', t => {
  t.plan(3)

  const fastify = Fastify()

  fastify.register(fastifyOrientdb, dbOpt, err => {
    t.error(err)
  })

  fastify.ready(err => {
    t.error(err)
    t.ok(fastify.db)

    fastify.close()
  })
})
