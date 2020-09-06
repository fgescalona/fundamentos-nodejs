const http = require("http");

http.createServer(router).listen(3000);

function router(request, response) {
  console.log("Nueva petición");
  console.log(request.url);

  let url = request.url;

  switch (url) {
    case "/hola":
      response.write("Hola que tal");
      response.end();
      break;

    default:
      response.write("Error 404");
      response.end();
      break;
  }

  //Escribir una cabecera
  //   response.writeHead(201, { "Content-Type": "text/plain" });

  //   //Escribir respuesta al usuario
  //   response.write("Hola, ya se usar HTTP de NodeJS");

  //   //terminar la petición
  //   response.end();
}

console.log("Escuchando http en el puerto 3000");
