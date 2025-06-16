export const useCaseMermaidDiagram = `
flowchart TB
subgraph "HCM-система агрокомплекса"
    subgraph Actors["Действующие лица"]
        HR["HR-менеджер"]
        Admin["Администратор системы"]
        Manager["Руководитель отдела"]
        Employee["Сотрудник"]
        SysAdmin["Системный администратор"]
    end

    subgraph UseCases["Варианты использования"]
        UC1["Управление учетными записями"]
        UC2["Управление сотрудниками"]
        UC3["Расчет и выплата зарплаты"]
        UC4["Учет посещаемости"]
        UC5["Прогнозирование урожая"]
        UC6["Отслеживание производительности"]
        UC7["Формирование отчетов"]
        UC8["Интеграция с банковскими API"]
        UC9["GPS-мониторинг полей"]
        UC10["Обучение ML-модели"]
        UC11["Управление доступом"]
        UC12["Резервное копирование системы"]
        UC13["Просмотр личных данных"]
        UC14["Подача заявлений"]
    end
end

%% Связи HR-менеджера
HR --> UC2
HR --> UC3
HR --> UC4
HR --> UC7
HR --> UC14

%% Связи Администратора
Admin --> UC1
Admin --> UC11
Admin --> UC2

%% Связи Руководителя
Manager --> UC6
Manager --> UC7
Manager --> UC5
Manager --> UC4

%% Связи Сотрудника
Employee --> UC13
Employee --> UC14
Employee --> UC4

%% Связи Системного администратора
SysAdmin --> UC12
SysAdmin --> UC10
SysAdmin --> UC9
SysAdmin --> UC8
  `;

export const temporaryMermaidDiagram = `
sequenceDiagram
participant Employee as Сотрудник
participant Manager as Руководитель
participant PayrollSystem as Система расчета ЗП
participant BankAPI as Банковский API

note over Employee,BankAPI: Процесс расчета и выплаты заработной платы (временная диаграмма)

Employee->>Manager: Отправка табеля учета рабочего времени (28-30 число)
note right of Employee: Окончание расчетного месяца

Manager->>PayrollSystem: Проверка и утверждение табеля (1-3 число)
note right of Manager: Начало нового месяца

PayrollSystem->>PayrollSystem: Расчет зарплаты (3-5 число)
note right of PayrollSystem: Учет базовой ставки, надбавок, вычетов

PayrollSystem->>Manager: Предварительные расчеты на утверждение (5-6 число)

Manager->>PayrollSystem: Утверждение расчетов (6-7 число)

PayrollSystem->>BankAPI: Отправка платежного поручения (8-9 число)

BankAPI->>Employee: Выплата заработной платы (10 число)
note right of BankAPI: Установленный день выплаты зарплаты

Employee->>PayrollSystem: Получение расчетного листа (10-11 число)

note over Employee,BankAPI: Шкала времени: месячный цикл расчета зарплаты`;

export const ComponentMermaidDiagram = `
flowchart TB
subgraph HCMSystem["Система управления внутренними ресурсами персонала (HCM)"]
    subgraph PresentationLayer["Уровень представления"]
        WebUI["Веб-интерфейс"]
        MobileUI["Мобильное приложение"]
        
        WebUI --"отображает"--> MobileUI
    end
    
    subgraph ServiceLayer["Сервисный уровень"]
        APIGateway["API Gateway"]
        
        subgraph CoreServices["Основные сервисы"]
            AuthService["Сервис аутентификации"]
            EmployeeService["Сервис управления сотрудниками"]
            PayrollService["Сервис зарплаты"]
            AttendanceService["Сервис посещаемости"]
            AnalyticsService["Сервис аналитики"]
        end
        
        APIGateway --"маршрутизирует запросы"--> CoreServices
    end
    
    subgraph MLComponent["ML-компонент"]
        MLTraining["Модуль обучения"]
        MLInference["Модуль прогнозирования"]
        DataPipeline["Конвейер данных"]
        
        DataPipeline --"подготавливает данные для"--> MLTraining
        MLTraining --"создает модель для"--> MLInference
    end
    
    subgraph DataLayer["Уровень данных"]
        Database["База данных"]
        CacheLayer["Кэш-уровень"]
        FileStorage["Файловое хранилище"]
        
        CacheLayer --"ускоряет доступ к"--> Database
    end
    
    subgraph IntegrationLayer["Интеграционный уровень"]
        CRMConnector["Коннектор CRM"]
        BankConnector["Коннектор банковского API"]
        GPSConnector["Коннектор GPS"]
        IoTConnector["Коннектор IoT-устройств"]
    end
end

%% Межкомпонентные связи
PresentationLayer --"отправляет запросы"--> ServiceLayer
ServiceLayer --"использует"--> DataLayer
ServiceLayer --"запрашивает прогнозы"--> MLComponent
MLComponent --"читает/записывает данные"--> DataLayer
ServiceLayer --"использует внешние сервисы через"--> IntegrationLayer
IntegrationLayer --"сохраняет данные в"--> DataLayer`;

export const sequenceMermaidDiagram = `
sequenceDiagram
actor User
participant WebUI as Web Interface
participant API as API Gateway
participant Auth as Authentication Service
participant EmpService as Employee Service
participant MLService as ML Service
participant DB as Database
participant Bank as Bank API

%% Процесс авторизации
User->>WebUI: Ввод логина/пароля
WebUI->>API: Запрос авторизации
API->>Auth: Проверка учетных данных
Auth->>DB: Запрос данных пользователя
DB-->>Auth: Данные пользователя
Auth-->>API: Токен доступа
API-->>WebUI: Токен доступа
WebUI-->>User: Отображение дашборда

%% Запрос информации о сотруднике
User->>WebUI: Запрос списка сотрудников
WebUI->>API: GET /employees
API->>Auth: Проверка токена
Auth-->>API: Токен валиден
API->>EmpService: Запрос списка сотрудников
EmpService->>DB: Запрос данных сотрудников
DB-->>EmpService: Данные сотрудников
EmpService-->>API: Список сотрудников
API-->>WebUI: Список сотрудников
WebUI-->>User: Отображение списка сотрудников

%% Обработка зарплаты
User->>WebUI: Запуск обработки зарплаты
WebUI->>API: POST /payroll/process
API->>Auth: Проверка токена и прав
Auth-->>API: Доступ разрешен
API->>EmpService: Расчет зарплаты
EmpService->>DB: Получение данных по зарплате
DB-->>EmpService: Данные по зарплате
EmpService->>DB: Сохранение расчетов
DB-->>EmpService: Подтверждение сохранения
EmpService->>Bank: Отправка платежных данных
Bank-->>EmpService: Подтверждение приема данных
EmpService-->>API: Статус обработки
API-->>WebUI: Результат обработки
WebUI-->>User: Отображение результата

%% Прогнозирование урожая с помощью ML
User->>WebUI: Запрос прогноза урожая
WebUI->>API: GET /harvest/predict
API->>Auth: Проверка токена
Auth-->>API: Токен валиден
API->>MLService: Запрос прогноза
MLService->>DB: Получение исторических данных
DB-->>MLService: Исторические данные
MLService->>MLService: Обработка данных и прогнозирование
MLService->>DB: Сохранение результатов прогноза
DB-->>MLService: Подтверждение сохранения
MLService-->>API: Результаты прогноза
API-->>WebUI: Результаты прогноза
WebUI-->>User: Визуализация прогноза`;

export const classMermaidDiagram = `
classDiagram
class User {
    +id: int
    +username: string
    +password: string
    +email: string
    +role: string
    +is_active: boolean
    +last_login: datetime
    +authenticate()
    +change_password()
}

class Employee {
    +id: int
    +first_name: string
    +last_name: string
    +middle_name: string
    +birth_date: date
    +hire_date: date
    +position_id: int
    +department_id: int
    +salary: decimal
    +contact_info: string
    +user_id: int
    +calculate_performance()
    +get_work_history()
}

class Department {
    +id: int
    +name: string
    +manager_id: int
    +description: string
    +get_employees()
    +get_performance_metrics()
}

class Position {
    +id: int
    +title: string
    +description: string
    +min_salary: decimal
    +max_salary: decimal
    +get_employees()
}

class Attendance {
    +id: int
    +employee_id: int
    +date: date
    +check_in: time
    +check_out: time
    +status: string
    +calculate_hours()
}

class Payroll {
    +id: int
    +employee_id: int
    +period_start: date
    +period_end: date
    +base_salary: decimal
    +bonuses: decimal
    +deductions: decimal
    +total: decimal
    +status: string
    +calculate_total()
    +process_payment()
}

class HarvestData {
    +id: int
    +date: date
    +field_id: int
    +crop_type: string
    +quantity: decimal
    +quality_rating: decimal
    +employee_ids: int[]
    +calculate_efficiency()
}

class MLModel {
    +id: int
    +name: string
    +version: string
    +model_type: string
    +parameters: json
    +train_model()
    +predict()
    +evaluate_accuracy()
}

class Field {
    +id: int
    +name: string
    +area: decimal
    +location: json
    +crop_type: string
    +planting_date: date
    +expected_harvest_date: date
    +get_current_status()
}

User "1" -- "0..1" Employee : has
Employee "n" -- "1" Department : belongs to
Employee "n" -- "1" Position : has
Department "1" -- "1" Employee : managed by
Employee "1" -- "n" Attendance : has
Employee "1" -- "n" Payroll : has
Employee "n" -- "n" HarvestData : participates in
MLModel "1" -- "n" HarvestData : analyzes
Field "1" -- "n" HarvestData : produces`;

export const stateMermaidDiagram = `
stateDiagram-v2
[*] --> Создан

state "Жизненный цикл сотрудника" as Employee {
    Создан --> Активен : Принят на работу
    Активен --> В отпуске : Уход в отпуск
    Активен --> Больничный : Заболевание
    В отпуске --> Активен : Возвращение из отпуска
    Больничный --> Активен : Выздоровление
    Активен --> Приостановлен : Временное отстранение
    Приостановлен --> Активен : Восстановление
    Активен --> Уволен : Увольнение
    Уволен --> [*]
}

state "Жизненный цикл задания по сбору урожая" as Harvest {
    [*] --> Запланировано
    Запланировано --> В процессе : Начало работ
    В процессе --> Приостановлено : Плохие погодные условия
    Приостановлено --> В процессе : Улучшение условий
    В процессе --> Завершено : Полный сбор
    Завершено --> Проверено : Проверка качества
    Проверено --> Принято : Соответствие требованиям
    Проверено --> Отклонено : Не соответствует требованиям
    Отклонено --> Доработка : Исправление проблем
    Доработка --> Проверено : Повторная проверка
    Принято --> [*]
}

state "Жизненный цикл зарплаты" as Payroll {
    [*] --> Рассчитано
    Рассчитано --> На рассмотрении : Передача руководству
    На рассмотрении --> Утверждено : Утверждение
    На рассмотрении --> Отклонено : Отклонение
    Отклонено --> Пересчитано : Перерасчет
    Пересчитано --> На рассмотрении : Повторное рассмотрение
    Утверждено --> В обработке : Банк обрабатывает
    В обработке --> Выплачено : Успешная выплата
    В обработке --> Ошибка : Проблема выплаты
    Ошибка --> В обработке : Повторная попытка
    Выплачено --> [*]
}

state "Жизненный цикл ML-модели" as MLModel {
    [*] --> Инициализация
    Инициализация --> Сбор данных : Начало сбора данных
    Сбор данных --> Обработка : Предобработка данных
    Обработка --> Обучение : Подготовка к обучению
    Обучение --> Валидация : Проверка результатов
    Валидация --> Обучение : Недостаточная точность
    Валидация --> Развертывание : Приемлемая точность
    Развертывание --> Мониторинг : Внедрение в производство
        Мониторинг --> Обновление : Дрейф данных обнаружен
        Обновление --> Сбор данных : Запуск нового цикла
        Мониторинг --> [*] : Завершение использования
    }
`;
export const deploymentDiagram = `
 flowchart TB
subgraph ClientDevices["Клиентские устройства"]
    subgraph WebBrowser["Web Browser"]
        WebApp["Web Application"]
    end
    subgraph MobileDevice["Mobile Device"]
        MobileApp["Mobile Application"]
    end
end

subgraph FrontendServers["Frontend Servers"]
    subgraph LoadBalancer["Load Balancer"]
        NGINX["NGINX"]
    end
    subgraph AppServer["Application Server"]
        ReactUI["React UI"]
    end
end

subgraph BackendInfra["Backend Infrastructure"]
    subgraph APIServers["API Servers"]
        DjangoRESTAPI["Django REST API"]
    end
    subgraph AppServers["Application Servers"]
        BusinessLogic["Business Logic"]
    end
    subgraph AuthServer["Authentication Server"]
        AuthService["Auth Service"]
    end
end

subgraph MLInfra["ML Infrastructure"]
    subgraph MLTrainServer["ML Training Server"]
        TFTraining["TensorFlow Training"]
    end
    subgraph MLInferenceServer["ML Inference Server"]
        TFServing["TensorFlow Serving"]
    end
end

subgraph DBInfra["Database Infrastructure"]
    subgraph PostgreSQLMaster["PostgreSQL Master"]
        PostgreSQLPrimary["PostgreSQL Primary"]
    end
    subgraph PostgreSQLReplica["PostgreSQL Replica"]
        PostgreSQLSecondary["PostgreSQL Secondary"]
    end
end

subgraph IntegrationLayer["Integration Layer"]
    subgraph IntegrationServer["Integration Server"]
        IntegrationServices["Integration Services"]
    end
end

subgraph FieldHardware["Field Hardware"]
    subgraph IoTDevices["IoT Devices"]
        Sensors["Sensors"]
    end
    subgraph GPSTrackers["GPS Trackers"]
        GPSDevices["GPS Devices"]
    end
end

subgraph MonitoringDevOps["Monitoring & DevOps"]
    subgraph CICDServer["CI/CD Server"]
        Jenkins["Jenkins"]
    end
    subgraph MonitoringServer["Monitoring Server"]
        Monitoring["Prometheus/Grafana"]
    end
end

WebApp --"HTTPS"--> NGINX
MobileApp --"HTTPS"--> NGINX
NGINX --"HTTP"--> ReactUI
ReactUI --"HTTPS"--> DjangoRESTAPI
DjangoRESTAPI --"Internal"--> BusinessLogic
DjangoRESTAPI --"Internal"--> AuthService
BusinessLogic --"TCP/IP"--> PostgreSQLPrimary
PostgreSQLPrimary --"Replication"--> PostgreSQLSecondary
BusinessLogic --"gRPC"--> TFServing
TFTraining --"TCP/IP"--> PostgreSQLPrimary
TFServing --"TCP/IP"--> PostgreSQLPrimary
BusinessLogic --"Internal"--> IntegrationServices
IntegrationServices --"Various"--> ExternalSystems["External Systems"]
Sensors --"MQTT"--> IntegrationServices
GPSDevices --"HTTPS"--> IntegrationServices
Jenkins --"Deployment"--> AllComponents["All Components"]
Monitoring --"Monitoring"--> AllComponents`;

export const packageMermaidDiagram = `
classDiagram
class ui {
    «package»
}

class core {
    «package»
}

class api {
    «package»
}

class ml {
    «package»
}

class data {
    «package»
}

class integration {
    «package»
}

class ui_web {
    «package»
}

class ui_mobile {
    «package»
}

class core_auth {
    «package»
}

class core_employee {
    «package»
}

class core_payroll {
    «package»
}

class core_attendance {
    «package»
}

class core_report {
    «package»
}

class api_rest {
    «package»
}

class api_graphql {
    «package»
}

class ml_data_processing {
    «package»
}

class ml_training {
    «package»
}

class ml_prediction {
    «package»
}

class data_models {
    «package»
}

class data_repositories {
    «package»
}

class data_migrations {
    «package»
}

class integration_crm {
    «package»
}

class integration_bank {
    «package»
}

class integration_gps {
    «package»
}

class integration_iot {
    «package»
}

ui *-- ui_web
ui *-- ui_mobile

core *-- core_auth
core *-- core_employee
core *-- core_payroll
core *-- core_attendance
core *-- core_report

api *-- api_rest
api *-- api_graphql

ml *-- ml_data_processing
ml *-- ml_training
ml *-- ml_prediction

data *-- data_models
data *-- data_repositories
data *-- data_migrations

integration *-- integration_crm
integration *-- integration_bank
integration *-- integration_gps
integration *-- integration_iot

ui --> api : uses
api --> core : uses
core --> data : uses
core --> integration : uses
ml --> data : uses
integration --> api : uses`

export const activityMermaidDiagram = `
flowchart TD
Start([Начало]) --> Login[Вход в систему]
Login --> CheckAuth{Авторизация успешна?}
CheckAuth -->|Нет| LoginError[Отображение ошибки] --> Login
CheckAuth -->|Да| Dashboard[Главный экран системы]

Dashboard --> Choose{Выбор действия}

%% Сотрудники
Choose -->|Управление сотрудниками| EmpList[Просмотр списка сотрудников]
EmpList --> EmpAction{Действие?}
EmpAction -->|Просмотр| ViewEmp[Просмотр данных сотрудника]
EmpAction -->|Добавление| AddEmp[Добавление нового сотрудника]
EmpAction -->|Редактирование| EditEmp[Редактирование данных сотрудника]

AddEmp --> ValidateEmp{Данные корректны?}
EditEmp --> ValidateEmp
ValidateEmp -->|Нет| ShowEmpError[Отображение ошибки валидации]
ShowEmpError --> AddEmp
ValidateEmp -->|Да| SaveEmp[Сохранение данных]
SaveEmp --> EmpList
ViewEmp --> EmpList

%% Зарплата
Choose -->|Управление зарплатой| SelectPayPeriod[Выбор периода]
SelectPayPeriod --> CalculatePay[Расчет зарплаты]
CalculatePay --> ReviewPay[Проверка расчетов]
ReviewPay --> PayOk{Расчеты верны?}
PayOk -->|Нет| AdjustPay[Корректировка расчетов] --> ReviewPay
PayOk -->|Да| ApprovePay[Утверждение выплат]
ApprovePay --> ProcessPay[Обработка выплат]
ProcessPay --> BankIntegration[Интеграция с банком]
BankIntegration --> BankOk{Выплата успешна?}
BankOk -->|Нет| HandleBankError[Обработка ошибки банка] --> ProcessPay
BankOk -->|Да| NotifyPayment[Уведомление сотрудников]

%% ML и урожай
Choose -->|Прогнозирование урожая| SelectField[Выбор поля]
SelectField --> CollectData[Сбор данных]
CollectData --> ProcessMLData[Обработка данных]
ProcessMLData --> TrainModel{Модель обучена?}
TrainModel -->|Нет| TrainMLModel[Обучение модели]
TrainMLModel --> EvaluateModel[Оценка модели]
EvaluateModel --> ModelAccuracy{Точность приемлема?}
ModelAccuracy -->|Нет| AdjustModel[Корректировка модели] --> TrainMLModel
ModelAccuracy -->|Да| SaveModel[Сохранение модели]
TrainModel -->|Да| RunPrediction[Запуск прогнозирования]
SaveModel --> RunPrediction
RunPrediction --> VisualizePrediction[Визуализация прогноза]

%% Отчеты
Choose -->|Генерация отчетов| SelectReportType[Выбор типа отчета]
SelectReportType --> SetReportParams[Установка параметров отчета]
SetReportParams --> GenerateReport[Генерация отчета]
GenerateReport --> PreviewReport[Предварительный просмотр]
PreviewReport --> ReportOk{Отчет верен?}
ReportOk -->|Нет| AdjustReportParams[Корректировка параметров] --> GenerateReport
ReportOk -->|Да| ExportReport[Экспорт отчета]
ExportReport --> DownloadReport[Скачивание отчета]

%% Возврат к Dashboard
ViewEmp --> Dashboard
NotifyPayment --> Dashboard
VisualizePrediction --> Dashboard
DownloadReport --> Dashboard

Dashboard --> Logout[Выход из системы]
Logout --> End([Конец])`

export const techArchMicroservicesDiagram = `
flowchart LR
  subgraph HR["HR Service"]
    HR1["Employee Mgmt"]
    HR2["Payroll"]
    HR3["Performance"]
  end
  subgraph ML["ML Service"]
    ML1["Prediction"]
    ML2["Model Training"]
    ML3["Analytics"]
  end
  subgraph INT["Integration Service"]
    INT1["Banking API"]
    INT2["GPS Tracking"]
    INT3["CRM Sync"]
  end
  HR -->|"API"| GATEWAY
  ML -->|"API"| GATEWAY
  INT -->|"API"| GATEWAY
  GATEWAY["API Gateway<br/>- Authentication<br/>- Rate Limiting<br/>- Load Balancing"]
`;

export const techArchSystemDiagram = `
flowchart TB
  LB["Load Balancer"]
  GATEWAY["API Gateway<br/>- Authentication<br/>- Rate Limiting<br/>- Request Routing"]
  HR["HR Service<br/>- Employees<br/>- Payroll<br/>- Reports"]
  ML["ML Service<br/>- Models<br/>- Training<br/>- Predict"]
  INT["Integration Service<br/>- Bank APIs<br/>- GPS Data<br/>- CRM Sync"]
  NOTIF["Notification Service<br/>- Email/SMS<br/>- Push Notif.<br/>- System Alerts"]
  QUEUE["Message Queue (Redis)"]
  DBCLUSTER["Database Cluster<br/>Master DB | Replica DB"]

  LB --> GATEWAY
  GATEWAY --> HR
  GATEWAY --> ML
  GATEWAY --> INT
  GATEWAY --> NOTIF
  HR --> QUEUE
  ML --> QUEUE
  INT --> QUEUE
  NOTIF --> QUEUE
  QUEUE --> DBCLUSTER

  classDef main fill:#e0f7fa,stroke:#00897b,stroke-width:2px;
  class LB,GATEWAY,HR,ML,INT,NOTIF,QUEUE,DBCLUSTER main;
`;

// Диаграмма коммуникации (Communication Diagram)
// Показывает обработку заявки на отпуск
export const communicationMermaidDiagram = `
graph TB
    subgraph "Диаграмма коммуникации: Обработка заявки на отпуск"
        Employee[Сотрудник]
        HRSystem[HR Система]
        Manager[Руководитель]
        Database[База данных]
        EmailService[Email Сервис]
        
        Employee -->|1: подать заявку| HRSystem
        HRSystem -->|2: сохранить заявку| Database
        HRSystem -->|3: отправить уведомление| Manager
        EmailService -->|3.1: email уведомление| Manager
        Manager -->|4: рассмотреть заявку| HRSystem
        HRSystem -->|5: обновить статус| Database
        HRSystem -->|6: уведомить сотрудника| Employee
        EmailService -->|6.1: email результат| Employee
        
        style Employee fill:#e1f5fe
        style Manager fill:#e8f5e8
        style HRSystem fill:#fff3e0
        style Database fill:#f3e5f5
        style EmailService fill:#fce4ec
    end
`;

// Диаграмма композитной структуры (Composite Structure Diagram)
// Показывает внутреннюю структуру HR-модуля
export const compositeStructureMermaidDiagram = `
graph TB
    subgraph "HR Module - Композитная структура"
        subgraph "Employee Management Component"
            EmpService[Employee Service]
            EmpRepository[Employee Repository]
            EmpValidator[Employee Validator]
        end
        
        subgraph "Payroll Component"
            PayrollService[Payroll Service]
            SalaryCalculator[Salary Calculator]
            PayrollRepository[Payroll Repository]
        end
        
        subgraph "Leave Management Component"
            LeaveService[Leave Service]
            LeaveApproval[Leave Approval]
            LeaveRepository[Leave Repository]
        end
        
        subgraph "External Interfaces"
            BankAPI[Bank API Port]
            EmailPort[Email Port]
            GPSPort[GPS Port]
        end
        
        EmpService <--> EmpRepository
        EmpService <--> EmpValidator
        PayrollService <--> SalaryCalculator
        PayrollService <--> PayrollRepository
        PayrollService <--> BankAPI
        LeaveService <--> LeaveApproval
        LeaveService <--> LeaveRepository
        LeaveService <--> EmailPort
        EmpService <--> PayrollService
        EmpService <--> LeaveService
        
        style EmpService fill:#e3f2fd
        style PayrollService fill:#e8f5e8
        style LeaveService fill:#fff3e0
        style BankAPI fill:#ffebee
        style EmailPort fill:#f1f8e9
        style GPSPort fill:#fce4ec
    end
`;

// Диаграмма обзора взаимодействия (Interaction Overview Diagram)
// Показывает процесс найма сотрудника
export const interactionOverviewMermaidDiagram = `
flowchart TD
    Start([Начало процесса найма]) --> CheckVacancy{Проверка вакансии}
    
    CheckVacancy -->|Вакансия доступна| CollectDocs[Сбор документов]
    CheckVacancy -->|Вакансии нет| Reject[Отклонить кандидата]
    
    CollectDocs --> ValidateDocs{Валидация документов}
    ValidateDocs -->|Документы корректны| Interview[Проведение интервью]
    ValidateDocs -->|Документы некорректны| RequestFix[Запрос исправлений]
    
    RequestFix --> CollectDocs
    
    Interview --> EvaluateCandidate{Оценка кандидата}
    EvaluateCandidate -->|Подходит| CheckReferences[Проверка рекомендаций]
    EvaluateCandidate -->|Не подходит| Reject
    
    CheckReferences --> FinalDecision{Финальное решение}
    FinalDecision -->|Принять| CreateProfile[Создание профиля сотрудника]
    FinalDecision -->|Отклонить| Reject
    
    CreateProfile --> SetupAccess[Настройка доступов]
    SetupAccess --> SendWelcome[Отправка welcome-пакета]
    SendWelcome --> End([Завершение])
    
    Reject --> End
    
    style Start fill:#e8f5e8
    style End fill:#ffebee
    style CheckVacancy fill:#e3f2fd
    style Interview fill:#fff3e0
    style CreateProfile fill:#f3e5f5
`;

// Диаграмма объектов (Object Diagram)
// Показывает снимок системы в момент расчета зарплаты
export const objectMermaidDiagram = `
graph TB
    subgraph "Снимок системы: Расчет зарплаты за март 2025"
        subgraph "Объекты сотрудников"
            emp1["👤 employee1: Employee<br/>id: 101<br/>name: 'Иван Петров'<br/>position: 'Агроном'<br/>baseSalary: 80000<br/>department: 'Растениеводство'"]
            
            emp2["👤 employee2: Employee<br/>id: 102<br/>name: 'Мария Сидорова'<br/>position: 'HR Менеджер'<br/>baseSalary: 95000<br/>department: 'HR'"]
        end
        
        subgraph "Объекты рабочего времени"
            timesheet1["📋 timesheet1: Timesheet<br/>employeeId: 101<br/>month: 'март 2025'<br/>workedHours: 176<br/>overtimeHours: 8<br/>sickDays: 0"]
            
            timesheet2["📋 timesheet2: Timesheet<br/>employeeId: 102<br/>month: 'март 2025'<br/>workedHours: 168<br/>overtimeHours: 0<br/>sickDays: 2"]
        end
        
        subgraph "Объекты расчета зарплаты"
            payroll1["💰 payroll1: PayrollCalculation<br/>employeeId: 101<br/>baseSalary: 80000<br/>bonus: 15000<br/>overtime: 3000<br/>deductions: 12000<br/>netSalary: 86000"]
            
            payroll2["💰 payroll2: PayrollCalculation<br/>employeeId: 102<br/>baseSalary: 95000<br/>bonus: 10000<br/>overtime: 0<br/>deductions: 13500<br/>netSalary: 91500"]
        end
        
        subgraph "Объект периода расчета"
            period["📅 payrollPeriod: PayrollPeriod<br/>year: 2025<br/>month: 3<br/>startDate: '01.03.2025'<br/>endDate: '31.03.2025'<br/>status: 'В процессе'"]
        end
        
        emp1 --> timesheet1
        emp2 --> timesheet2
        timesheet1 --> payroll1
        timesheet2 --> payroll2
        period --> payroll1
        period --> payroll2
        
        style emp1 fill:#e3f2fd
        style emp2 fill:#e3f2fd
        style timesheet1 fill:#e8f5e8
        style timesheet2 fill:#e8f5e8
        style payroll1 fill:#fff3e0
        style payroll2 fill:#fff3e0
        style period fill:#f3e5f5
    end
`;
