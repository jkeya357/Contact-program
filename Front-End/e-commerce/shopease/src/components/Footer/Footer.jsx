import React from 'react';
import content from '../../data/content.json';
import FbiIcon from '../common/FbiIcon';
import InstalIcon from '../common/InstalIcon'

const Footer = ({content}) => {
  return (
    <div className='bg-black text-white'>
      <div className='flex p-8 justify-around '>
        {content?.items && content?.items?.map((item,index)=>{
          return(
            <div className='flex flex-col'>
              <p className='text-[16px] pb-[10px]'>{item.title}</p>
              {item?.list && item?.list?.map((listItem,index)=><a className='flex flex-col text-[12px] py-2' href={listItem?.path}>{listItem?.label}</a>)}
            </div>
          )
        })}
      </div>
      <div className='flex gap-2 items-center justify-center py-4'>
        <a href='/fb'><FbiIcon/></a>
        <a href='/insta'><InstalIcon/></a>
      </div>
      <p className='text-sm text-white text-center content-center'>{content?.copyright}</p>
    </div>
  )
}

export default Footer
