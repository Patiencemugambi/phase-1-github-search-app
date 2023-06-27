// Function to display user information on the page
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" width="50">
        <a href="${user.html_url}" target="_blank">${user.login}</a>
      `;
      
      userList.appendChild(userItem);
    });
  }
  
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault();
    
    // Get the search query from the input field
    const searchQuery = document.getElementById('search-input').value;
  
    // Make a GET request to the User Search Endpoint
    fetch(`https://api.github.com/search/users?q=${searchQuery}`, {

    })
      .then(response => response.json())
      .then(data => {
        // Display information about the users to the page
        displayUsers(data.items);
      })
    //   .catch(error => {
    //     console.log('Error:', error);
    //   });
  }
  
  // Add event listener to the form submit event
  const githubForm = document.getElementById('github-form');
  githubForm.addEventListener('submit', submitForm);