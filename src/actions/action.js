// actions.js
export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });
export const setTheme = (theme) => ({ type: 'SET_THEME', payload: theme });
export const setLanguage = (language) => ({ type: 'SET_LANGUAGE', payload: language });
export const setAddressList = (addressList) => ({ type: 'SET_ADDRESS_LIST', payload: addressList });
export const setCreditCards = (creditCards) => ({ type: 'SET_CREDIT_CARDS', payload: creditCards });

export const setCategories = (categories) => ({ type: 'SET_CATEGORIES', payload: categories });
export const setProductList = (products) => ({ type: 'SET_PRODUCT_LIST', payload: products });
export const setTotal = (total) => ({ type: 'SET_TOTAL', payload: total });
export const setFetchState = (state) => ({ type: 'SET_FETCH_STATE', payload: state });
export const setLimit = (limit) => ({ type: 'SET_LIMIT', payload: limit });
export const setOffset = (offset) => ({ type: 'SET_OFFSET', payload: offset });
export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });

export const setCart = (cart) => ({ type: 'SET_CART', payload: cart })
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });

export const setLoading = (loading) => ({ type: 'SET_LOADING', payload: loading });
export const setError = (error) => ({ type: 'SET_ERROR', payload: error });
