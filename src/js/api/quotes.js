import axios from "axios";


const quoteButtonEl = document.querySelector('.get-quote-btn');
console.log(quoteButtonEl);


quoteButtonEl.addEventListener('click', event => {
    console.log(event);

    axios.get('https://your-energy.b.goit.study/api/quote')
        .then(response => {
            console.log(response.status);
            const { quote, author } = response.data;
            console.log(`${author} - ${quote}`);
        })
        .catch(err => console.log(err));
});




