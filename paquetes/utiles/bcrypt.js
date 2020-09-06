const bcrypt = require("bcrypt");

const password = "1234segura!";

bcrypt.hash(password, 5, (error, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (error, resultado) => {
    //console.log(error);
    console.log(resultado);
  });
});
