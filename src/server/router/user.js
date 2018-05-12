const db = require('../api/db.js')
const apiResult = require('../api/apiResult.js')

module.exports = {
    account(app){
        //注册
        app.post('/register',async (req,res) =>{
            let username = req.body.username;
            let password = req.body.passowrd;

            let result = await db.select('user',{username});

            if(result.status){
                res.send(apiResult(false));
            } else {
                let result = await db.insert('user',{username,password})
                    console.log(result);
                send(result);
            }
        });
        //登录
        app.post('/login',async (req,res) =>{
            let username = req.body.username;
            let password = req.body.password;

            let result = await db.select('user',{username,password});

            if(result.status){
                res.send(result.status);
            } else {
                res.send(result);
            }
        })
    }
}