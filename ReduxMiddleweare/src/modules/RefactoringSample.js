import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk  from "../lib/createRequest";

//액션 타입을 선언한다
//한 요청당 세개 작성

const GET_POST='sample/GET_POST'
const GET_POST_SUCCESS='sample/GET_POST_SUCCESS';
const GET_POST_FAILURE='sample/GET_POST_FAILURE';

const GET_USERS='sample/GET_USERS';
const GET_USERS_SUCCESS='sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE='sample/GET_USERS_FAILURE';

//thrunk 함수를 생성
//thrnk 함수 내부에서는 시작할 때 성공했을 때 실패 했을때 다른 액션ㅇ르 디스 패치

export const getPost=createRequestThunk(GET_POST, api.getPost);
export const getUsers=createRequestThunk(GET_USERS,api.getUsers);

//초기 상태 선언
//요청의 로딩중 상태는 loading 이라는  객체에서 관리

const initialState={
    loading:{
        GET_POST:false,
        GET_USERS:false
    },
    post:null,
    users:null
};

const RefactoringSample=handleActions(
    {
        [GET_POST]:state=>({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:true //요청 시작
            }
        }),
        
        [GET_POST_SUCCESS]:(state,action)=>({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false //요청완료
            },
            post:action.payload
        }),
        [GET_POST_FAILURE]:(state,action)=>({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false //요청 왼료
            }
        }),
        [GET_USERS]:state=>({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:true //요청시작
            }
        }),
        [GET_USERS_SUCCESS]:(state,action)=>({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:false //요청완료
            },
            users:action.payload
        }),
        [GET_USERS_FAILURE]:(state,action)=>({
            ...state,
            loading:{
                ...state.loading,
                GET_USERS:false //요청완료
            }
        })
    },
    initialState
);


//로딩 상태를 관리하는 작업을 개선 했다.


export default RefactoringSample;