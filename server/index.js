var config=require("./config.json");



module.exports=function(app){
  app.get('/api/hotelData', async (req, res,next)=> {
    try{
      const db = req.app.locals.db;
      const perPage = 100;
    //  var page = parseInt(req.query.page);
    var page=0; 
    page+=1;
      const hotelData = await db.collection(config.db.connection.collection).find({}).toArray();
        if(hotelData){
          res.send(hotelData);
        }
        else{
          res.sendStatus(404);
        }
    }
    catch(err){
        next(err);
    }
  });
   
};
