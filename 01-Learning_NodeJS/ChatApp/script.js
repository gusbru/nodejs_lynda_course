const message = document.getElementById('input-message');
const messageList = document.getElementById('messages-list');

const checkMessage = () => {
    if (messageList.innerHTML === '') {
        messageList.innerHTML = '<div class="message list-empty">No messages :(</div>';
    }
};

const sendMessage = () => {
    const msg = message.value;
    if (messageList.innerHTML === '') {
        messageList.innerHTML = `<div class="message">${msg}</div>`;
    } else {
        messageList.innerHTML += `<div class="message">${msg}</div>`;
    }
    message.value = '';
};

messageList.innerHTML = '';
checkMessage();
