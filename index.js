const express = require('express')

const app = express() //this is making app a server

//static folder should be where we store public static things like image, fonts, css
app.use(express.static('public'))

// app.use(function(req,res,next){
//   console.log('first middleware')
//   next()
// })
//
// app.use(function(req,res,next){
//   console.log('second middleware')
//   next()
// })

app.get('/',function(req,res){
  res.send('index.html')
  res.send('my first response')
})

app.get('/about',function(req,res){
  res.send('about page')
})
app.get('/faq',function(req,res){
  res.send('new stuffs')
})

app.get("/about/:name/:lastname/*", function(req, res) {
  res.send("Hello " + req.params.name + " " + req.params.lastname); //this will give a string that looks like HTML P
  res.send(req.params) //this gives it as an object
});

app.listen(3000, function(){
  console.log('express is running on port 3000');
})
