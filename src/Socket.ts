import io from "socket.io-client";

export const socket = io("https://chat-app-socket-sample.herokuapp.com/");

socket.on("connect", () => {
  console.log("socket connected");
});
