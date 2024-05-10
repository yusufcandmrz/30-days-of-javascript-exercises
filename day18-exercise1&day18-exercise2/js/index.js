const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

console.log("*******************");

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

/* fetch(countriesAPI)
    .then((response) => response.json())
    .then(data => {

        for (let index = 0; index < data.length; index++) {
            console.log("-----------------------");
            let country = data[index].name;
            let capital = data[index].capital;
            let languages = data[index].languages;
            let population = data[index].population;
            let area = data[index].area;
            console.log(`country -> ${country}`);
            console.log(`capital -> ${capital}`);
            for (let index = 0; index < languages.length; index++) {
                console.log(`${index + 1}. language ${languages[index].name}`)
            }
            console.log(`polulation -> ${population}`);
            console.log(`area -> ${area}`);
        }

        console.log("*******************");
    }
    )
    .catch(err => console.log(err));
*/

// Print out all the cat names in to catNames variable.

callCatNames = async () => {
    const response = await fetch(catsAPI);
    const data = await response.json();
    for (let index = 0; index < data.length; index++) {
        console.log(data[index].weight);
    }
}

// callCatNames();