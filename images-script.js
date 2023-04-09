const socket = new WebSocket('wss://nostr.0x50.tech');
// const socket = new WebSocket('wss://relay.damus.io');

socket.onopen = function(event) {
    socket.send('["REQ", "133742069", {"kinds": [1]}]');
};

socket.onmessage = function(event) {
    const infoContainer = document.getElementById('info-container');
    const imagesContainer = document.getElementById('images-container');
    const data = JSON.parse(event.data);
    if (data[0] === "EVENT") {
        if(data[2].kind === 1) {
            const content = data[2].content;          
            // ---
            // const imageUrlRegExp = /\.(jpeg|jpg|gif|png)$/i
            const imageUrlRegExp = /^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi
            const image_url = content.match(imageUrlRegExp);
            if(image_url != null) {
                const p = document.createElement('p');
                const img = document.createElement('img');
                img.src = image_url[0];
                p.innerHTML = img.outerHTML;
                imagesContainer.insertBefore(p, imagesContainer.firstChild);
                // console.log("Image URL: " + image_url[0]);
            }
        }
    }
};