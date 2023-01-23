// Makes so that share buttons have the current page link

const pageUrl = encodeURIComponent(document.URL);
const tweet = encodeURIComponent('Proteggi l\'ambiente con Solidarietà ambiente: ' + document.URL)

console.log(pageUrl)
console.log(tweet)

document.getElementById('facebook').setAttribute(
    'href', 'https://www.facebook.com/sharer.php?u=' + pageUrl
)

document.getElementById('twitter').setAttribute(
    'href', 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + tweet
)