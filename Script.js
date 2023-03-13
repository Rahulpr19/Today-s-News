const countrySelect = document.getElementById('country');
const categorySelect = document.getElementById('category');
const articlesDiv = document.getElementById('articles');


function getNews() {
    const country = countrySelect.value;
    const category = categorySelect.value;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR API KEY',
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
      }
    };
  
    fetch(`https://news-api14.p.rapidapi.com/top-headlines?country=${country}&category=${category}`, options)
      .then(response => response.json())
      .then(data => {
        articlesDiv.innerHTML = '';
  
        data.articles.forEach(article => {
          const cardDiv = document.createElement('div'); // create a new div for the card
          cardDiv.classList.add('card'); // add the 'card' class to the div

          // Add color based on category
            
        
          const cardBodyDiv = document.createElement('div');
          cardBodyDiv.classList.add('card-body'); // add the 'card-body' class to the div
  
          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title'); // add the 'card-title' class to the heading element
          cardTitle.innerText = article.title;
  
          const publishedAt = document.createElement('p');
          publishedAt.classList.add('card-text'); // add the 'card-text' class to the paragraph element
  
          const url = document.createElement('a');
          url.href = article.url;
          url.target = "_blank";
          url.innerText = url;
  
          if (article.publishedAt) {
            const date = new Date(article.publishedAt);
            publishedAt.innerText = `Published on ${date.toDateString()}`; // format the date string
          }
  
          cardBodyDiv.appendChild(cardTitle);
          cardBodyDiv.appendChild(publishedAt);
          cardBodyDiv.appendChild(url);
  
          cardDiv.appendChild(cardBodyDiv);
          articlesDiv.appendChild(cardDiv);

          const br = document.createElement('br'); // create a new br element
          articlesDiv.appendChild(br); // append the br element after the card

        });
      })
      .catch(error => {
        console.error(error);
      });
  }



  countrySelect.addEventListener('change', getNews);
  categorySelect.addEventListener('change', getNews);

  getNews();




