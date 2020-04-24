const express = require('express');

const app = express();

app.use(express.static('./dist/skd-pathfinder2e'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/skd-pathfinder2e/'}),
);

app.listen(process.env.PORT || 8080);
