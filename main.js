const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuirTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
};

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
};

const campoSenha = document.querySelector('#campo-senha');
const LetrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

geraSenha();

function geraSenha(){
    let senha = ' ';
    for(let i = 0; i< tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}