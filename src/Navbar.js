import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => { 
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    showLink
			? (linksContainerRef.current.style.height = `${linksHeight}px`)
			: linksContainerRef.current.style.height = "0px"
  },[showLink])

  return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img className="logo" alt="logo" src={logo} />
					<button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
						<FaBars />
					</button>
				</div>

				<div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
						{links.map(({ id, url, text }) => (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						))}
					</ul>
				</div>

				<ul className="social-icons">
					{social.map(({ id, url, icon }) => (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar
