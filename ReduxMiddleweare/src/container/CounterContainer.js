import React from "react";
import {connect} from "react-redux";
import Counter from "../components/Counter"
import {increase,decrease} from "../modules/counter";

//counter 컨테이너 컨트롤러 생성

const CounterContainer =({number,increase,decrease})=>{
    return(
        <Counter 
        number={number}
        onIncrease={increase}
        onDecrease={decrease}
        />
    );
};

export default connect(
    state=>({
        number:state.counter
    }),
    {
        increase,
        decrease

    }
)(CounterContainer);