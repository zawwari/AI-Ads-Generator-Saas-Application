import React from 'react'
import {ImagePlus} from 'lucide-react';
import Image from 'next/image';

const sampleProducts = [
  '/headphone.png',
  '/juice-can.png',
  '/perfume.png',
  '/burger.png',
  '/ice-creame.png',

  ]

export default function FormInput() {
  const[previewUrl, setPreviewUrl] = React.useState<string | null>();

   const onFileSelect = (files: FileList | null)=>{
    if (!files || files?.length === 0) return;
    const file = files[0];
if (file.size > 5 * 1024 * 1024) {
  alert("File size exceeds 5MB");
  return;
}
else{
setPreviewUrl(URL.createObjectURL(file) );

}


    }

  return (

   
    <div>
      <h3 className='font-semibold text-sm'>1.Upload Product Image</h3>
          
<div>
<label htmlFor='fileUpload'
className='mt-2 border-dashed border-2 rounded-xl flex flex-col p-4 items-center justify-center min-h-[200px] cursor-pointer' >

{!previewUrl ?
<div className='flex flex-col gap-3 items-center'>
  <ImagePlus className='h-8 w-8 opacity-40'/>
  <h2 className='text-xl'>Click here to upload an image</h2>
  <p className='opacity-45'>uplooad image upto 5MB</p>
</div>
:
<Image src={previewUrl} alt='preview' width={300} height={300} className='max-h-[150px] object-contain rounded-lg overflow-hidden'/>
}
</label>

<input type="file" name="" id="fileUpload" className='hidden' accept='image/*' onChange={(e)=>onFileSelect(e.target.files)}/>

</div>
<div>
  <h4 className='opacity-40 text-center mt-3'>select sample product to try </h4>
<div className="flex justify-between mt-3">
{sampleProducts.map((product, index)=>(
  <Image src={product} key={index} alt={product} height={50} width={50} className='rounded-xl h-[60px] w-[60px] cursor-pointer transition-all hover:scale-105'
  onClick={()=>setPreviewUrl(product)}
  />
))}
</div>

<div className='mt-8'>
<h2 className='font-semibold'>2. Enter Product Description</h2>
<textarea name="" id=""></textarea>
</div>


</div>



    </div>
  )
}
