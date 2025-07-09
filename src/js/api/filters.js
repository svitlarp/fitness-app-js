import axios from "axios";


const refs = {
    MusclesBtnEl: document.querySelector('.get-muscles-btn'),
    BodyPartsBtnEl: document.querySelector('.get-body-parts-btn'),
    EquipmentBtnEl: document.querySelector('.get-equipment-btn'),
}


console.log(refs.MusclesBtnEl, refs.BodyPartsBtnEl, refs.EquipmentBtnEl);


refs.MusclesBtnEl.addEventListener('click', event => {
    console.log(event);

    axios.get('https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err));
});

refs.BodyPartsBtnEl.addEventListener('click', event => {
    console.log(event);

    axios.get('https://your-energy.b.goit.study/api/filters?filter=Body%20parts&page=1&limit=12')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err));
});


refs.EquipmentBtnEl.addEventListener('click', event => {
    console.log(event);

    axios.get('https://your-energy.b.goit.study/api/filters?filter=Equipment&page=1&limit=12')
        .then(response => {
            console.log(response.data);
            // const { quote, author } = response.data;
            // console.log(`${author} - ${quote}`);
        })
        .catch(err => console.log(err));
});



'https://your-energy.b.goit.study/api/filters?filter=Body%20parts&page=1&limit=12'