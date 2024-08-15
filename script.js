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
    var guestbook = document.getElementById('guestbook')

    const commands = {
        help: () => 'Comandos disponíveis: help, echo, date, clear',
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
        }
    };

    function setFocus() {
        firstinput.focus();
        inputField.focus();

        setTimeout(() => {
            setFocus();
        }, 1); // 1000 milissegundos = 1 segundo

    }


    //foco no nome
    gbname.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            gbmessage.focus();
        }
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
