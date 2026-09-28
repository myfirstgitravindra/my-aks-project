const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v2';

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from ${VERSION} 👋</h1>
    <p>Served by pod: <b>${os.hostname()}</b></p>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Server (${VERSION}) listening on port ${PORT}`);
});
