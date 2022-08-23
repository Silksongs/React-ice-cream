import React from 'react';
import PostItem from "../postItem";
import './style.css'

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (<h2 className={'title'}>Комментарии не найдены!</h2>)
    }
    return (
        <div>
            <h2 className={'title'}>
                {title}
            </h2>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;