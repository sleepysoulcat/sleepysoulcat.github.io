document.addEventListener('DOMContentLoaded', () => {
    const firstinput = document.getElementById('first-input');
    const inputField = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    const gbname = document.getElementById('gb-name');
    const gbmessage = document.getElementById('gb-message');
    var div = document.getElementById('cont-1');
    var firstcomd = document.getElementById('firstcommand');
    var div2 = document.getElementById('cont-2');
    var pagina = document.getElementById('pagina');
    var guestbook = document.getElementById('guestbook');
    var gbnamecolor = document.getElementById('gbnamecolor');
    var inputdecorzinha = document.getElementById('nameColor');

    const commands = {
        help: () => '<b>Comandos disponíveis:</b> <br><b>help:</b> mostra comandos disponíveis.<br><b>echo:</b> echo "mensagem".<br> <b>date:</b> informa a data.<br><b>clear:</b> Faz a limpeza do terminal.<br><b>guestbook:</b> Incia o livro de visitas.<br><b>background:</b> o uso é: background "#064196". <br><b>helloworld:</b> --S-23-FK',
        sunfetch: () => {outputDiv.innerHTML = ''; div2.style.visibility = 'hidden'; div.style.visibility = 'visible'; firstcomd.style.visibility = 'visible';},
        echo: (args) => args.join(' '),
        date: () => new Date().toLocaleString(),
        msgbox: () => alert ('teste'),
        clear: () => {
            outputDiv.innerHTML = ''; // Limpa o conteúdo da outputDiv
            return ''; // Retorna uma string vazia para não adicionar uma nova linha no output
        },
        helloworld: () => {[...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111))
        },
        guestbook: () => {
            outputDiv.innerHTML = ''; //vai limpar todos os comandos digitados antes!!
            div2.style.visibility = 'hidden'; // vai deixar a parte do console oculta.
            guestbook.style.visibility = 'visible'; //torna o guestbook visivel.
            gbname.focus(); //foco no nome
        },
        background: (args) => {document.body.style.background = args.join('')}
    };

    function setFocus() {
        firstinput.focus();
        inputField.focus();

        setTimeout(() => {
            setFocus();
        }, 1); // 1000 milissegundos = 1 segundo

    }


    //foco no nome DO GUESTBOOK
    gbname.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const negociodacor = {
                cor: '#139CB7',
            }; inputdecorzinha.value = negociodacor.cor;
            gbmessage.focus();
        }


        //Nome Vermelho
        
        if (event.key === '!') {
            gbnamecolor.style.color = '#a93226';
            const negociodacor = {
            cor: '#a93226',
        }; inputdecorzinha.value = negociodacor.cor;}

        //Nome Roxo

        if (event.key === '@') {
            gbnamecolor.style.color = '#7d3c98';
            const negociodacor = {
            cor: '#7d3c98',
        }; inputdecorzinha.value = negociodacor.cor;}

        
        //Nome Azul

        if (event.key === '#') {
            gbnamecolor.style.color = '#2471a3';
            const negociodacor = {
            cor: '#2471a3',
        }; inputdecorzinha.value = negociodacor.cor;}

        
        //Nome Verde

        if (event.key === '$') {
            gbnamecolor.style.color = '#138d75';
            const negociodacor = {
            cor: '#138d75',
        }; inputdecorzinha.value = negociodacor.cor;}

        //Nome Amarelo

        if (event.key === '%') {
            gbnamecolor.style.color = '#d4ac0d';
            const negociodacor = {
            cor: '#d4ac0d',
        }; inputdecorzinha.value = negociodacor.cor;}    


        //Nome Laranja

        if (event.key === '&') {
            gbnamecolor.style.color = '#ca6f1e';
            const negociodacor = {
            cor: '#ca6f1e',
        }; inputdecorzinha.value = negociodacor.cor;}




    });

    // Quando o segundo input está vazio, o foco volta para o primeiro input
    gbmessage.addEventListener('input', function() {
        if (gbmessage.value === '') {
            gbname.focus();
        }
    });

    // Definir foco quando a página carregar
    window.addEventListener('load', setFocus);





    



    const executeCommand = (commandLine) => {
        const [command, ...args] = commandLine.trim().split(' ');
        if (commands[command]) {
            return commands[command](args);
        } else {
            return `Comando não encontrado: ${command}`;
        }
    };

    firstinput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            div.style.visibility = 'hidden';
            firstcomd.style.visibility = 'hidden';
            div2.style.visibility = 'visible';
        }

        if (e.key === 'Enter') {
            const commandLine = firstinput.value;
            outputDiv.innerHTML += `<div>${commandLine}</div>`;
            const result = executeCommand(commandLine);
            if (result) {
                outputDiv.innerHTML += `<div>${result}</div`;
            }
            firstinput.value = '';
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    })


    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commandLine = inputField.value;
            outputDiv.innerHTML += `<div>${commandLine}</div>`;
            const result = executeCommand(commandLine);
            if (result) {
                outputDiv.innerHTML += `<div>${result}</div`;
            }
            inputField.value = '';
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });

});
