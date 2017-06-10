var express = require('express');
const app = express();
//Integration with Auth0 apis
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://happysingh.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://localhost:4200/',
    issuer: "https://happysingh.auth0.com/",
    algorithms: ['RS256']
});


// const cors = require('cors');
const bodyParser = require('body-parser');

const Deals = require('./deals');
// Public route for deals
app.get('/api/deals/public', function(req,res,next){
    let deals = Deals.publicDeals;
    res.json(deals);
});

//Private route for deals
//We invoke the jwtCheck only for private deals and not for public
//This way only private deals are protected
app.get('/api/deals/private', jwtCheck, function(req,res,next){
    let privateDeals = Deals.privateDeals;
    res.json(privateDeals);
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
