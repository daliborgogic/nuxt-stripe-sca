export default function (context, inject) {
  <% if (options.publishableKey) { %>
    if (typeof window !== 'undefined') {
      const stripePlugin = {
        import() {
          return window['Stripe'] && window['Stripe']('<%= options.publishableKey %>', {
            betas: ['payment_intent_beta_3']
          })
        }
      }
      
      inject('stripe', stripePlugin)
      context.app.stripe = stripePlugin
    }
  <% } %>
}