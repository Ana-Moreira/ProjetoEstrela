const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');
const button = document.querySelector('button')
let p1 = document.getElementById("personagem1");
let p2 = document.getElementById("personagem2");
let p3 = document.getElementById("personagem3");
let p4 = document.getElementById("personagem4");

valorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

personagem1 = () => {
    let aleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        p1.innerText = imagem1.alt;
    });
}

personagem2 = () => {
    let aleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        p2.innerText = imagem2.alt;
    });
}

personagem3 = () => {
    let aleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        p3.innerText = imagem3.alt;
    });
}

personagem4 = () => {
    let aleatorio = valorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        p4.innerText = imagem4.alt;
    });
}

iniciar = () => {
    personagem1();
    personagem2();
    personagem3();
    personagem4();
}

button.onclick = iniciar;