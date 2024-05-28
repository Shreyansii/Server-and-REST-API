const express= require('express')
const app=express();

app.get('/',function(req, res){
    res.send('Welcome to her page.. How can I help you ?')
})

app.get('/blogs',(req, res)=>{
    res.send('sure, i would love to provide you with her writings!')
})

app.get('/articles',(req, res)=>{
    var article_genres = {
        name: 'documentary',
        is_long: true
    }
    res.send('welcome to her documentary portal!')
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})