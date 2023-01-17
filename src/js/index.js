import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import { renderOneCountry } from "./markup";
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;
const MAX_LENGTH = 10;

const listCountries = document.querySelector('.country-list');
const oneCountry = document.querySelector('.country-info');
const input = document.querySelector('#search-box');


input.addEventListener('input', debounce(inputCountry, DEBOUNCE_DELAY));

function inputCountry(event) {
    if (event.target.value.trim() === '')
        return (listCountries.innerHTML = ''), (oneCountry.innerHTML = '');
    else {
        fetchCountries(event.target.value.trim())
            .then(renderCountry)
            .catch(err => {
                Notiflix.Notify.failure(
                    'Oops, there is no country with that name',
                    err
                );
            });
    }
}

function renderCountry(countries) {
    listCountries.innerHTML = '';
    oneCountry.innerHTML = '';
    if (countries.length > MAX_LENGTH) {
        Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
        );
    } else {
        oneCountry.insertAdjacentHTML('beforeend', renderOneCountry(countries));
    }
}

