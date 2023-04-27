const app = require("express")();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send("<h1>เซิฟเปิดแล้ววัยรุ่น</h1>");
})


//__________ socket __________
io.on('connection', (socket) => {
    socket.on('start', (status) => {
        console.log('id',status)
        io.emit('start_unity',status)
    });
    socket.on('startage', (status) => {
        console.log('age',status)
        io.emit('start_unity',status)
    });

});

//__________ PORT __________

http.listen(3000, function () {
    console.log('listening on *:3000');
});
