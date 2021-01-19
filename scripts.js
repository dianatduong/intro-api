const app = document.getElementById('root')

const logo = document.createElement('img') //<img src="logo.png">
logo.src = 'logo.png'

const container = document.createElement('div') //<div className="container">
container.setAttribute('class', 'container')

app.appendChild(logo) //append logo after the #root 
app.appendChild(container) //append div.container after logo


fetch('https://ghibliapi.herokuapp.com/films', {
  method:'GET',
})
  .then((response) => {
   return response.json()
  })
  .then((data) => {
    data.forEach((movie) => {
       // Create a div with a card class
      const card = document.createElement('div')  //<div className="card"></div>
      card.setAttribute('class', 'card') 

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1') //<h1>Movie Title</h1>
      h1.textContent = movie.title

      // Create a p and set the text content to the film's description
      const p = document.createElement('p') //<p> Movie description</p>
      movie.description = movie.description.substring(0, 300) // Limit to 300 characters
      p.textContent = `${movie.description}...` // End with ellipses 

      //Append the cards to the container element
      container.appendChild(card)
      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
  })
  .catch((err) => {
    console.error('Error:', error);
  })
})

request.send()