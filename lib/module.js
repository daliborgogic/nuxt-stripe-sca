import { resolve } from 'path'

export default function module (moduleOptions) {
  const defaults = {
    defer: true,
    async: true,
    publishableKey: null,
    stripeAccount: null,
  }
  const options = Object.assign({}, defaults, this.options.stripe, moduleOptions)

  this.options.head.script.push({
    src: `//js.stripe.com/v3/`,
    defer: options.defer,
    async: options.async,
  })

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}