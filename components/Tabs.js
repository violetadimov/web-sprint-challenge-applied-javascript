// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const entryPoint = document.querySelector('.topics')

function tabMaker(topicName) {
    const tab = document.createElement('div')
    tab.classList = 'tab'
    tab.textContent = topicName

    return tab
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function(value) {
        // debugger
        const tab = value.data.topics
        tab.forEach(topicName => {
            const tabTopic = tabMaker(topicName)
            entryPoint.appendChild(tabTopic)
        })
    })
    .catch(function(error) {
        console.log(error)
        //debugger
    })