import { database } from "./database.js"

export const getMetals = () => {
    return database.metals.map(metal => ({ ...metal }))
}

export const getSizes = () => {
    return database.sizes.map(size => ({ ...size }))
}

export const getStyles = () => {
    return database.styles.map(style => ({ ...style }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const getAccessories = () => {
    return database.accessories.map(accessory => ({ ...accessory }))
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id

}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id

}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id

}

export const setAccessory = (id) => {
    database.orderBuilder.accessoryId = id

}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}