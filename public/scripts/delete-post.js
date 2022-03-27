async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = document.querySelector('input[name="post-id"]').value;
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/dashboard/');
    
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  