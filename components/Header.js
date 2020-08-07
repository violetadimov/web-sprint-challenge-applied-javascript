// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(data) {
    const header = document.createElement('header')
    header.classList = 'header'


    const spanDate = document.createElement('span')
    spanDate.classList = 'date'
    header.appendChild(spanDate)

    const heading = document.createElement('h1')
    header.appendChild(heading)

    const spanTemp = document.createElement('span')
    spanTemp.classList = 'temp'
    header.appendChild(spanTemp)


    data.forEach(item => {
        spanDate.textContent = item.date
        heading.textContent = item.title
        spanTemp.textContent = item.temperature
    })

    return header
}

const degreeSign = '98\u00b0';

const headerData = [{
    date: 'MARCH 28, 2020',
    title: 'Lambda Times',
    temperature: degreeSign
}]

console.log(Header(headerData))


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header(headerData))
