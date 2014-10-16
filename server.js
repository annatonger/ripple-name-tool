var http=require('http')
var express=require('express')
var app=express()
var server=http.createServer(app)
var bp=require('body-parser')
app.use(bp.json())
server.listen(3000)

//in browser, go to http://127.0.0.1:3000/

var ecstatic=require('ecstatic')
app.use(ecstatic('./web'))
app.post('/submitname',function(req,res){
	console.log(req.headers)
	console.log(req.method,req.url)
	console.log("here is the body",req.body)
})