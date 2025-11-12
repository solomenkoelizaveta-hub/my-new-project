const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body>
        <h1>Мое приложение работает!</h1>
        <p>Версия: 1.0.0</p>
        <p>Время запуска: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Сервер запущен на порту 3000');
});
