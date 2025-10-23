// Function to add a comment to a specific post
function addComment(event, postId) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById(`name-${postId}`).value;
    const message = document.getElementById(`message-${postId}`).value;
    
    // Create comment object
    const comment = { name, message, timestamp: new Date().toLocaleString() };
    
    // Retrieve existing comments from localStorage or initialize empty array
    let comments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    comments.push(comment);
    
    // Save back to localStorage
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
    
    // Display comments
    displayComments(postId);
    
    // Clear form
    document.getElementById(`name-${postId}`).value = '';
    document.getElementById(`message-${postId}`).value = '';
}

// Function to display comments for a specific post
function displayComments(postId) {
    const commentsList = document.getElementById(`comments-${postId}`);
    const comments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    
    // Clear existing comments
    commentsList.innerHTML = '';
    
    // Add each comment to the list
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<strong>${comment.name}</strong> (${comment.timestamp}): ${comment.message}`;
        commentsList.appendChild(commentDiv);
    });
}

// Load comments on page load
document.addEventListener('DOMContentLoaded', () => {
    ['post1', 'post2', 'post3'].forEach(postId => displayComments(postId));
});

// Function to search posts
function searchPosts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');
    
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Social sharing functions (placeholders - in a real app, integrate with APIs)
function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check out this blog!`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}