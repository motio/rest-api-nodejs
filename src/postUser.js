const axios = require('axios');

// ターミナルで「node ./src/createUser.js」を実行

const postData = {
  username: 'sato',
  email: 'info@sato.com',
};
axios.post('http://localhost:3001/user', postData)
  .then((result) => console.log(result.postData))
  .catch((error) => console.log(error));
