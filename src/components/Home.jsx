import React from 'react'
import Buttons from "./Buttons";
import Footer from "./Footer";
import Header from './Header';

export default function Home() {
    return (
		<main>
			<div className='main'>
				<div className='gradient' />
			</div>

			<div className='app'>
                <Header />
				<Buttons />
			</div>
			<Footer />
		</main>
  )
}
