'use strict';
const form = document.querySelector("form")
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.getElementById("query").value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const jsonData = await response.json();

        let pituus = jsonData.result.length

        const div = document.getElementById("results");
        div.innerHTML = ''

        for (let i = 0; i < pituus; i++) {

            const article = document.createElement("article");
    
            const paragraph = document.createElement("p");
            paragraph.textContent = jsonData.result[i].value;
        
            div.appendChild(article);
                                        
            article.appendChild(paragraph);
            i++
        }


    } catch (error) {
        console.log(error.message);
    }
});

