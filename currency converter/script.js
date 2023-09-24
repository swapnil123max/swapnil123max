let tabledata = document.querySelector("tbody")
let add = document.querySelector(".add")
let table = document.querySelector("table")
const btn = document.querySelector(".btn")
const populate = async (value, currency) => {
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_X9xNeFozqvKjURdcY4Q2jICeeohskmrKYVTHn4SZ&base_currency=" + currency
    let mystr = ""
    let response = await fetch(url);
    let rJson = await response.json();
    console.log(rJson)

    for (let key of Object.keys(rJson["data"])) {
        mystr += ` <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${key}
                </th>
                <td class="px-6 py-4">
                   ${rJson["data"][key]["code"]}
                </td>
                <td class="px-6 py-4">
                    ${Math.round(rJson["data"][key]["value"] * value)}
                </td>
    
            </tr>`
    }
    add.classList.remove("min-h-[30vh]")
    add.classList.add("h-[100vh]")
    table.classList.remove("hidden")
    tabledata.innerHTML = mystr

}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked");
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = (document.querySelector("select[name='currency']").value)
    populate(value, currency)
})
