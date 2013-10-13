Экзаменационное задание для ШРИ

Выпускной альбом
---------------

Установка

    git clone https://github.com/phpprog/shri-exam.git
    cd shri-exam
    npm i

В корне лежит папка json - в ней файлы с данными для сайта, которые должны подгружаться с удалённого сервера.
Путь к серверу/папке прописывается в /blocks/i-api-request/i-api-request.priv.js


Сборка и запуск проекта
---------------

    ./node_modules/.bin/enb make
    node pages/index/index.server.js --socket 3000

Запускать по адресу http://127.0.0.1:3000


Демонстрационная версия
---------------

Здесь: http://t1.kiev.ua:3000