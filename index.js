const app = require('./server.js')
const port =  process.env.PORT||5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
    console.log(`Website: \x1b[33m%s\x1b[0m`, `http://localhost:${port}`);
  });
  
  