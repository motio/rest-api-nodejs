const axios = require('axios');

// ターミナルで「node ./src/getAllUser.js」を実行
axios.get('http://localhost:3001/user')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
