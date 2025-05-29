<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Система управления внутренними ресурсами персонала (HCM) в агрокомплексе</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --primary-color: #008575;
            --secondary-color: #ff5e0e;
            --dark-color: #695d46;
            --light-color: #f1f3f4;
            --text-color: #333;
            --bg-color: #ffffff;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 20px;
        }
        
        .title {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 42px;
            font-weight: 700;
            color: var(--dark-color);
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 24px;
            color: var(--dark-color);
            margin-bottom: 20px;
        }
        
        .authors {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 18px;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .date {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 16px;
            color: var(--dark-color);
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'PT Sans Narrow', sans-serif;
            color: var(--primary-color);
            margin-top: 30px;
            margin-bottom: 15px;
        }
        
        h1 {
            font-size: 32px;
            border-bottom: 2px solid var(--secondary-color);
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 28px;
        }
        
        h3 {
            font-size: 24px;
        }
        
        p {
            margin-bottom: 15px;
        }
        
        ul, ol {
            margin-bottom: 20px;
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .swot-table, .analysis-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .swot-table th, .swot-table td, 
        .analysis-table th, .analysis-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        .swot-table th, .analysis-table th {
            background-color: var(--primary-color);
            color: white;
            font-weight: 500;
        }
        
        .swot-table tr:nth-child(even), 
        .analysis-table tr:nth-child(even) {
            background-color: var(--light-color);
        }
        
        .diagram-container {
            margin: 30px 0;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .diagram-title {
            font-family: 'PT Sans Narrow', sans-serif;
            font-size: 22px;
            color: var(--primary-color);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .diagram-title i {
            margin-right: 10px;
            color: var(--secondary-color);
        }
        
        .diagram-description {
            margin-bottom: 15px;
            font-style: italic;
            color: #666;
        }
        
        .highlight {
            background-color: rgba(255, 94, 14, 0.1);
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: 500;
        }
        
        .timeline {
            position: relative;
            max-width: 1000px;
            margin: 30px auto;
        }
        
        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--primary-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }
        
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;
            box-sizing: border-box;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -12px;
            background-color: white;
            border: 4px solid var(--secondary-color);
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
        
        .left {
            left: 0;
        }
        
        .right {
            left: 50%;
        }
        
        .left::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            right: 30px;
            border: medium solid var(--primary-color);
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent var(--primary-color);
        }
        
        .right::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            left: 30px;
            border: medium solid var(--primary-color);
            border-width: 10px 10px 10px 0;
            border-color: transparent var(--primary-color) transparent transparent;
        }
        
        .right::after {
            left: -12px;
        }
        
        .timeline-content {
            padding: 20px;
            background-color: white;
            position: relative;
            border-radius: 6px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .timeline-date {
            color: var(--secondary-color);
            font-weight: bold;
        }
        
        @media screen and (max-width: 768px) {
            .timeline::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item::before {
                left: 60px;
                border: medium solid var(--primary-color);
                border-width: 10px 10px 10px 0;
                border-color: transparent var(--primary-color) transparent transparent;
            }
            
            .left::after, .right::after {
                left: 18px;
            }
            
            .right {
                left: 0%;
            }
        }
        
        .footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="title">Система управления внутренними ресурсами персонала (HCM) в агрокомплексе</h1>
            <p class="subtitle">04.04.2025</p>
            <div class="authors">
                <p>Чесноков Артемий<br>Хрусталев Влад</p>
                <p class="date">346 аудитория</p>
            </div>
        </header>

        <div class="section">
            <h1>Описание проекта</h1>
            <h2>Цель проекта</h2>
            <p>Проект представляет собой разработку интегрированной системы управления персоналом (HCM) для агрокомплекса. Основная цель — оптимизация учета сотрудников, автоматизация бизнес-процессов и внедрение машинного обучения (ML) для анализа данных и автоматизации сбора урожая.</p>
        </div>

        <div class="section">
            <h1>Этапы</h1>
            
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>Инициализация проекта</h3>
                        <p class="timeline-date">Январь 2025 г. – Февраль 2025 г.</p>
                        <ul>
                            <li>Определение требований к системе (HR-функционал, учет сотрудников, ML-модель)</li>
                            <li>Формирование команды разработки</li>
                            <li>Определение технологического стека (Python, Django, PostgreSQL, React, TensorFlow)</li>
                            <li>Создание продающего сайта агрокомплекса</li>
                            <li>Оценка бюджета и определение ключевых KPI</li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <h3>Планирование проекта</h3>
                        <p class="timeline-date">Февраль 2025 г. – Март 2025 г.</p>
                        <ul>
                            <li>Разработка архитектуры системы</li>
                            <li>Создание UML-диаграмм основных модулей</li>
                            <li>Определение интеграций (CRM, API банков для выплат зарплат, GPS-мониторинг полей)</li>
                            <li>Проектирование базы данных и алгоритмов ML-модели</li>
                            <li>Определение этапов тестирования и контроля качества</li>
                            <li>Планирование работы команд (frontend, backend, ML, DevOps)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>Исполнение и координация действий</h3>
                        <p class="timeline-date">Март 2025 г. – Декабрь 2025 г.</p>
                        <ul>
                            <li><strong>Март – Апрель:</strong> Разработка MVP внутренней системы (базовый функционал учета сотрудников)</li>
                            <li><strong>Май – Август:</strong> Реализация ML-модуля для автоматизации сбора урожая. Разработка аналитики производительности сотрудников</li>
                            <li><strong>Сентябрь – Октябрь:</strong> Тестирование системы и устранение ошибок</li>
                            <li><strong>Ноябрь – Декабрь:</strong> Интеграция системы в агрокомплекс и обучение сотрудников</li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <h3>Контроль и оценка проекта</h3>
                        <p class="timeline-date">Январь 2026 г. – Февраль 2026 г.</p>
                        <ul>
                            <li>Мониторинг отзывов сотрудников об удобстве системы</li>
                            <li>Анализ посещаемости продающего сайта</li>
                            <li>Оценка точности предсказаний ML-модели</li>
                            <li>Производительность системы (нагрузочное тестирование)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>Завершение проекта и оценка эффективности</h3>
                        <p class="timeline-date">Март 2026 г.</p>
                        <ul>
                            <li>Визуализация диаграмм пользователей (график роста пользователей системы)</li>
                            <li>Проведение финального SWOT-анализа</li>
                            <li>Подготовка отчета о рентабельности системы</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        

    <footer class="footer">
        <p>© 2025 Система управления внутренними ресурсами персонала (HCM) в агрокомплексе</p>
        <p>Чесноков Артемий, Хрусталев Влад</p>
    </footer>

    <script type="module">
        import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            },
            sequence: {
                diagramMarginX: 50,
                diagramMarginY: 10,
                actorMargin: 50,
                width: 150,
                height: 65,
                boxMargin: 10,
                boxTextMargin: 5,
                noteMargin: 10,
                messageMargin: 35,
                mirrorActors: true,
                bottomMarginAdj: 1,
                useMaxWidth: true
            },
            gantt: {
                titleTopMargin: 25,
                barHeight: 20,
                barGap: 4,
                topPadding: 50,
                leftPadding: 75,
                gridLineStartPadding: 35,
                fontSize: 11,
                fontFamily: '"Roboto", sans-serif',
                numberSectionStyles: 4,
                axisFormat: '%Y-%m-%d'
            }
        });
    </script>
        </body>
          </html>