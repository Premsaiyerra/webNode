const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const admindata = require('./router/admin');
const shopRoutes = require('./router/shop');



app.use(bodyparser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '/public')));

app.use('/admin', admindata.routers);   // we used here '/admin' because we have multiple js codes thats why we place file name as the path ,, to understand where it was came from
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render('404',{Pagetitle:'ERROR'})
});






app.listen(3000);     //same  ->      { ... // const server = http.createServer(app);
                                        // server.listen(3000);     ...}