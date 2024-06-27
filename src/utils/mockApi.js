// Updated mockApi.js

let posts = [
    {
      id: '1',
      title: 'The Art of Cooking',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper velit. Nullam feugiat risus quis ipsum volutpat, id gravida leo placerat. Cras eget sem vel dolor accumsan malesuada vel vitae nunc.',
      summary: 'Explore the world of culinary arts and learn some tips for mastering the kitchen.',
      publicationDate: '2023-01-01',
    },
    {
      id: '2',
      title: 'Exploring the Wilderness',
      author: 'Jane Smith',
      content: 'Proin dictum feugiat mi, eget lacinia lorem varius non. Vivamus in neque et est aliquet interdum. Sed sit amet aliquet dolor. Donec et ipsum a massa ullamcorper consectetur vitae sed felis.',
      summary: 'Embark on an adventure through untouched landscapes and discover the wonders of nature.',
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