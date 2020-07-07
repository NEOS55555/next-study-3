import React from 'react'
import Style from './child.style'

class Child extends React.Component {
  render() {
    return (
      <div>
      	<span>
	        Child page
	    </span>
	    <br/>
	    <b>
	    	strong
	    </b>
	    <Style></Style>
      </div>
    )
  }
}

export default Child