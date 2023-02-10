// Parse the CSV file into a table

// const table = document.getElementById('product-seasonality')
const tableHeadRow = document.getElementById('table-head-row')
const tableBody = document.getElementById('table-body')

const csvPath = '../assets/seasonality.csv'

const xhr = new XMLHttpRequest()
xhr.onload = function() {

    // Parsing the CSV string
    const csv = Papa.parse(this.responseText)
    console.log(csv.data)
    
    // Adding headers to the top of the table 
    for (head of csv.data[0]) {
        const element = document.createElement('th')
        element.scope = 'col'
        element.innerHTML = head
        tableHeadRow.appendChild(element)
    }
    csv.data.splice(0, 1) // Remove the headers from the data

    for (arr of csv.data) {
        const row = document.createElement('tr')
        const rowHead = document.createElement('th')

        // Add the first element as head of the row
        rowHead.innerHTML = arr[0]
        rowHead.scope = 'row'
        row.appendChild(rowHead)

        arr.splice(0, 1) // Remove the row head

        // Iterate over the remaining elements
        for (element of arr) {
            const td = document.createElement('td')
            td.classList.add('text-center')

            if (element == 'true') {
                td.innerHTML = '&#10003' // Replace "true" with a check unicode character 
            }

            row.appendChild(td)
        }

        // Finally append the row to the table body
        tableBody.appendChild(row)
    }
    
}

xhr.open('GET', csvPath, true)
xhr.send()

