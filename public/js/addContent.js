async function createNewTask(event) {
    event.preventDefault(); // --> this prevents the page from reloading...
    console.log("Calling create new task method!");
    const title = document.getElementById('task_title').value;
    const time = document.getElementById('task_time').value;
    const description = document.getElementById('task_description').value;
    
    try {
        const response = await fetch(`/admin/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                time: time,
                description: description
            })
        })
        const data = await response.json();
        alert(data.message);
    } catch (err) {
        console.log(err.message);
    }
};
async function createNewIdea(event) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    try {
        const response = await fetch('/admin/ideas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });
        const data = await response.json();
        alert(data.message);
    } catch (err) {
        console.log(err.message);
    }
}