import React, {useMemo, useState} from "react";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import './Blog.css'

function Blog() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Максим Фёдоров', body: 'Прекрасный сервис ! '},
        {id: 2, title: 'Александр Зиборов', body: 'Вместо 1 банки мороженого положили 10 !'},
        {id: 3, title: 'Алина Порхунова', body: 'Мороженка лучший бренд мороженого в РФ !!!'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal,setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    //Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="Blog">
            <MyButton  onClick={()=>setModal(true)}>
                Написать комментарий
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Комментарии"/>
        </div>
    );
}
export default Blog;