const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("The Socket", socket);
    console.log("Socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("Received message:", payload);
        io.emit("chat", payload);
    });
});

// app.listen(5000, () => console.log("Server is active"));

server.listen(5000, () => console.log("Server is active on port 5000"));