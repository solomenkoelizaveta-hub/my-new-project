const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/html; charset=utf-8'  // ← ДОБАВЬТЕ charset=utf-8
  });
  res.end(`
    <html>
      <body>
        <h1>Мое приложение ОБНОВЛЕНО!</h1>
        <p>Версия: 2.0.0</p>
        <p>Время запуска: ${new Date().toISOString()}</p>
        <p>Это автоматическое обновление через Watchtower!</p>
      </body>
    </html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Сервер запущен на порту 3000');
});
