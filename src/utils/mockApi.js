// Updated mockApi.js

let posts = [
    {
      id: '1',
      title: 'First Blog Post',
      author: 'John Doe',
      content: 'This is the content of the first blog post.',
      summary: 'Summary of the first blog post.',
      publicationDate: '2023-01-01',
    },
    {
      id: '2',
      title: 'Second Blog Post',
      author: 'Jane Smith',
      content: 'This is the content of the second blog post.',
      summary: 'Summary of the second blog post.',
      publicationDate: '2023-02-01',
    },
  ];
  
  export const getPosts = () => {
    return posts;
  };
  
  export const getPostById = (id) => {
    return posts.find((post) => post.id === id);
  };
  
  export const addPost = (post) => {
    posts.push(post);
  };
  
  export const updatePost = (updatedPost) => {
    const index = posts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      posts[index] = updatedPost;
    }
  };
  
  export const deletePost = (id) => {
    posts = posts.filter((post) => post.id !== id);
  };  