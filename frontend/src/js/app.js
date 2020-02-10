// Главный файл JS;
import '../styles/app'; // общие стили (app.less);
import 'babel-polyfill';

import * as CarsModel  from './api/cars';

let elemContainer = document.getElementsByClassName('content-container__text');

const carsInfo = [
    {
        'brand':'volvo',
        'model': 's80'
    },
    {
        'brand':'mersedes',
        'model': 's300'
    }
];

function addTotalCars(elemParent, arrayCars) {
    let div = document.createElement('div');

    elemParent.appendChild(div).innerHTML = 'Всего авто ' + arrayCars.length;
}

addTotalCars(elemContainer[0], carsInfo);

function addInputs(elemParent, arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        let inputBrand = document.createElement('input');
        let inputModel = document.createElement('input');

        elemParent.appendChild(inputBrand).setAttribute('value', arrObj[i].brand);
        elemParent.appendChild(inputModel).setAttribute('value', arrObj[i].model);
    }
}

async function getCars() {
    let obj = await CarsModel.all();

    console.log(obj);
}

getCars();
addInputs(elemContainer[0], carsInfo);


