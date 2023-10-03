import { Head } from 'next/document'
import React from 'react'
import Header from './header'
const layout = ({children}) => {
  return (
    <div>
        <Head>
        <title>Home</title>
        </Head>
        <Header/>
        <div>
            
            {children}

        </div>
    </div>
  )
}

export default layout