'use strict';
const movieForm = document.querySelector("form")
movieForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.getElementById("query").value;
    try {                                             // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function 
                             
        const div = document.getElementById("results");
        div.innerHTML = ''

        jsonData.forEach(tvshow => {
        
        const article = document.createElement("article");
    
        const title = document.createElement("h2");
        title.textContent = tvshow.show.name;
                      
        const url = document.createElement("a");
        url.href = tvshow.show.url;
        url.textContent = "Details";
        url.target = '_blank';
                    
        const articleImage = document.createElement("img");
        articleImage.src =  tvshow.show.image ? tvshow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        articleImage.alt = tvshow.show.name;
                      
        const summary = document.createElement("div");
        summary.innerHTML = tvshow.show.summary;
                      
        div.appendChild(article);
                                    
        article.appendChild(title);
        article.appendChild(url);
        article.appendChild(articleImage);
        article.appendChild(summary);
        });

    } catch (error) {
        console.log(error.message);
    }
});

