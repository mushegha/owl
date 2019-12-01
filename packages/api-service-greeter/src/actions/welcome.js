const params = {
  name: 'string'
}

function handler (ctx) {
  const { name } = ctx.params

  return `Welcome, ${name}`
}

module.exports = {
  params,
  handler
}
