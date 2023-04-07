const socket = new WebSocket('wss://nostr.0x50.tech');

socket.onopen = function(event) {
    socket.send('["REQ", "1337", {"kinds": [1]}]');
};

socket.onmessage = function(event) {
    const responseContainer = document.getElementById('response-container');
    const data = JSON.parse(event.data);
    if (data[0] === "EVENT") {
        const content = data[2].content;
        const para = document.createElement('p');
        para.innerHTML = content;
        responseContainer.insertBefore(para, responseContainer.firstChild);
    }
};