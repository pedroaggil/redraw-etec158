/*
    Folha de animação e demais funções gerais do projeto de redesenho "Etec de Itanhaém"

    O projeto pode ser acessado a partir do GitHub:
        * < github.com/pedroaggil/redraw-etec158/ >

    Projeto desenvolvido em parceria entre Denise Azure e Pedro Gil.
 */

    document.getElementsByClassName("hello").addEventListener("onload", function Greetings() {
        // Local function to get hours for greet users.

        function getHours() {
            var hours = new Date().getHours();

            if (hours >= 5 && hours < 12) {
                document.getElementById("span.hello").innerHTML = 'Bom dia!';

            } else if (hours >= 12 && hours < 18) {
                document.getElementById("span.hello").innerHTML = 'Boa tarde!';

            } else if (hours >= 18 && hours < 24) {
                document.getElementById("span.hello").innerHTML = 'Boa noite!';

            } else if (hours >= 0 && hours < 5) {
                document.getElementById("span.hello").innerHTML = 'Boa madrugada!';

            } else {
                document.getElementById("span.hello").innerHTML = 'Olá!';

            }
        }
    });