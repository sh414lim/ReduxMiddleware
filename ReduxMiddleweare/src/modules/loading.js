//로딩 상태만 관리하는 리덕스 모듈을 생성

import {createAction,handleActions} from "redux-actions";

const START_LOADING='loading/START_LOADING';
const FINISH_LOADING='loading/FINISH_LOADING';

// 요청을 위한 액션 타입을 payload로 설정


//요청이 시작될때 디스패치할 액션
// {
//     type:'loading/START_LOADING',
//     payload:'sample/GET_POST'
// }

//액션이 디스패치 되면 loading 리듀서가 관리하고 있는 상태에서 sample/GET_Post 값을 true 록 설정해준다
//만약 기존 상태에 sample/GET_POST 필드가 존재하지 않으면 새로 값을 설정해준다.


//요청이 끝난 후 디스 패치 
// {
//     type:'loading/FINISH_LOADING'
//     payload:'sample/GET_POST'
// }


export const startLoading=createAction(
    START_LOADING,
    requestType=>requestType
);

export const finishLoading=createAction(
    FINISH_LOADING,
    requestType=>requestType
)

const initialState={};

const loading=handleActions(
    {
        [START_LOADING]:(state,action)=>({
            ...state,
            [action.payload]:true
        }),
        [FINISH_LOADING]:(state ,action)=>({
            ...state,
            [action.payload]:false
        })
    },
    initialState
);

export default loading

