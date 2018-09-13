//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');
//globals
const PORT = 5000;
//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//spins
app.listen(PORT, ()=>{
    console.log(`server is up and running on ${PORT}`);
    
})