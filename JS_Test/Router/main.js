module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('nodejs.html');
     });
     app.get('/python',function(req,res){
        res.render('python.html');
    });
}