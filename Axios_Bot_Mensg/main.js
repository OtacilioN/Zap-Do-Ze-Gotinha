const {token_tel} = require('./token.js');
const axios = require('axios');
url='https://api.telegram.org/bot'+token_tel+'/sendMessage';
msg = `
É
`;
id = [643618581,484030385,448069573,760996646];
id.forEach(element => {
    axios.get(url, {
        params: {
          text: msg,
          chat_id:element
        }
      }).then(res=>{ 
          console.log("Mensage Sent");
        //   console.log(res);
      }).catch(err=>{
          console.log("ERROR",err);
      });
});

// console.log(token_tel);