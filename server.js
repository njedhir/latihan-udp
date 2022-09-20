const dgram = require('dgram')

const socket = dgram.createSocket('udp4')
let i = 1
socket.on('listening', () => {
  socket.setBroadcast(true)
  setInterval(() => {
    const msg = `${i} Hey`
    socket.send(msg, 0, msg.length, 5555, '192.168.100.255')

    if (i < 10) {
      i++
    } else {
      i = 1
    }
  }, 5000)
})

socket.on('message', data => {
  console.log('Data received:', data.toString())
})

socket.bind(8000)
