import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const date = new Date();
const year = date.getFullYear();

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app__flex'>
            <Component />

            <div className='copyright'>
                <p className="p-text">© <span>{year}</span> TAHA ZAHEER KHAN</p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap