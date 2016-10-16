import {Socket} from "phoenix-socket"

let socket = new Socket(process.env.SOCKET_LINK)

socket.connect()

export default socket
