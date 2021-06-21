import React from "react";


//데이터를 불러와서 렌더링 해줄때는 유효성 검사를 해주는것이 중요
//post && 사용하면 post 객체가 유효할 때만 그 내부의 post title혹은 post body 값을 보여준다

const Sample =({loadingPost,loadingUsers,post,users})=>{
    return(
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩중...'}
                {!loadingPost && post && (
                    <div>
                            <h3>{post.title}</h3>
                            <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Sample;