var express=require('express');
var bodyParser = require('body-parser');

var router=express.Router();
var server=express();
var todo=[];

router.use(express.static(__dirname+'/public'));
router.use(bodyParser());
router.route('/todo')
  .get(function(request,response){
    response.send(todo)
  })
  .post(function(request,response){
    console.log(request.body)
    todo.push(request.body)
    response.send('success');
  })
  .delete(function(request,response){
    console.log('body',request.body)
    delete todo[request.body.index]
    console.log(todo)
    response.send('success');
  })

server.use('/',router);
server.listen(3000);
