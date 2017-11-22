const redis = require('redis');
const report = require('../models/reports');
const sub = redis.createClient(), pub = redis.createClient();  //定义两个client，一个用于subscribe，一个用于publish。
const img = require('../base64/001');
module.exports = function (io) {
    sub.subscribe('test_channel', function(e){
        console.log('subscribe channel : ' + 'test_channel');
    });

    let home = io.of('/').on('connection',
        function(socket){
            console.log(`one connection now.`);
            home.emit('news', {hello: 'with react.js'});  //发送事件时，可以使用命名空间名称，也可用socket。
            socket.emit('add item', {id:socket.id, name:`libai`, content:`静夜思`});
            socket.on('from react', function(data){
                console.log(`line 17:${data.msg}`);
                console.log(`line 18`);
            });
            socket.on('my other event', function (data) {   //监听事件时必须使用socket，否则接收不到数据。
                //console.log(data);
            });
            socket.on('report', function(data){
                //console.log(data);
            });
            socket.on('speak', function(data){
                pub.publish('test_channel', data); //向频道publish消息
                socket.emit('image',img);
            });
            sub.on('message',function(error, msg){ //订阅频道
                if(error) console.log(error);
                home.emit('redisMsg',msg);
            });
            socket.on('add report', function(data){ //参数列表中加入error，就会拿不到data，原因未知！
                socket.broadcast.emit('new report from others', data);
                report.create({
                    title:data.title,
                    content:data.content,
                    author:data.author,
                    status:data.status,
                    reportId:data.reportId,
                }, function(err){
                    if(err){
                        console.log(err);
                    }
                });
                console.log(`One new report coming`);
            });
            socket.on('app emit test', (data) => {
                console.log(data.msg);
            });
            socket.on('use target report', function(data){
              console.log(data);
              socket.broadcast.emit('use one report', data);
            });
            socket.on('top target report', (data) => {
              socket.broadcast.emit('top one report', data);
            });
            socket.on('drop target report', (data) => {
              socket.broadcast.emit('drop one report', data);
            });
        }
    );

    let pageA = io.of('/a').on('connection', function(socket){
        console.log(`one connection by '/a'.`);
        pageA.emit('user attach', {name:`Jackson`});
        socket.on('user msg', function(data, fn){
            console.log(data.msg);
            fn('success');
        });
    });
};
