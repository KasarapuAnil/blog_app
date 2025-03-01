
import { Link } from "react-router-dom";
import React from "react";
export function Home(){
    const DummyBlogs=[
        {id:1,title:'firstblog' ,content:' This is first blog....'},
        {id:2,title:'Second Blog' ,content:'This is second blog...'}
    ]
    return(
        <div>
            <h2>Blog List</h2>
            {
                DummyBlogs.map((blog)=>(
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p dangerouslySetInnerHTML={{__html:blog.content.substring(0,100)+"..."}}></p>
                        <Link to={`/post/${blog.id}`}>Read more</Link>

                    </div>
                ))
            }

        </div>
    )
};