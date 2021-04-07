import { createSlice, current } from '@reduxjs/toolkit';
// https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
function productsIncludeSize(availableSizes, sizeFilter) {
  const intersection = availableSizes.filter(value => sizeFilter.includes(value))
  return intersection.length
}

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0,
    allProducts: [],
    products: [],
    cart: [],
    filteredSizes: [],
    cartVisible: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      // keep all products before client filter
      state.allProducts = action.payload
      // return {...state, products: action.payload}
    },
    addToCart: (state, action) => {
      // find the index if the product is in the cart
      const currentProduct = action.payload
      const index = state.cart.findIndex(product => product.id === currentProduct.id)
      const productInCart = index !== -1
      if (productInCart) {
        // in cart
        // update quantity
        state.cart[index].quantity++
      } else {
        // add item to cart
        const productToBeAdded = {...currentProduct, quantity: 1}
        state.cart.push(productToBeAdded)
      }

      // // Cannot add property quantity, object is not extensible
      // const incomingProduct = {...action.payload, quantity: 1}
      // const isInCart = state.cart.find(product => product.id === incomingProduct.id)
      // if (!isInCart) {
      //   state.cart.push(incomingProduct)
      // } else {
      //   // already in cart ????
      //   const cartIndex = state.cart.findIndex(product => product.id === incomingProduct.id)
      //   const currentProduct = state.cart[cartIndex]
      //   currentProduct.quantity++
      // }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.cart = state.cart.filter(product => product.id !== productId)
    },
    incrementQuantity: (state, action) => {
      // const index = state.cart.findIndex(p => p.id === action.payload)
      const index = action.payload
      state.cart[index].quantity++
    },
    decrementQuantity: (state, action) => {
      const index = action.payload
      // const index = state.cart.findIndex(p => p.id === action.payload)
      state.cart[index].quantity--
    },
    toggleFilter: (state, action) => {
      const incomingSize = action.payload
      const hasSize = state.filteredSizes.includes(incomingSize)
      const filterWithoutSize = state.filteredSizes.filter(x => x !== incomingSize)
      const filterWithSize = [...state.filteredSizes, incomingSize]
      state.filteredSizes = hasSize ? filterWithoutSize : filterWithSize
      state.products = state.allProducts.filter(product => {
        if (state.filteredSizes.length) {
          const curr = current(product.availableSizes)
          return productsIncludeSize(curr, state.filteredSizes)
        }
        return true
      })
    },
    cartVisible: (state, action) => {
      state.cartVisible = action.payload
    }
  },
});

// console.log(productSlice)

export const {
  setProducts,
  addToCart,
  toggleFilter,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  cartVisible
} = productSlice.actions;


export const getProducts = () => dispatch => {
  fetch('http://localhost:3001/products')
    .then(r => r.json())
    .then(products => {
      // console.log(products)
      console.log(setProducts(products))
      dispatch(setProducts(products))
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.product.value)`
export const selectCount = state => {
    return state.product.value
}

export const selectProducts = state => state.product.products
export const selectCart = state => state.product.cart
export const selectFilteredSizes = state => state.product.filteredSizes
export const selectSubTotal = state => state.product.cart.reduce((a, b) => {
  return a + (b.price * b.quantity)
}, 0).toFixed(2)
export const selectCartVisible = state => state.product.cartVisible
export default productSlice.reducer;
