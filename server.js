const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT || 3000
const io = require('socket.io')(server, {
    perMessageDeflate :false,
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
app.get('/',(req,res)=>{
    res.send("<h1>โอเค เปิดแล้ว</h1>")
})
//__________ socket __________
io.on('connection', (socket) => {
    socket.on('start', (status) => {
        console.log('id',status)
        io.emit('start_unity',status)
    });

});

//__________ PORT __________

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
