import Example from './scripts/exsample';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello world!')


    const main = document.getElementById('main');
    new Example(main);
})