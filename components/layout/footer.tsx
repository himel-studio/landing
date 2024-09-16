"use client";

import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-4 text-xs uppercase'>
        <p>Himel Majumder ©️ {year} Almost all rights reserved.</p>
    </footer>
  )
}

export default Footer