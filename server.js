const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const serverRoutes = require('./api/routes');
const cors = require('cors');

// const authMiddleware = require('./api/middleware/auth.middleware');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({extended: false}));
    server.use(cookieParser());
    server.use(cors());

    server.use('/api', serverRoutes)

    // Hanle iwth next
    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
