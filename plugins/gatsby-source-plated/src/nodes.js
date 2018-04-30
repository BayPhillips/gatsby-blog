import _ from 'lodash'
import createNodeHelpers from 'gatsby-node-helpers'

// General node prefix
const TYPE_PREFIX = 'Plated'

// Node types
const MENU = 'Menu'
const RECIPE = 'Recipe'
const RECIPE_IMAGE = 'RecipeImage'
const RECIPE_TAG = 'RecipeTag'

// Create Gatsby node helpers.
const { 
  createNodeFactory, 
  generateNodeId, 
  generateTypeName 
} = createNodeHelpers({
  typePrefix: TYPE_PREFIX,
})

/**
 * MenuNode
 */
export const MenuNode = createNodeFactory(MENU)

/**
 * RecipeNode
 */
export const RecipeNode = createNodeFactory(RECIPE)

/**
 * RecipeImageNode
 */
export const RecipeImageNode = createNodeFactory(RECIPE_IMAGE)

/**
 * RecipeTagNode
 *
 */
export const RecipeTagNode = createNodeFactory(RECIPE_TAG)

// /**
//  * ProductNode
//  *
//  * Represents an individual item for sale in a Shopify store.
//  */
// export const ProductNode = createNodeFactory(
//   PRODUCT,
//   tap(node => {
//     if (node.variants) {
//       const { options } = node
//       const variants = node.variants.edges.map(edge => edge.node)

//       // Set children.
//       const productOptionNodeIds = options.map(option =>
//         generateNodeId(PRODUCT_OPTION, option.id),
//       )
//       const productVariantNodeIds = variants.map(variant =>
//         generateNodeId(PRODUCT_VARIANT, variant.id),
//       )

//       node.children = [...productVariantNodeIds, ...productOptionNodeIds]

//       delete node.variants
//       delete node.options

//       // Set product prices.
//       const variantPrices = variants
//         .map(variant => Number.parseFloat(variant.price))
//         .filter(Boolean)

//       node.minPrice = variantPrices.length ? Math.min(...variantPrices) : 0
//       node.maxPrice = variantPrices.length ? Math.max(...variantPrices) : 0
//     }
//   }),
// )

// /**
//  * ProductOptionNode
//  *
//  * Custom product property names.
//  */
// export const ProductOptionNode = createNodeFactory(PRODUCT_OPTION)

// /**
//  * ProductVariantNode
//  *
//  * Represents a different version of a product, such as differing sizes or
//  * differing colors.
//  */
// export const ProductVariantNode = createNodeFactory(
//   PRODUCT_VARIANT,
//   tap(node => (node.price = Number.parseFloat(node.price))),
// )

// /**
//  * ShopPolicyNode
//  *
//  * Policy that a merchant has configured for their store, such as their refund
//  * or privacy policy.
//  */
// export const ShopPolicyNode = createNodeFactory(SHOP_POLICY)