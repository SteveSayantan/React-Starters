import React from 'react'
import moment from 'moment'   // It is one of the most popular JS libraries for working with date. We need to install it separately.


const Article = ({title,snippet,date,length}) => {
  
  // console.log(date)        // It is an object, therefore, React can't render it.

  let modifiedDate=moment(date).format('dddd Do,YYYY')      // For more info, https://momentjs.com/docs/#/parsing/string-format/
  return <article className="post">
    <h2>{title}</h2>
    <div className="post-info">
      <span>{modifiedDate}</span>
      <span>{length} min read</span>
    </div>
    <p>{snippet}</p>
  </article>
}

export default Article
