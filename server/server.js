//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');
//globals
const PORT = 5000;
let shells = [{ type: 'Conch', color: 'pink' },
{ type: 'Blue', color: 'blue' }]
//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//spins
app.listen(PORT, () => {
    console.log(`server is up and running on ${PORT}`);

})

app.get('/shells', (req, res) => {
    console.log('in / GET');
    res.send(shells);
})