const axios = require('axios');

// ターミナルで「node ./src/deleteUser.js」を実行

axios.delete('http://localhost:3001/user/2')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
