let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    let diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    let data = new Date();
    let dianumero = data.getDate(); 
    let diaSemana = data.getDay(); 
    let mes = meses[data.getMonth()]; 
    
    let listaDias = document.querySelectorAll(".semana li");
    if (listaDias.length >= 7) { 
        let ativo = listaDias[diaSemana]; 
        ativo.classList.add('atual');
    
        let h1 = document.createElement('h1');
        h1.innerHTML = dianumero; 
        ativo.appendChild(h1);
    
        let h5 = document.createElement('h5');
        h5.innerHTML = mes; 
        ativo.appendChild(h5);
    }
    
    

