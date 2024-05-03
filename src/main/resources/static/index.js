async function createRoom() {
    const roomName = document.getElementById("roomname").value;
    const maxMembers = document.getElementById("maxnum").value;
    console.log(`${roomName} ${maxMembers}`);

    const url = `/roomchat/room?roomname=${roomName}&maxmemb=${maxMembers}`;
    await fetch(url, { method: "POST" });

    window.location.reload();
}

let savedData;

window.onload = async function () {
    const response = await fetch('/hotels', { method: 'GET' });
    const data = await response.json();
    console.log(data);
    savedData = data;

    createFieldsets(savedData);
}

function createFieldsets(rooms) {
    const roomDiv = document.getElementById("roomdiv");
    roomDiv.innerHTML = '';

    rooms.forEach(item => {
        const fieldset = document.createElement("fieldset");
        fieldset.classList.add("forfieldset");

        const chatNameLabel = document.createElement("label");
        chatNameLabel.textContent = item.name;
        fieldset.appendChild(chatNameLabel);

        const membersLabel = document.createElement("label");
        membersLabel.textContent = `/${item.maxrooms}`;
        membersLabel.style.position = "absolute";
        membersLabel.style.right = "5px";
        fieldset.appendChild(membersLabel);

        fieldset.onclick = () => openPopup(item.rooms, item.name);
        roomDiv.appendChild(fieldset);
    });
}

async function openPopup(rooms, hotelName) {
    const selectElement = document.getElementById("select");
    selectElement.innerHTML = '';

    Object.entries(rooms).forEach(([roomNumber, available]) => {
        if (!available) {
            const optionElement = document.createElement('option');
            optionElement.value = roomNumber;
            optionElement.textContent = roomNumber;
            selectElement.appendChild(optionElement);
        }
    });

    document.getElementById("title").innerText = hotelName;
    document.querySelector(".popup").style.display = "flex";
}

async function submitReserve() {
    const roomNum = document.getElementById("select").value;
    const hotelName = document.getElementById("title").innerText;
    const response = await  fetch('/rooms'+'/'+hotelName+`?roomNum=${value}`,{method:'POST'});
    document.querySelector(".popup").style.display = "none";
}
