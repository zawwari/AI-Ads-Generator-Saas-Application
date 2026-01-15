import { ImagePlus } from 'lucide-react';
'use client'

import React from 'react'
import FormInput from '../_components/FormInput';
function ProductImages() {
  return (
    <div>
      <h2 className='mb-2'>AI Product Images Generator</h2>
      <div className='grid grid-cols-1 md:grid-cols-3'>
    <FormInput  />
<div className="preview">

</div>

    </div>
    </div>
  )
}

export default ProductImages;
 