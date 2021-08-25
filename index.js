const express = require('express');
const app = express();
const router = require('./route/route');
const path = require('path');


app.set('port',3000);

app.set('views','view');

app.set('view engine','ejs');

app.use(router);

app.use(express.static(path.join('public')));

/*app.get('/',(req,res)=>{
	res.render('index');
})*/

app.listen(app.get('port'),()=>{
	console.log("sevicio iniciado en el puerto:", app.get('port'));
})
