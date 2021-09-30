fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data =>displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';
    //     const countryInfo = `
    //         <h3 class ="country-name">${country.name.common}</h3>
    //         <p>${country.capital}</p>
    //         <button class ="">click me</button>
    //     `
    //     countryDiv.innerHTML =  countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country"
        const countryInfo = `
            <h3 class ="country-name">${country.name.common}</h3>
            <p>${country.capital}</p>
            <button class ="" onClick= "displayCountryDetails('${country.name.common}')">Country Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });
}

const displayCountryDetails = name=>{
    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
    .then(response=>response.json())
    .then(data=> renderCountryDetails(data[0]));
        
    const renderCountryDetails= country => {
        const countryDetails = document.getElementById("county-details");
        countryDetails.style.display = 'block';
        countryDetails.innerHTML = `
            <h1>name : ${country.name.common}</h1>
            <p>Population : ${country.population}</p>
            <p>Area : ${country.area}</p>
            <img src="${country.flags.png}">
        `
    }
}