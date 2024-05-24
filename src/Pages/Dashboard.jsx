import { useEffect } from 'react';
import { Link } from 'react-router-dom';
/* import imgLogoHC from "../Componentes/images/instituto-da-crianca-hcfmusp.jpg"; */
import imgLogoHC from "../assets/images/instituto-da-crianca-hcfmusp.jpg";

function Dashboard() {
    useEffect(() => {
        google.charts.load('current', {packages: ['corechart', 'piechart', 'linechart', 'barchart', 'areachart']});
        google.charts.setOnLoadCallback(drawCharts);

        function drawCharts() {
            drawBarChart('grafico1', 'Feedbacks recebidos por dia');
            drawPieChart('grafico2', 'Satisfação geral por dia');
            drawComboChart('grafico3', 'Avaliação média do desempenho médico - Comparativo');
            drawLineChart('grafico4', 'Taxa de Satisfação do Paciente');
            drawAreaChart('grafico5', 'Taxa de Comparecimento a Consultas Médicas');
            drawBarColumnChart('grafico6', 'Taxa de Cumprimento de Metas de Atendimento');
        }

        function drawBarChart(elementId, title) {
            var data = google.visualization.arrayToDataTable([
                ['Dia', 'Taxa'],
                ['1', 42],
                ['2', 35],
                ['3', 38],
                ['4', 40],
                ['5', 39],
                ['6', 43],
                ['7', 45],
            ]);

            var options = {
                title: title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                hAxis: {title: 'Dia'},
                vAxis: {title: 'Valor'},
                legend: 'none',
            };   

            var chart = new google.visualization.BarChart(document.getElementById(elementId));
            chart.draw(data, options);
        }

        function drawPieChart(elementId, title) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Paciente');
            data.addColumn('number', 'Percentage');
            data.addRows([
                ['Dia 1', 4],
                ['Dia 2', 2],
                ['Dia 3', 5],
                ['Dia 4', 4],
                ['Dia 5', 3],
                ['Dia 6', 8],
                ['Dia 7', 6],
                ['Dia 8', 4],
            ]);

            var options = {
                title: title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById(elementId));
            chart.draw(data, options);
        }

        function drawLineChart(elementId, title) {
            var data = google.visualization.arrayToDataTable([
                ['Mês', 'Atendimentos'],
                ['Jan', 50],
                ['Fev', 58],
                ['Mar', 55],
                ['Abr', 78],
                ['Mai', 69],
                ['Jun', 53],
                ['Jul', 56],
                ['Ago', 65],
                ['Set', 55],
                ['Out', 65],
                ['Nov', 72],
                ['Dez', 69],
            ]);

            var options = {
                title: title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                hAxis: {title: 'Mês'},
                vAxis: {title: 'Atendimentos'},
                legend: 'none',
            };

            var chart = new google.visualization.LineChart(document.getElementById(elementId));
            chart.draw(data, options);
        }

        function drawBarColumnChart(elementId, title) {
            var data = google.visualization.arrayToDataTable([
                ['Mês', 'Qtde'],
                ['Jan', 42],
                ['Fev', 35],
                ['Mar', 55],
                ['Abr', 40],
                ['Mai', 39],
                ['Jun', 43],
                ['Jul', 45],
                ['Ago', 65],
                ['Set', 45],
                ['Out', 35],
                ['Nov', 48],
                ['Dez', 39],
            ]);
            
            var options = {
                title: title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                hAxis: {title: 'Mês'},
                vAxis: {title: 'Qtde'},
                legend: 'none',
            };   

            var chart = new google.visualization.ColumnChart(document.getElementById(elementId));
            chart.draw(data, options);
        }

        function drawAreaChart(elementId, title) {
            var data = google.visualization.arrayToDataTable([
                ['Especialidade', 'Atendimentos', { role: 'style' } ],
                ['Consulta Pediátrica Geral', 40, 'color: #FFA07A'],
                ['Consulta Cardiológica', 20, 'color: #98FB98'],
                ['Consulta Ortopédica', 30, 'color: #7B68EE'],
                ['Clínica Médica', 40, 'color: #EE82EE'],
                ['Consulta Ginecológica', 40, 'color: #A0522D'],
                ['Consulta Oncológica', 30, 'color: #A0522D'],
                ['Consulta Neurologia', 50, 'color: #A0522D'],
                ['Consulta Psiquiátrica', 20, 'color: #A0522D'],
                ['Consulta Oftalmológica', 30, 'color: #A0522D'],
            ]);

            var options = {
                title: title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                hAxis: {title: 'Especialidade'},
                vAxis: {title: 'Atendimentos'},
                legend: 'none',
            };

            var chart = new google.visualization.AreaChart(document.getElementById(elementId));
            chart.draw(data, options);
        }

        function drawComboChart(elementId, title) {
            var data = google.visualization.arrayToDataTable([
                ['Mês', '2022','2023', 'Average'],
                ['Jan', 4.2, 4.8, 4.5],
                ['Fev', 3.8, 4, 3.9],
                ['Mar', 3, 4.1, 3.55],
                ['Abr', 3.4, 4, 3.7],
                ['Mai', 2.9, 3.7, 3.3],
                ['Jun', 2.8, 4.3, 3.55],
                ['Jul', 4, 4.3, 4.15],
                ['Ago', 3.9, 4.2, 4.05],
                ['Set', 3.7, 4.4, 4.05],
                ['Out', 4.1, 4.2, 4.15],
                ['Nov', 3.3, 3.9, 3.6],
                ['Dez', 3.9, 4.1, 4],
            ]);

            var options = {
                title : title,
                titleTextStyle: {
                    fontSize: 18 // Tamanho da fonte da legenda
                },
                vAxis: {title: 'Avaliação'},
                hAxis: {title: 'Mês'},
                seriesType: 'bars',
                series: {2: {type: 'line'}}
            };

            var chart = new google.visualization.ComboChart(document.getElementById(elementId));
            chart.draw(data, options);
        }
    }, []);

    return (
        <>
        <style>
                {`
                :root {
                    --blue: rgb(0, 0, 128);
                    --orange:  #F49E00;
                    --white: #fff;
                    --gray: #f5f5f5;
                    --black1: #222;
                    --black2: #999;
                }

                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }

                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: var(--blue);
                    color: var(--white);
                    padding: 10px;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 1000;
                }

                .logo img {
                    width: 200px;
                }

                h1 {
                    margin: 0;
                    color: var(--white);
                    flex-grow: 1;
                    text-align: center;
                }

                .dashboard {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 90px; 
                }

                .kpiContainer {
                    position: fixed;
                    height: 100%;
                    width: 300px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                }

                .kpiContainer .card {
                    background: var(--white);
                    margin-bottom: 20px;
                    padding: 30px;
                    border-radius: 20px;
                    cursor: pointer;
                    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
                    display: flex;
                    justify-content: space-between; 
                    align-items: center;
                }

                .kpiContainer .card .numbers {
                    font-weight: 500;
                    font-size: 2.5rem;
                    color: var(--blue);
                }

                .kpiContainer .card .cardName {
                    color: var(--black2);
                    font-size: 1.1rem;
                    margin-top: 5px;
                }

                .kpiContainer .card .iconBx {
                    font-size: 2.5rem;
                    color: var(--blue);
                }

                .kpiContainer .card:hover {
                    background: var(--blue);
                }

                .kpiContainer .card:hover .numbers,
                .kpiContainer .card:hover .cardName,
                .kpiContainer .card:hover .iconBx {
                    color: var(--white);
                }

                .chartsContainer {
                    margin-left: 320px;
                    flex: 1;
                    padding: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .chart {
                    flex: 1 1 calc(48% - 10px); 
                    max-width: calc(48% - 10px);
                    height: 400px;
                    margin-bottom: 20px;
                    border: 1px solid #ddd;
                    background-color: var(--white);
                    box-sizing: border-box;
                }

                .chart-title {
                    font-size: 18px;
                    color: var(--black1);
                }

                .chart-labels {
                    font-size: 14px;
                    color: var(--black2);
                }

                a#voltar {
                    color: var(--white);
                    text-decoration: none;
                    font-size: 1.2rem;
                    margin-left: auto;
                    padding: 10px 20px;
                    background-color: var(--blue); /* Cor de fundo laranja */
                    border: 2px solid var(--blue); /* Borda laranja */
                    border-radius: 5px; /* Cantos arredondados */
                    transition: background-color 0.3s, color 0.3s; /* Transição suave nas cores */
                }

                a#voltar:hover {
                    background-color: var(--white); /* Altera a cor de fundo ao passar o mouse */
                    color: var(--blue); /* Altera a cor do texto ao passar o mouse */
                }

                @media screen and (max-width: 1200px) {
                    .chart {
                        flex: 1 1 calc(48% - 10px); 
                        max-width: calc(48% - 10px);
                    }
                }

                @media screen and (max-width: 768px) {
                    .dashboard {
                        flex-direction: column;
                    }

                    .chartsContainer {
                        margin-left: 0;
                    }

                    .kpiContainer {
                        position: relative;
                        width: 100%;
                    }

                    .chart {
                        flex: 1 1 calc(100% - 10px);
                        max-width: calc(100% - 10px);
                        height: 300px;
                    }
                }
                `}
            </style>
            <header>
                <div class="logo"><img src={imgLogoHC} alt="Logo instituto-da-crianca-hcfmusp"/></div>
                <h1>Dashboard</h1>
                <Link to="/demo" id="voltar">Voltar</Link>
            </header>

            <div class="dashboard">
                {/* Divs para os KPIs à esquerda */}
                <div class="kpiContainer">
                    <div class="card">
                        <div>
                            <div class="numbers">40</div>
                            <div class="cardName">Média de feedbacks recebidos por dia</div>
                        </div>
                        <div class="iconBx">
                            <ion-icon name="accessibility-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">4,1</div>
                            <div class="cardName">Satisfação por dia</div>
                        </div>
                        <div class="iconBx">
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">3,8</div>
                            <div class="cardName">Avaliação média do desempenho médico</div>
                        </div>
                        <div class="iconBx">
                            <ion-icon name="medkit"></ion-icon>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">61,5%</div>
                            <div class="cardName">Taxa de Satisfação do Paciente</div>
                        </div>
                        <div class="iconBx">
                            <ion-icon name="thumbs-up"></ion-icon>
                        </div>
                    </div>
                </div>

                {/* Gráficos à direita */}
                <div class="chartsContainer">
                    <div id="grafico1" class="chart"></div>
                    <div id="grafico2" class="chart"></div>
                    <div id="grafico3" class="chart"></div>
                    <div id="grafico4" class="chart"></div>
                    <div id="grafico5" class="chart"></div>
                    <div id="grafico6" class="chart"></div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
