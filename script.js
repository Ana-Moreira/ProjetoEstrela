const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');
const button = document.querySelector('button')

let div1 = document.getElementById("personagem1");
let div2 = document.getElementById("personagem2");
let div3 = document.getElementById("personagem3");
let div4 = document.getElementById("personagem4");

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        div1.innerText = imagem1.alt;    
    });        
} 

pegarPersonagem2 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        div2.innerText = imagem2.alt;      
    });        
}

pegarPersonagem3 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        div3.innerText = imagem3.alt;     
    });        
}

pegarPersonagem4 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        div4.innerText = imagem4.alt;    
    });        
}

iniciar = () => {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();     
}

button.onclick = iniciar;