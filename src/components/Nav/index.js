import React, { useState } from 'react';

function Nav(props) {

  const [navItems] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' }
  ]);

  const { setOtherSelected, otherSelected } = props

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0])

  return (
    <nav>
      <ul>
        {navItems.map((category) => (
          <li className={`${currentNavItem.name === category.name && 'active'}`} key={category.name}>
            <span onClick={() => {
              setCurrentNavItem(category)
              setOtherSelected(category.name)
            }}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;