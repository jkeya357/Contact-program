
import React, { useCallback, useState } from 'react'


const SizeFilter = ({sizes, hideTitle}) => {

  const [appliedSize, setAppliedSize] = useState([]);
    const onClickDiv = useCallback((item) => {
      if(appliedSize.indexOf(item) > -1){
        
        setAppliedSize(appliedSize.filter(size => size !== item));
      }else{
        setAppliedSize([...appliedSize, item]);
      }
    },[appliedSize,setAppliedSize]);

  return (
       <div className={`flex flex-col ${hideTitle? '':'mb-4'}`}>
      {!hideTitle && <p className='text-[16px] text-black mt-5 mb-5'>Size</p>}
      <div className='flex flex-wrap px-2 '>
        {sizes?.map(item => {
          return (
            <div className='flex flex-col mr-2'>
              <div className='w-[50px] h-8 border text-center mb-4 rounded-lg mr-4 cursor-pointer hover:scale-110 bg-white border-gray-500 text-gray-500' onClick={() => onClickDiv(item)} style={appliedSize.includes(item)? {
                background:'black',
                color:'white'
              }:{}}>{item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SizeFilter
