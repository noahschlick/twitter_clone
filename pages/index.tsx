import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'



const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden ">
      <Head>
        <title>Twitter 2.0</title>
      
      </Head>

      {/**
       * Components are separated by 9 columns.
       * The sidebar takes two columns
       * The Feed takes up 5 columns 
       * The Widgets takes up 2 side bars
       */}
      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <Sidebar/>

        {/*Feed*/}
        <Feed/>

        {/* Widgets */}
        <Widgets/>

      </main>

      
    </div>
  )
}

export default Home
