import React from 'react'

 const TopicDisplayComponent = ({unit}) => {
	 const { topic, status, rank, id} = unit
  	return (
    	<div className="single-unit">
			<h3>{id}. {topic}</h3>
			<span>Status: {status}</span>
			<p>
				Current Order: {rank}
			</p>
    	</div>
  	)
}

export default TopicDisplayComponent