const dgram = require('dgram')

const socket = dgram.createSocket('udp4')

socket.on('listening', () => {
  const address = socket.address()
  console.log('Listening on', address.address, ':', address.port)
})

socket.on('message', (data, remote) => {
  console.log('Data received from server:', data.toString())
  const response = 'Hey there! From Client'
  socket.send(response, 0, response.length, remote.port, remote.address)
})

socket.bind(5555)