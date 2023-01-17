export function renderOneCountry(countries) {
    if (countries.length == 1) {
        return countries
            .map(({ flags, name, capital, population, languages }) => {
                return `
     <div class="country-list_item">
            <img class="country-flag" width=40 height=30 src=${flags.svg} alt="Flag of ${name.official
                    }">
            <span class="country-name">${name.official}</span>
            </div>
            <p class='country-info'>Capital:
            <span class='country-info__details'>${capital}</span></p>
            <p class='country-info'>Population:
            <span class='country-info__details'>${population}</span></p>
            <p class='country-info'>Languages:
            <span class='country-info__details'>${Object.values(languages)}</span></p>
      `;
            })
            .join('');
    } else if (countries.length > 1) {
        return countries
            .map(({ flags, name }) => {

                return `
           <li class="country-list_item">
            <img class="country-flag" width=40 height=30 src=${flags.svg} alt="Flag of ${name.official}">
            <span class="country-name_list">${name.official}</span>
            </li>
          `;
            })
            .join('');
    }
}


