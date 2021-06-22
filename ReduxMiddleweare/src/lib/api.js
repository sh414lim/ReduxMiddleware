
//thunk 의 속성을 활용한 웹 요청 비동기 작업
//API 를 호출 할때는 주로 Promise 기반 웹 클라이언트인 axios 를 사용한다

import axios from "axios";

//API를 함수화\
//각 API 를 호출하는 함수를 따로 작성하면 나중에 사용할때 가독성이 좋고 유지 보수도 쉬워진다

export const getPost=id=>
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers=id=>
axios.get(`https://jsonplaceholder.typicode.com/users`);
