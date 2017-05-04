var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db=mongojs('mongodb://becky:whitec@ds131621.mlab.com:31621/mytasklist',['tasks']);

//Get all tasks
router.get('/tasks',function(req,res,next){
//  res.send('TASK API');
 db.tasks.find(function(err,tasks){

   if(err){
    res.send(err);
  }
   res.json(tasks);


 });
});


//Get Single task
router.get('/tasks/:id',function(req,res,next){
//  res.send('TASK API');
 db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){

   if(err){
    res.send(err);
  }
   res.json(task);


 });
});


module.exports=router;
