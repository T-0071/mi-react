import http from '../utils/httpclient.js'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import React from 'react'

import Index from '../components/index/index.js'
import Classify from '../components/classify/classify.js'
import Car from '../components/car/car.js'
import Users from '../components/users/users.js'
//婷婷
import Login from '../components/users/login/login.js'
import Register from '../components/users/register/register.js'
import SettleAccounts from '../components/car/settleAccounts/settleAccounts.js'
import Quit from '../components/users/quit/quit.js'
import ShippingAddress from '../components/users/shippingAddress/shippingAddress.js'
import SAconsig from '../components/users/SAconsig/SAconsig.js'



import Datelist from '../components/datelist/goods.js'

// 方汉佳
import List from '../components/list/list.js';
import Search from '../components/search/search.js';
import Order from '../components/order/order.js'


import ServerLogin from '../components/server/serverlogin.js'
import ServerHome from '../components/server/serverhome.js'
import Serverproduct from '../components/server/serverproduct.js'
import Serverusers from '../components/server/serverusers.js'

// 方汉佳
// 封一个检测用户是否登陆的函数
let isLogin = (nextState,replace,next)=>{
    // 获取用户是否已经登陆
    http.post('getStatus',{}).then(res=>{
        if(!res.status){
            // 跳转到登陆页面
            replace({pathname:'/login'});
            // 删除用户存储
            window.localStorage.removeItem('un');
            next();
        }else{
            next();
        }
    })
}



export default class Routers extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Index} />
                <Route path="/classify" component={Classify} />
                <Route path="/car(/:p_id)" component={Car} onEnter={isLogin}/>
                <Route path="/goods(/:product_id)" component={Datelist} />
            
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/settleAccounts" component={SettleAccounts} />
                <Route path="/list(/:type)(/:num)" component={List} />
                <Route path="/search" component={Search} />
                <Route path="/serverlogin" component={ServerLogin} />
                <Route path="/serverhome" component={ServerHome}>
                        <IndexRoute component={Serverusers} />
                        <Route path="/serverhome/serveruser" component={Serverusers} />
                        <Route path="/serverhome/serverproduct" component={Serverproduct} />
                </Route>
                <Route path="/quit" component={Quit} />
                <Route path="/order" component={Order} />
                <Route path="/shippingAddress" component={ShippingAddress} />
                <Route path="/SAconsig(/:id)" component={SAconsig} />
                
                
                
            </Router>
        )
    }
}

