let socket = new WebSocket("ws://178.190.234.149:8080");

socket.onopen = e => {
    socket.send("ping");
}

socket.onmessage = e => {
    document.getElementById("server-messages").innerHTML += "<li>" + JSON.stringify(e.data) + "</li>";
}