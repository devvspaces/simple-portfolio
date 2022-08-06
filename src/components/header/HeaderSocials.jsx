/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='header__socials__link' href="https://linkedin.com/in/afolabi-olajide" target='_blank' rel="noreferrer noopener"><BsLinkedin/></a>
        <a className='header__socials__link' href="https://github.com/afolabiolajide" target='_blank' rel="noreferrer noopener"><BsGithub/></a>
        <a className='header__socials__link' href="https://twitter.com/officialcipherr" target='_blank' rel="noreferrer noopener"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials;