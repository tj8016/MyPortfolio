import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Devloper',
        2000,
        'Problem Solver',
        2000,
        'FullStack Devloper',
        2000
      ]}
      wrapper="span"
      speed={20}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
