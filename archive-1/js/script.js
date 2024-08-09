document.getElementById('clickupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;

    // Step 1: Dapatkan Access Token (ini bisa dilakukan di server-side atau client-side)
    const clientId = 'TN8EBBY4EFW5RB03J12D56H1IXTLFIFM';
    const clientSecret = 'VXTERX5QEM7DUJRZD61DBDW796P2D60BL3HYBSMVKP86UPJFZCHMUM9HQK4BR8PZ';
    const tokenResponse = await fetch('https://app.clickup.com/api/v2/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret
        })
    });
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Kirim Data ke ClickUp API
    const listId = 'your_list_id'; // Ganti dengan List ID Anda
    const response = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            name: taskName
        })
    });
    const data = await response.json();
    console.log('Task created:', data);
});
