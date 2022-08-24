import { getAccessories, setAccessory } from "./dataAccess.js"

const accessories = getAccessories()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "accessory") {
            setAccessory(parseInt(event.target.value))
        }
    }
)

export const Accessories = () => {
    let html = `<ul class="acc">`

    for (const accessory of accessories) {
        html += `<li>
            <input type="radio" name="accessory" value="${accessory.id}" /> ${accessory.type}
        </li>`
    }

    html += "</ul>"
    return html
}
