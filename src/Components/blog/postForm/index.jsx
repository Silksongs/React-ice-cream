import React, {useState} from 'react';
import MyInput from "../ui/input";
import MyButton from "../ui/button";

const PostForm = ({create}) => {
    const[post,setPost]=useState({title:'',body:''})
    const addNewPost = (e)=>{
        e.preventDefault()
        const newPost={
            ...post,id:Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
    }
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e=>setPost({...post,title: e.target.value})}
                type="text"
                placeholder={"Ваши инициалы "}/>

            <MyInput
                value={post.body}
                onChange={e=>setPost({...post,body: e.target.value})}
                type="text"
                placeholder={"Комментарий"}/>

            <MyButton onClick={addNewPost} >Написать комментарий</MyButton>
        </form>
    );
};

export default PostForm;