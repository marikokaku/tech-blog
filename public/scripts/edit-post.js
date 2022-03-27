async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const message = document.querySelector('textarea[name="post-message"]').value;
    // localStorage.setItem(title, message);
    const id = document.querySelector('input[name="post-id"]').value;
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    document.location.replace('/dashboard/');
    
  }
  
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  