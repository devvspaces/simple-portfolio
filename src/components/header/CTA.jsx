/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react'
const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' target='_blank' href={'https://docs.google.com/document/d/1ic2mTWqHFtwuNqUN63q4MlSpFlDFQOmUb0wExYSi0FI/edit?usp=sharing'} download>CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA