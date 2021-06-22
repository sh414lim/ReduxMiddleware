import {createAction ,handleActions} from "redux-actions";


//redux-thunk 는 액션 생성 함수에서 일반 액션 객체를 반환하는 대신에 함수를 반환 합니다
//increaseAsync와 decreaseAsync 함수를 만들어 카운터 값을 비동기적으로 변경
const INCREASE='counter/INCREASE';
const DECREASE='counter/DECREASE';

export const increase=createAction(INCREASE);
export const decrease=createAction(DECREASE);

//1초뒤에 increase 혹은 decrease 함수르 디스패치함
export const increaseAsync=()=>dispatch=>{
    setTimeout(()=>{
        dispatch(increase());
    },1000);
};

export const decreaseAsync=()=>dispatch=>{
    setTimeout(()=>{
        dispatch(decrease());
    },1000);
};

const initialState=0; //상태는 꼭 객체일 필요가 없습니다. 숫자도 작동한다

const counter=handleActions(
    {
        [INCREASE]:state=>state+1,
        [DECREASE]:state=>state -1
    },
    initialState
);

export default counter;