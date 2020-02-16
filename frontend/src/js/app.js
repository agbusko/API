// Главный файл JS;
import '../styles/app'; // общие стили (app.less);
import 'babel-polyfill';

import * as CarsModel  from './api/cars';


let elemContainer = document.getElementsByClassName('content-container__text');
let carsInfo = [
    {
        'brand':'volvo',
        'model': 's80'
    },
    {
        'brand':'mersedes',
        'model': 's300'
    }
];

//  отрисовка всего;
function renderCars() {
    getCars()
        .then(() => addTitleTotalCars(elemContainer[0], carsInfo))
        .then(() => addElemCars(carsInfo))
        .then(() => addElemControls(elemContainer[0]));
}

//  отрисовка заголовка;
function addTitleTotalCars(elemParent, arrayCars) {
    let div = document.createElement('div');
    div.classList.add('title');

    elemParent.appendChild(div).innerHTML = 'Количество авто в базе: ' + Object.keys(arrayCars).length;
}

//  отрисовка всех авто;
function addElemCars(objects) {
    for (const obj in objects) {
        addElemCar(elemContainer[0], objects[obj], obj);
    }
}

//  отрисовка одного авто;
function addElemCar(elemParent, object = {brand:'', model:''}, key) {
    let div = document.createElement('div');
    div.classList.add('context');
    div.setAttribute('id', key);

    elemParent.appendChild(div);

    let inputBrand = document.createElement('input');
    let inputModel = document.createElement('input');

    div.appendChild(inputBrand).setAttribute('value', object.brand);
    div.appendChild(inputModel).setAttribute('value', object.model);
}

//  отрисовка пустых inputs;
function addElemField() {
    let div = document.createElement('div');
    div.classList.add('context-new');

    elemContainer[0].insertBefore(div, elemContainer[0].lastElementChild);

    let inputBrand = document.createElement('input');
    let inputModel = document.createElement('input');

    div.appendChild(inputBrand).setAttribute('value', '');
    div.appendChild(inputModel).setAttribute('value', '');
    console.log(inputBrand.value);
}

//  сохранение новых авто;
function addCars() {
    let elements = document.querySelectorAll('.context-new');

    for (let i = 0; i < elements.length; i++) {
        let arrInputs = elements[i].getElementsByTagName('input');
        let newCar = {
            'brand': arrInputs[0].value,
            'model': arrInputs[1].value
        };

        saveCars(newCar);
        console.log(newCar);
    }
}

//  отрисовка и навешивание обработчиков на кнопки управления;
function addElemControls(elemParent) {
    let buttonAdd = document.createElement('button');
    let buttonSave = document.createElement('button');

    buttonAdd.addEventListener('click', addElemField);
    buttonAdd.innerHTML = 'Добавить';
    elemParent.appendChild(buttonAdd);

    buttonSave.addEventListener('click', addCars);
    buttonSave.innerHTML = 'Сохранить';
    elemParent.appendChild(buttonSave);
}


// -----------API-functions-----------;
// получение всех авто;
async function getCars() {
    carsInfo = await CarsModel.all();

    console.log(carsInfo);
}

async function saveCars(car) {
    carsInfo =  await CarsModel.add(car);

    console.log(carsInfo);
}

renderCars();





