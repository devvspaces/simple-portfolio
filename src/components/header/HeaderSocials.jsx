/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedIn.com/in/afolabiolajide" target='_blank' rel="noreferrer noopener"><BsLinkedin/></a>
        <a href="https://github.com/afolabiolajide" target='_blank' rel="noreferrer noopener"><BsGithub/></a>
        <a href="https://twitter.com/officialcipherr" target='_blank' rel="noreferrer noopener"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials;