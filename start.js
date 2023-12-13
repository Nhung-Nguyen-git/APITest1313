const postList = document.getElementById('postList');
const postsBtn = document.getElementById('postsBtn');
const albumsBtn = document.getElementById('albumsBtn');
const photosBtn = document.getElementById('photosBtn');

const endpoint = "https://jsonplaceholder.typicode.com";

async function fetchPosts() {
  const response = await fetch(`${endpoint}/posts`);
  const data = await response.json();
  postList.innerHTML = '';
  data.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;
    postList.appendChild(li);

  });
}

async function fetchAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = await response.json();
  postList.innerHTML = '';
  data.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album.title;
    postList.appendChild(li);
  });
}

async function fetchPhotos() {
  const response = await fetch(`${endpoint}/photos`);
  const data = await response.json();
  postList.innerHTML = '';
  data.forEach(photo => {
    const li = document.createElement('li');
    li.textContent = photo.title;
    postList.appendChild(li);
  });
}

postsBtn.addEventListener('click', async () => {
  postsBtn.classList.toggle('active');
  albumsBtn.classList.remove('active');
  photosBtn.classList.remove('active');
  await fetchPosts();
});

albumsBtn.addEventListener('click', async () => {
  postsBtn.classList.remove('active');
  albumsBtn.classList.toggle('active');
  photosBtn.classList.remove('active');
  await fetchAlbums();
});

photosBtn.addEventListener('click', async () => {
  postsBtn.classList.remove('active');
  albumsBtn.classList.remove('active');
  photosBtn.classList.toggle('active');
  await fetchPhotos();
});

fetchPosts();