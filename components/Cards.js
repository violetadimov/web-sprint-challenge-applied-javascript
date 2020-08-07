// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPoint = document.querySelector('.cards-container')

function cardMaker({ headlineTitle, authorImgUrl, authorName }) {
    const cardContainer = document.createElement('div')
    cardContainer.classList = 'card'

    const headline = document.createElement('div')
    headline.classList = 'headline'
    headline.textContent = headlineTitle
    cardContainer.appendChild(headline)

    const author = document.createElement('div')
    author.classList = 'author'
    cardContainer.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.classList = 'img-container'
    author.appendChild(imgContainer)

    const imgEl = document.createElement('img')
    imgEl.src = authorImgUrl
    imgContainer.appendChild(imgEl)

    const span = document.createElement('span')
    span.textContent = ` By ${authorName}`
    author.appendChild(span)

    cardContainer.addEventListener('click', () => {

        console.log(headline.textContent)

    })


    return cardContainer
}

console.log(cardMaker({
    headlineTitle: 'Headline of article',
    authorImgUrl: 'url of authors image',
    authorName: "author's name"
}));




console.log(axios);
const articleUrl = 'https://lambda-times-backend.herokuapp.com/articles';

axios.get(articleUrl)
    .then(function(value) {
        // debugger
        const articles = value.data.articles
        for (let article in articles) {
            articles[article].forEach((articleObj) => {
                const card = cardMaker({
                    headlineTitle: articleObj.headline,
                    authorImgUrl: articleObj.authorPhoto,
                    authorName: articleObj.authorName,
                })
                entryPoint.appendChild(card)
            })
        }

    })
    .catch(function(error) {
        //debugger
        console.log(error)

    })