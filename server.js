var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log(`Server listening on port ${app.get('port')}`);
});
