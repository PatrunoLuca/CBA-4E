const oggetti = document.querySelector('#oggetti')
const searchInput = document.querySelector('#search-input')
const outputContainer = document.querySelector('#output-container')
const outputParagraph = document.querySelector('#output-paragraph')

let data;
let searchData = {};

fetch('../assets/objects.json')
    .then(response => response.json())
    .then((result) => {
        data = result

        for (let object of data) {
            const optionTag = document.createElement('option')
            optionTag.value = object.item

            oggetti.appendChild(optionTag)

            searchData[object.item.toLowerCase()] = object.bin
        }

        console.log(searchData)

    })

searchInput.addEventListener('input', (e) => {
    const input = e.target.value
    
    let result = searchData[input.toLowerCase()] ?? null

    if (result != null) {
        outputParagraph.innerHTML = `Va buttato in: <strong>${result}</strong>`
        outputContainer.style.visibility = 'visible'
        
    } else {
        outputContainer.style.visibility = 'hidden'
    }
})