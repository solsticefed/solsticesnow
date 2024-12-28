function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}



function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('pin-form').style.display = 'block';
    document.getElementById('protected-content').style.display = 'none';
    document.getElementById('pin').value = '';
}

function checkPin() {
    const pin = document.getElementById('pin').value;
    if (pin === '0000') {
        document.getElementById('pin-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Incorrect pin. Please try again.');
    }
}
