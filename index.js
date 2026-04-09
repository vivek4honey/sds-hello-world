const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>SDS ERP</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-50 flex items-center justify-center min-h-screen">
      <div class="bg-white rounded-2xl shadow p-12 text-center">
        <h1 class="text-4xl font-bold text-blue-700 mb-4">Hello World!</h1>
        <p class="text-gray-500">SDS ERP is alive. First deployment successful.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});