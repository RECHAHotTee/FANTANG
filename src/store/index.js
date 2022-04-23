import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const {
    cartList
  } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  try {
    return JSON.parse(localStorage.cartList);
  } catch (e) {
    return {}
  }
}

export default Vuex.createStore({
  state: {
    cartList: getLocalCartList(),
    addressList: [],
  },
  mutations: {
    // 修改购物车数量
    changeCartItemInfo(state, payload) {
      const {
        shopId,
        productId,
        productInfo
      } = payload
      let shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 设置购物车商品名称
    changeShopName(state, payload) {
      const {
        shopId,
        shopName
      } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 购物车商品选择逻辑
    changeCartItemChecked(state, payload) {
      const {
        shopId,
        productId
      } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    // 清空购物车
    cleanCartProducts(state, payload) {
      const {
        shopId
      } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    // 购物车全选
    setCartItemsChecked(state, payload) {
      const {
        shopId
      } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (let key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    // 提交订单后清空购物车
    clearCartData(state, shopId) {
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    // 修改订单地址
    changeAddressList(state, addressList) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  }
})
