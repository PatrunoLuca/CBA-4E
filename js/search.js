const oggetti = document.querySelector('#oggetti')
const searchInput = document.querySelector('#search-input')
const outputContainer = document.querySelector('#output-container')
const outputParagraph = document.querySelector('#output-paragraph')

let data;

fetch('../assets/objects.json')
    .then(response => response.json())
    .then((result) => {
        data = result
        console.log(data)

        for (const [key, value] of Object.entries(data)) {
            const optionTag = document.createElement('option')
            optionTag.value = key

            oggetti.appendChild(optionTag)

        }


    })

searchInput.addEventListener('input', (e) => {
    const input = e.target.value
    
    let result = data[input.toLowerCase()] ?? null


    if (result != null) {
        outputParagraph.innerHTML = `Va buttato in: <strong>${result}</strong>`
        outputContainer.style.visibility = 'visible'
        
    } else {
        outputContainer.style.visibility = 'hidden'
    }
})