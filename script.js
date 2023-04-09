const socket = new WebSocket('wss://nostr.0x50.tech');
// const socket = new WebSocket('wss://relay.damus.io');

socket.onopen = function(event) {
    socket.send('["REQ", "133742069", {"kinds": [0,1,4,30023]}]');
};

socket.onmessage = function(event) {
    const shortTextNotesContainer = document.getElementById('short-text-notes-container');
    const longTextNotesContainer = document.getElementById('long-text-notes-container');
    const dmContainer = document.getElementById('dm-container');
    const infoContainer = document.getElementById('dm-container');
    const metadataContainer = document.getElementById('metadata-container');
    const imagesContainer = document.getElementById('images-container');
    const data = JSON.parse(event.data);
    if (data[0] === "EVENT") {
        // // responseContainer.innerHTML = data[2].kind;
        if(data[2].kind === 0) {
            const content = data[2].content;
            const pubkey = data[2].pubkey;
            const pubkeyShortened = `${pubkey.slice(0, 3)}...${pubkey.slice(-3)}`;
            const createdAt = data[2].created_at;
            const date = new Date(createdAt * 1000);
            const formattedTime = date.toLocaleString();
            const para = document.createElement('p');
            const img = document.createElement('img');
            // para.innerHTML = pubkeyShortened + ": " + content;
            para.innerHTML = `<span class="createdAt">(${formattedTime})</span> <span class="pubkey">${pubkeyShortened}:</span> ${content}`;
            // Start Copy & Paste Pubkey Functionality
            const pubkeySpan = para.querySelector('.pubkey');
            pubkeySpan.addEventListener('click', function() {
                const tempInput = document.createElement('input');
                tempInput.value = pubkey;
                tempInput.setAttribute('readonly', '');
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            });
            // End Copy & Paste Pubkey Functionality
            metadataContainer.insertBefore(para, metadataContainer.firstChild);
        }
        if(data[2].kind === 1) {
            const content = data[2].content;
            const pubkey = data[2].pubkey;
            const pubkeyShortened = `${pubkey.slice(0, 3)}...${pubkey.slice(-3)}`;
            const createdAt = data[2].created_at;
            const date = new Date(createdAt * 1000);
            const formattedTime = date.toLocaleString();
            const para = document.createElement('p');
            // para.innerHTML = pubkeyShortened + ": " + content;
            para.innerHTML = `<span class="createdAt">(${formattedTime})</span> <span class="pubkey">${pubkeyShortened}:</span> ${content}`;
            // Start Copy & Paste Pubkey Functionality
            const pubkeySpan = para.querySelector('.pubkey');
            pubkeySpan.addEventListener('click', function() {
                const tempInput = document.createElement('input');
                tempInput.value = pubkey;
                tempInput.setAttribute('readonly', '');
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            });
            // End Copy & Paste Pubkey Functionality
            shortTextNotesContainer.insertBefore(para, shortTextNotesContainer.firstChild);
        }
        if(data[2].kind === 4) {
            const content = data[2].content;
            const pubkey = data[2].pubkey;
            const pubkeyShortened = `${pubkey.slice(0, 3)}...${pubkey.slice(-3)}`;
            const createdAt = data[2].created_at;
            const date = new Date(createdAt * 1000);
            const formattedTime = date.toLocaleString();
            const para = document.createElement('p');
            // para.innerHTML = pubkeyShortened + ": " + content;
            para.innerHTML = `<span class="createdAt">(${formattedTime})</span> <span class="pubkey">${pubkeyShortened}:</span> ${content}`;
            // Start Copy & Paste Pubkey Functionality
            const pubkeySpan = para.querySelector('.pubkey');
            pubkeySpan.addEventListener('click', function() {
                const tempInput = document.createElement('input');
                tempInput.value = pubkey;
                tempInput.setAttribute('readonly', '');
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            });
            // End Copy & Paste Pubkey Functionality
            dmContainer.insertBefore(para, dmContainer.firstChild);
        }
        if(data[2].kind === 30023) {
            const content = data[2].content;
            const pubkey = data[2].pubkey;
            const pubkeyShortened = `${pubkey.slice(0, 3)}...${pubkey.slice(-3)}`;
            const createdAt = data[2].created_at;
            const date = new Date(createdAt * 1000);
            const formattedTime = date.toLocaleString();
            const para = document.createElement('p');
            // para.innerHTML = pubkeyShortened + ": " + content;
            para.innerHTML = `<span class="createdAt">(${formattedTime})</span> <span class="pubkey">${pubkeyShortened}:</span> ${content}`;
            // Start Copy & Paste Pubkey Functionality
            const pubkeySpan = para.querySelector('.pubkey');
            pubkeySpan.addEventListener('click', function() {
                const tempInput = document.createElement('input');
                tempInput.value = pubkey;
                tempInput.setAttribute('readonly', '');
                tempInput.style.position = 'absolute';
                tempInput.style.left = '-9999px';
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            });
            // End Copy & Paste Pubkey Functionality
            longTextNotesContainer.insertBefore(para, longTextNotesContainer.firstChild);
        }
    } else {
        infoContainer.innerHTML = data[2].content;
    }
};