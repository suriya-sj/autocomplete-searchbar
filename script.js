const search = document.getElementById('search');
const match = document.getElementById('match');

const searchCountry = async searchText => {
const res = await fetch('/country.json');
const country = await res.json();


let matches = country.filter(country => {
    const regex = new RegExp(`${searchText}`,'gi');
    return country.country.match(regex) || country.abbreviation.match(regex);
});
if(searchText.length == 0){
    matches = [];
    match.innerHTML='';
}
    outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length >0){
        const html = matches
        .map(
            match =>`<h3> ${match.country}(${match.abbreviation})`
        )
        .join('')
        match.innerHTML = html;

    }

};


search.addEventListener('input', () => searchCountry(search.value));

