var http = require('http'),
    url = process.argv[2];

http.get(url, function (response) {

    response.setEncoding('utf8');


/*
    solution:

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })


*/

    response.on("data", function (data) {
        console.log(data);
    });
});
