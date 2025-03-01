import React from 'react'

const Header = ({toogleModal, nbOfContacts}) => {
  return (
    <header className='header'>
      <div className='container'>
        <h3>Contact List ({nbOfContacts})</h3>
        <button className='btn' onClick={() => toogleModal(true)}>
          <i className='bi bi-plus-square'></i>Add new Contact
        </button>
      </div>
    </header>
  )
}

export default Header
