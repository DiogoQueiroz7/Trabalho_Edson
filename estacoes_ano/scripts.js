const mes = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const estacao_ano = ["primavera", "verão", "outono", "inverno"];

const primavera = [
  { "nome": "Rosa chá", "cor": "rgb(255, 182, 193)" },
  { "nome": "Lilás", "cor": "rgb(200, 162, 200)" },
  { "nome": "Verde menta", "cor": "rgb(152, 255, 152)" },
  { "nome": "Amarelo limão", "cor": "rgb(255, 250, 85)" },
  { "nome": "Peônia", "cor": "rgb(255, 105, 180)" }
];

const verao = [
    { nome: 'Turquesa', cor: 'rgb(64, 224, 208)' },
    { nome: 'Verde limão', cor: 'rgb(173, 255, 47)' },
    { nome: 'Amarelo ouro', cor: 'rgb(255, 223, 0)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 179, 71)' },
    { nome: 'Coral', cor: 'rgb(255, 127, 80)' }    
];

  
const outono = [
    { nome: 'Amarelo suave', cor: 'rgb(255, 239, 184)' },
    { nome: 'Bege claro', cor: 'rgb(210, 180, 140)' },
    { nome: 'Pêssego suave', cor: 'rgb(255, 218, 185)' },
    { nome: 'Marrom claro', cor: 'rgb(222, 184, 135)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' }
  ];

const inverno = [
    { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
    { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },    
    { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },   
    { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
    { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
  ];

let i_estacao = 0;
let vet_estacao = primavera; 
let intervalo; 
let num_cor = 0;

function calcula_estacao() {
    if (intervalo) {
        clearInterval(intervalo);
    }

    const num_mes = parseInt(document.getElementById('i_mes').value);

    document.getElementById('nome_mes').innerText = mes[num_mes - 1];

    if (num_mes >= 3 && num_mes <= 5) { 
        i_estacao = 2; 
        vet_estacao = outono;
    } else if (num_mes >= 6 && num_mes <= 8) { 
        i_estacao = 3; 
        vet_estacao = inverno;
    } else if (num_mes >= 9 && num_mes <= 11) { 
        i_estacao = 0; 
        vet_estacao = primavera;
    } else { 
        i_estacao = 1; 
        vet_estacao = verao;
    }

    document.getElementById('nome_estacao').innerText = estacao_ano[i_estacao];

    const todasEstacoes = document.querySelectorAll('.estacao');
    todasEstacoes.forEach((el, index) => {
        if (index === i_estacao) {
            el.style.border = '5px solid yellow'; 
            el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            el.style.border = 'none';
            el.style.backgroundColor = 'transparent';
        }
    });
    
    num_cor = 0; 
    coresEstacao(); 
    intervalo = setInterval(coresEstacao, 2000);
}

function coresEstacao() {
    const caixas_cores = document.querySelectorAll('.cor');

    caixas_cores.forEach((caixa, index) => {
        if (vet_estacao[index]) {
            caixa.innerText = vet_estacao[index].nome;
            caixa.style.backgroundColor = vet_estacao[index].cor;
        } else {
            caixa.innerText = '?';
            caixa.style.backgroundColor = 'white';
        }
    });


    const estacoesDiv = document.getElementById('estacoes');
    if (vet_estacao.length > 0) {
        estacoesDiv.style.backgroundColor = vet_estacao[num_cor].cor;
        num_cor = (num_cor + 1) % vet_estacao.length;
    }
}

window.onload = calcula_estacao;