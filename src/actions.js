
const storeUserDetails = (key, value) => ({
    type: "STORE_DATA",
    key: key,
    value: value
})

const clearUserDetails = () => ({
    type: "CLEAR_DATA"
})

export { storeUserDetails, clearUserDetails };