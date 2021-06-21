//실제 프로젝트에서는 미들웨어를 직접 만들어서 사용할 일은 많이 적다


//미들웨어 커스텀 제작
//액션이 디스패치 될때마다  액션의 정보와 액션이 디스패치되기 전후의 상태를 콘솔에 보여주는 로깅 미들웨어 작성

//
//  const loggeriddleware=function loggeriddleware(store){
//      return function(next){
//          return function(action){
//              //미들웨어 기본구조
//          }
//      }
//  }

//미들웨어는 결국 함수를 반환하는 함수를 반환하는 함수
//함수 에서 파라미터로 받아오는 store는 리덕스는 스토어 인스턴스를
//next 파라미터는 함수 형태이며, store,dispatch와 비슷한 역할을 한다
//차이점은 next(action)을 호출하면 처리해야할 미들웨어에게 액션을 넘겨주고 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.


const loggeriddleware=store=>next=>action=>{
    console.group(action && action.type);//액션 타입으로 log를 그룹화함
    console.log('이전상태',store.getState());
    console.log('액션',action);
    next(action)//다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); //업데이트된 상태
    console.groupEnd(); //그룹 끝


};

export default loggeriddleware;

//리덕스 미들웨어의 구조를 볼수 있다

