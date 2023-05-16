const axios = require('axios');

// ターミナルで「node ./src/getUser.js」を実行
axios.get('http://localhost:3001/user/1')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
