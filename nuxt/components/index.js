export const Basket = () => import('../..\\components\\Basket.vue' /* webpackChunkName: "components/basket" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Mounting = () => import('../..\\components\\Mounting.vue' /* webpackChunkName: "components/mounting" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const Panel = () => import('../..\\components\\Panel.vue' /* webpackChunkName: "components/panel" */).then(c => wrapFunctional(c.default || c))
export const Product = () => import('../..\\components\\Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const Products = () => import('../..\\components\\Products.vue' /* webpackChunkName: "components/products" */).then(c => wrapFunctional(c.default || c))
export const Total = () => import('../..\\components\\Total.vue' /* webpackChunkName: "components/total" */).then(c => wrapFunctional(c.default || c))
export const Viewed = () => import('../..\\components\\Viewed.vue' /* webpackChunkName: "components/viewed" */).then(c => wrapFunctional(c.default || c))
export const Vieweds = () => import('../..\\components\\Vieweds.vue' /* webpackChunkName: "components/vieweds" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
