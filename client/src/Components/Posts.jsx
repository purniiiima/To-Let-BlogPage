import React from 'react';
import { useState } from 'react';

import PostItem from './PostItem';
import { DUMMY_POSTS } from '../data';

const Posts = () => {
    const [posts] = useState(DUMMY_POSTS)

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map((post, index) => (
            <div key={post.id}>
              <PostItem
                postID={post.id}
                thumbnail={post.thumbnail}
                category={post.category}
                title={post.title}
                description={post.description}
                authorID={post.authorID}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="center">No Posts Found</h2>
      )}
    </section>
  );
};

export default Posts;