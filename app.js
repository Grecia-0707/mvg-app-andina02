const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Andina Market</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Poppins', sans-serif;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .card {
                background: #ffffff;
                padding: 40px 50px;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                text-align: center;
                max-width: 450px;
                width: 90%;
                border-top: 5px solid #4f46e5;
            }
            h1 {
                font-size: 2.2rem;
                color: #1f2937;
                margin-bottom: 10px;
                font-weight: 700;
            }
            .badge {
                display: inline-block;
                background-color: #e0e7ff;
                color: #4f46e5;
                padding: 6px 16px;
                font-size: 0.9rem;
                font-weight: 600;
                border-radius: 20px;
                margin-bottom: 20px;
            }
            p {
                font-size: 1rem;
                color: #6b7280;
                line-height: 1.5;
            }
            .footer-note {
                margin-top: 25px;
                font-size: 0.85rem;
                color: #9ca3af;
                border-top: 1px solid #f3f4f6;
                padding-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Andina Market</h1>
            <div class="badge">Versión 1.0</div>
            <p>Desplegado automáticamente desde GitHub con éxito 🚀</p>
            <div class="footer-note">Infraestructura AWS &bull; Ubuntu</div>
        </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
