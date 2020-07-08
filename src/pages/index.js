import Router from 'next/router'
import { connect } from 'react-redux'
import { addCountAct, subCountAct } from '@/store/actions'
import { Button } from 'antd';
import Child from '@/components/Child'
import url from '@/constants/url'
import axios from 'axios'

function HomePage({num, addCountAct, subCountAct, list}) {
  return <div>
  	<p>{num}</p>
    <Button onClick={subCountAct} >-</Button>
    <Button onClick={addCountAct} >+</Button>
    <br/>
    <Child list={list} />
  </div>
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  console.log('s')
  console.log(process.env.API_HOST)
  const res = await axios.get(url+'/test/list')
  console.log(res.data)
  const list = res.data.data;
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      list,
    },
  }
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
