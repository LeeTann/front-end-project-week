import React from 'react'

const ListView = props => {
  return (
    <div>
      {props.tags.map(tag => {
          return <div className="card" key={tag.id}>
          <p>{tag.tags}<br/> {tag.title}<br/> {tag.textBody}</p>
          </div>
      })}
    </div>
  )
}

export default ListView