const fs = require('fs')
const reqHandler = (req, res) => {


    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> button</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" id=""><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end('<h1> see u next time</h1>');

    }

    if (url === '/message' && method === 'POST') {    // if this 2 conditions statisfy then it allow
        const body = []; // an array
        req.on('data', (chunk) => {          //
            console.log(chunk);              // this will help to push the message (or) text u write in localhost 
            body.push(chunk);                //   in to body
        });
        return req.on('end', () => {
            const parsebody = Buffer.concat(body).toString();     //   whith the help of body we can store the message 
            const message = parsebody.split('=')[1];              //   this is used to store message in message.txt and translate in to string
            fs.writeFile('message.txt', message, (err) => {           //    which we write in localhost
                res.statusCode = 302;
                res.setHeader('location', '/');  // this helps you site to stay in your own site and it will not allow to me to another site eg:error site ...etc
                return res.end();
            });
        });


    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title> node js</title></head>');
    res.write('<body><h1> hii this is prem</h1></body>');
    res.write('</html>');
    res.end('<h1> see u next time</h1>');
}
module.exports = reqHandler;