import React from 'react'
import Style from './child.style'

class Child extends React.Component {
  render() {
  	const { data } = this.props;
    return (
      <div>
      	<span>
	        Child page
		    </span>
		    <br/>
		    <b>
		    	strong12313
		    </b>
				{this.props.list}
		    <Style></Style>
      </div>
    )
  }
}

/*export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  console.log('s')
  const res = await axios.get('/api/test/list')
  console.log(res.data)
	const list = res.data;
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      list,
    },
  }
}*/
export default Child