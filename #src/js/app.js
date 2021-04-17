require("@babel/polyfill");

import {Dropdown} from './moduls/dropdown';
import {chooseAddress} from './moduls/time';
import {autoresize} from './moduls/textArea-autoGrow';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    /*Грузоподъемность*/
    const payload = new Dropdown('#payload', {
        items: [{
                label: 'Не выбрана',
                id: '00'
            },
            {
                label: '5 тоны',
                id: '01'
            },
            {
                label: '10 тонн ',
                id: '02'
            },
            {
                label: '20 тонн',
                id: '03'
            }
        ]
    }, 'zi-30', 'zi-img-31');
    
    /*Способ загрузки*/
    const loadingMethod = new Dropdown('#loadingMethod', {
        items: [{
                label: 'Не выбрана',
                id: '00'
            },
            {
                label: 'Задняя',
                id: '01'
            },
            {
                label: 'Боковая',
                id: '02'
            },
            {
                label: 'Верхняя',
                id: '03'
            }
        ]
    }, 'zi-30', 'zi-img-31');

    /* Тип груза */
    const typeOfCargo = new Dropdown('#typeOfCargo', {
        items: [{
                label: 'Не выбрана',
                id: '00'
            },
            {
                label: 'Навальные',
                id: '01'
            },
            {
                label: 'Сыпучие',
                id: '02'
            },
            {
                label: 'Негабаритные',
                id: '03'
            }
        ]
    }, 'zi-20', 'zi-img-21');

    /* Класс опасности */
    const hazardClass = new Dropdown('#hazardClass', {
        items: [{
                label: 'Не выбран',
                id: '00'
            },
            {
                label: 'Класс 1',
                id: '01'
            },
            {
                label: 'Класс 2',
                id: '02'
            },
            {
                label: 'Класс 3',
                id: '03'
            }
        ]
    }, 'zi-10', 'zi-img-11');
    
    /* Время */
    chooseAddress();
    
    /* автоматическое рассширение textarea*/
    autoresize();

});