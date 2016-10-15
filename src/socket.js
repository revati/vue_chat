import {Socket} from "phoenix-socket"

let socket = new Socket("ws://127.0.0.1:4000/socket")

socket.connect()

export default socket
