async function markComplete(task_id) {
    try {
        const res = await fetch('/admin/mark-complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                task_id: Object.values(task_id).join('')
            })
        });
        const res_data = await res.json();
        if (res_data.success) {
            alert(`${res_data.message}`);
        } else {
            alert(`${res_data.message}`);
        }
    } catch (err) {
        alert(`An error occured ${err.message}`);
    }
}