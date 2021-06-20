import React from "react";

//카운토 컴포넌트 생성

const Counter = ({onIncrease, onDecrease,number})=>{
    return(
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    )
}

export default Counter;