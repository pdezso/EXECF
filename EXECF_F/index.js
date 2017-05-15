var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.param('func_name', function(req, res, next, func_name) {

    if ( func_name == 'undefined' || func_name == 'aa' ) {
             req.params.func_name = 'GET_FUNCTION_LIST'
    }
    next();


});

app.get('/api/funcname/:func_name', function(req, res) {

  var func_name = req.params.func_name;
  res.json({notes: "Function called: "+func_name })

});

app.post('/api/function', function(req,res) {

  var func_name = req.body.funcname;
  res.json({notes: "Post Function called: "+func_name});

});

app.listen(3000);
