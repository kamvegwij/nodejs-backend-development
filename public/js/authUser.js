async function loginUser(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await res.json();
        if (data.success) {
            window.location.replace('http://localhost:5050/dashboard');
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.log(err.message);
    }
}
async function logoutUser(event) {
    try {
        const response = await fetch('/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: null
        });
        const data = await response.json();
        if (data.success) {
            window.location.replace('http://localhost:5050/');
            alert(data.message);
        } else {
            alert("Could not log you out!");
        }
    } catch (err) {
        console.log(err.message);
    }
}