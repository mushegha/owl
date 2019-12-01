const { ServiceBroker } = require('moleculer')

const schema = require('..')

const TRANSPORTER = 'TCP'

const broker = new ServiceBroker({
  transporter: TRANSPORTER
})

broker.createService(schema)

broker.start()
