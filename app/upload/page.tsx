"use client"
import { CldUploadWidget } from "next-cloudinary"
import React from 'react'

const UploadPage = () => {
  return (
    <div>
        <CldUploadWidget uploadPreset="zsspnoq0">
            {({ open }) => 
            <button 
            onClick={() => open()}
            className="btn btn-primary">Upload</button>}
        </CldUploadWidget>
    </div>
  )
}

export default UploadPage