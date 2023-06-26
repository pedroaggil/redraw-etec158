/*
    Folha de animação e demais funções gerais do projeto de redesenho "Etec de Itanhaém"

    O projeto pode ser acessado a partir do GitHub:
        * < github.com/pedroaggil/redraw-etec158/ >

    Projeto desenvolvido em parceria entre Denise Azure e Pedro Gil.
 */

    document.getElementsByClassName("hello").addEventListener("load", function Greetings() {
        // Local function to get hours for greet users.

        function getHours() {
            var hours = new Date().getHours();

            if (hours >= 5 && hours < 12) {
                document.getElementsByClassName("hello").innerHTML = 'Bom dia!';

            } else if (hours >= 12 && hours < 18) {
                document.getElementsByClassName("hello").innerHTML = 'Boa tarde!';

            } else if (hours >= 18 && hours < 24) {
                document.getElementsByClassName("hello").innerHTML = 'Boa noite!';

            } else if (hours >= 0 && hours < 5) {
                document.getElementsByClassName("hello").innerHTML = 'Boa madrugada!';

            } else {
                document.getElementsByClassName("hello").innerHTML = 'Olá!';

            }
        }
    });

    // Local function to padronize a height of articles
    document.getElementsByTagName("article").addEventListener('load', function PadronizeArticles() {
        if (parseInt(this.style.height) >= 15) {
            alert("orra grandão esse artigo aí hein");
        } else {
            alert("poxa isso ai nao da nem pro cheiro");
        }
    });