import React from 'react'
import Style from './child.style'

class Child extends React.Component {
  render() {
  	const { data, list } = this.props;
    return (
      <div>
      	<span>
	        Child page
		    </span>
		    <br/>
		    <b>
		    	strong12313
		    </b>
				{list}{data}
		    <Style></Style>
      </div>
    )
  }
}

export default Child