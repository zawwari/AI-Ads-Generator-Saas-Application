'use client';

import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
function UsersAddList() {
  const[adsList,setAdsList]=React.useState<any[]>([]);

  return (
    <div className='mt-4'>
            <h3 className="font-bold text-lg text-white">My Ads</h3>

      {adsList.length === 0 && 
    <div className="p-5 border-2 rounded-2xl flex flex-col items-center border-dashed border-white/20 mt-4  ">
      <Image src={'/signboard.png'} height={200} width={200} className='w-20' alt='signboard'/>
      <h2 className='mt-3'>you dont have any ads created yet</h2>
      <Button className='mt-4 bg-primary text-white'>Create New Ad</Button>

       </div>
}
    </div>
  )
}

export default UsersAddList;
