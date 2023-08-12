const path = require('path');
const express = require('express');
const app = express();

const adminRoutes = require('./router/admin');
const shopRoutes = require('./router/shop');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes);   // we used here '/admin' because we have multiple js codes thats why we place file name as the path ,, to understand where it was came from
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});






app.listen(3000);     //same  ->      { ... // const server = http.createServer(app);
                                        // server.listen(3000);     ...}