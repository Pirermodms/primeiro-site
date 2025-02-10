let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    let diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    let data = new Date();
    let dianumero = data.getDate(); // Número do dia do mês (1-31)
    let diaSemana = data.getDay(); // Número do dia da semana (0-6)
    let mes = meses[data.getMonth()]; // Nome do mês
    
    // Seleciona o elemento correto dentro da lista de semana
    let listaDias = document.querySelectorAll(".semana li");
    if (listaDias.length >= 7) { // Garante que há ao menos 7 elementos na lista
        let ativo = listaDias[diaSemana]; // Usa diaSemana (0-6) para selecionar corretamente
        ativo.classList.add('atual');
    
        let h1 = document.createElement('h1');
        h1.innerHTML = dianumero; // Nome do dia da semana
        ativo.appendChild(h1);
    
        let h5 = document.createElement('h5');
        h5.innerHTML = mes; // Nome do mês
        ativo.appendChild(h5);
    }
    
    

