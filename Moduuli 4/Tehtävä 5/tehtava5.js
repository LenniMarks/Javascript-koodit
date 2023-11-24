'use strict';

async function joke() {  
    try{
       const response = await fetch('https://api.chucknorris.io/jokes/random');
       if (!response.ok) throw new Error('Invalid input!'); 
       const data = await response.json();
       console.log(data.value);
    } catch (error) {
      console.log(error.message)
    }                  
 }

joke();