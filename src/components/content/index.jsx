import React from 'react'
import './content.scss'
import ContentArticle from './content-article'

const Content = () => {
  return (
    <section>
      {[...new Array(6)].map((_, index) => (
        <ContentArticle key={index} />
      ))}
    </section>
  )
}

export default Content