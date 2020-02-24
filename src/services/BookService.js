import Axios from 'axios';

var axios = Axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

const BASE_URL = '//localhost:3000/books'

export default {
    query,
    getById,
    formatCurrency,
    formatLanguage,
    formatPublishedDate,
    formatPageCount
}

async function query() {
    const { data } = await axios.get(BASE_URL);
    return data || [];
}

async function getById(bookId) {
    const { data } = await axios.get(`${BASE_URL}/${bookId}`);
    return data;
}

function formatCurrency(currency) {
    switch (currency) {
        case 'ILS':
            return '₪';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
    }
}

function formatLanguage(language) {
    switch (language) {
        case 'he':
            return 'Hebrew';
        case 'en':
            return 'English';
        case 'sp':
            return 'Spanish';
    }
}

function formatPublishedDate(publishedDate) {
    if (publishedDate < 1) return 'New';
    if (publishedDate > 10) return 'Veteran book'
}

function formatPageCount(pageCount) {
    switch (true) {
        case (pageCount > 500):
            return 'Long reading';
        case (pageCount > 100):
            return 'Decent reading';
        case (pageCount < 100):
            return 'Light reading';
    }
}