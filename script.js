const socket = new WebSocket('wss://nostr.0x50.tech');

socket.onopen = function(event) {
    socket.send('["REQ", "1337", {"kinds": [1]}]');
};

socket.onmessage = function(event) {
    const responseContainer = document.getElementById('messages-container');
    const data = JSON.parse(event.data);
    if (data[0] === "EVENT") {
        const content = data[2].content;
        const pubkey = data[2].pubkey;
        const pubkeyShortened = `${pubkey.slice(0, 3)}...${pubkey.slice(-3)}`;
        const para = document.createElement('p');
        para.innerHTML = pubkeyShortened + ": " + content;
        responseContainer.insertBefore(para, responseContainer.firstChild);
    }
};