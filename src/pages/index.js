import Router from 'next/router'
import { connect } from 'react-redux'
import { addCountAct, subCountAct } from '@/store/actions'
import { Button } from 'antd';

function HomePage({num, addCountAct, subCountAct}) {
  return <div>
  	<p>{num}</p>
    <Button onClick={subCountAct} >-</Button>
    <Button onClick={addCountAct} >+</Button>
    <br/>
    <img src="/static/1.png" alt=""/>
  </div>
}

const mapStateToProps = state => {
  const { num } = state.reducer
  return {
    num,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCountAct (params) {
      return dispatch(addCountAct(1))
    },
    subCountAct (params) {
      return dispatch(subCountAct(1))
    },
  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
