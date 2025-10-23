# blog-website
# My Awesome Blog

Simple static blog demo with client-side comments and search.

## Contents
- [index.html](index.html) — main HTML file
- [styles.css](styles.css) — site styles
- [script.js](script.js) — client logic (comments, search, sharing)
- [images/](images) — post images

## Features
- Three sample posts with images.
- Client-side comments stored in localStorage via [`addComment`](script.js) and rendered by [`displayComments`](script.js).
- Post search implemented by [`searchPosts`](script.js).
- Social share buttons wired to [`shareOnTwitter`](script.js) and [`shareOnFacebook`](script.js).

## Usage
1. Open [index.html](index.html) in a browser (or serve with a simple HTTP server for correct behavior).
   - Example: `python -m http.server` then visit http://localhost:8000
2. Add comments below any post; comments are saved per-post in localStorage.
3. Use the search box to filter posts.

## Development notes
- Comments are saved under keys like `comments-post1` in localStorage.
- To reset comments, clear the browser site data or run `localStorage.removeItem('comments-post1')`, etc.
- To modify UI or behavior, edit [styles.css](styles.css) and [script.js](script.js).

##Author
Gowthami Boya
