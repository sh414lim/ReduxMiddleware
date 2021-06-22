//반복되는 로직을 정리
// 사용법 createRequestThunk('GET_USERS,api.getUsers);

import {startLoading,finishLoading} from "../modules/loading"
 
export default function createRequestThunk(type,request){
    //성공 및 실패 액션 타입을 정의
    const SUCCESS=`${type}_SUCCESS`;
    const FAILURE=`${type}_FAILURE`;
    return params =>async dispatch=>{
        dispatch({type});  //시작됨
        //리덕스 모듈에서 만든 액션 생성함수
        dispatch(startLoading(type));
        try{
            const response=await request(params);
            dispatch({
                type:SUCCESS,
                payload:response.data
            }); //성공
            dispatch(finishLoading(type));
        }catch(e){
            dispatch({
                type:FAILURE,
                payload:e,
                error:true
            }); //에러 발생
            dispatch(startLoading(type));
            throw e;
        }
    }
}