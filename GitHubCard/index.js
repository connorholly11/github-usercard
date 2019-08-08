/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// var url = 'https://api.github.com/users/connorholly11';

// axios.get('https://api.github.com/users/connorholly11')
//   .then((response) => {
//     // createCards(response.data))
//   console.log(response);
//   })

  axios.get('https://api.github.com/users/connorholly11')
  // .then((response) => createCards(response.data))
  .then((response) => {
    const myInfo = response.data;
    const card = createCards(myInfo);
    cards.appendChild(card);
  })


  // .then(alert('hello'))
    // .catch((err) => console.log(err))

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 



   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards');
// cards.appendChild(card);



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
          
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

// followersArray.forEach(items => {
//   const newCard = document.createElement('div');
//   newCard.textContent = followersArray;
//   card.appendChild(newCard);
// })


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:*/
/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const card = document.querySelector('.cards')

function createCards(object){
  //creating elements
  
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  // const location = document.createElement('p');
  // const profile = document.createElement('p');
  // const LinkGithub = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  // const bio = document.createElement('p');

  //creating structure
  card.appendChild(img);
  img.src = object.avatar_url;

  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  name.textContent = object.name;

  cardInfo.appendChild(username);
  username.textContent = object.login;
  // card.appendChild(location);

  // card.appendChild(profile);


  // card.appendChild(LinkGithub);

  cardInfo.appendChild(followers);
  followers.textContent = "Followers: " + object.followers;

  cardInfo.appendChild(following);
  following.textContent = "Following: " + object.followers;

  // card.appendChild(bio);

  //set class names
  card.classList.add('card');
  img.classList.add('img');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // const cardContainer = document.querySelector('cards');
  // cardContainer.appendChild(card);

  


  return card;
}


followersArray.forEach(items => {
  axios.get(URL/${items});
  .then((response) => {
    const info = response.data;
    const newCard = createCards(info);
    info.appendChild(newCard);
  })
//   const newCard = document.createElement('div');
//   newCard.textContent = items;
//   card.appendChild(newCard);
// })

// .then((response) => {
//   const myInfo = response.data;
//   const card = createCards(myInfo);
//   cards.appendChild(card);
// })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
