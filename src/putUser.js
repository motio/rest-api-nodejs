const axios = require('axios');

// ターミナルで「node ./src/updateUser.js」を実行

const putData = {
  username: 'satou',
  email: 'info@satou.com',
};
axios.put('http://localhost:3001/user/1', putData)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
