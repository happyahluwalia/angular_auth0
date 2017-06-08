var express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');

const Deals = require('./deals');
// Public route for deals
app.get('/api/deals/public', function(req,res,next){
    let deals = Deals.publicDeals;
    res.json(deals);
});

//Private route for deals
//TODO : Need to protect the private routes. Check for token
app.get('/api/deals/private', function(req,res,next){
    let privateDeals = Deals.privateDeals;
    res.json(privateDeals);
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
