let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'setembro'
]

let data = new Date();
let dianumero = data.getDate() -1
let dia = data.getDay() +2
let mes = meses[data.getMonth()]

let ativo = document.querySelector(".semana li:nth-child("+dianumero+")")
ativo.classList.add('atual');

let h1 = document.createElement('h1');

h1.innerHTML = dia;
ativo.appendChild(h1);

let h5 = document.createElement('h5');
h5.innerHTML = mes
ativo.appendChild(h5);

