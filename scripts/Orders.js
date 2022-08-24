import { getOrders } from "./dataAccess.js"
import { getMetals } from "./dataAccess.js"
import { getSizes } from "./dataAccess.js"
import { getStyles } from "./dataAccess.js"
import { getAccessories } from "./dataAccess.js"

const metals = getMetals()
const orders = getOrders()
const sizes = getSizes()
const styles = getStyles()
const accessories = getAccessories()


const buildOrderListItem = (order) => {

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundAccessory = accessories.find((accessory) => {
        return accessory.id === order.accessoryId
    })


    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)

    const withAccCost = () => {
        if (order.accessoryId === 2) {
            return (totalCost * 2)
        } else if (order.accessoryId === 3) {
            return (totalCost * 4)
        } else
            return totalCost
    }

    let finalTotal = withAccCost()

    const costString = finalTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${order.timestamp}. It cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

