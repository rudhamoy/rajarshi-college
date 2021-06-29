import React, { useState, useEffect } from 'react'
import { db, storage } from "../../../../firebase";

 const Upload = ({setProfilepic, setMarksheetpic, setAadhaarpic}) => {
    const [image, setImage]= useState(null)
    const [image2, setImage2]= useState(null)
    const [image3, setImage3]= useState(null)
    const [progress, setProgress] = useState(0)
    const [progress2, setProgress2] = useState(0)
    const [progress3, setProgress3] = useState(0)

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
    }}
    const handleChange2 = (e) => {
        if(e.target.files[0]) {
            setImage2(e.target.files[0])
    }}
    const handleChange3 = (e) => {
        if(e.target.files[0]) {
            setImage3(e.target.files[0])
    }}

    const handleUpload=(e)=> {
        e.preventDefault()
        
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(snapshot)
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            ()=> {
                storage.ref('images').child(image.name).getDownloadURL()
                .then(url => {
                    db.collection('profile').add({
                        imageUrl: url
                    })
                    setProfilepic(url)
                    console.log(url)
                })
                // setProgress(0)
            }
        )
    }
    const handleUpload2=(e)=> {
        e.preventDefault()
        
        const uploadTask = storage.ref(`images/${image2.name}`).put(image2)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(snapshot)
                const progress2 = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress2(progress2)
            },
            (error) => {
                console.log(error)
                alert(error.mesage)
            },
            ()=> {
                storage.ref('images').child(image2.name).getDownloadURL()
                .then(url => {
                    db.collection('aadhaaar').add({
                        imageUrl: url
                    })
                    setAadhaarpic(url)
                    console.log(url)
                })
            }
        )
    }
    const handleUpload3=(e)=> {
        e.preventDefault()
        
        const uploadTask = storage.ref(`images/${image3.name}`).put(image3)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(snapshot)
                const progress3 = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress3(progress3)
            },
            (error) => {
                console.log(error)
            },
            ()=> {
                storage.ref('images').child(image3.name).getDownloadURL()
                .then(url => {
                    db.collection('marksheet').add({
                        imageUrl: url
                    })
                    setMarksheetpic(url)
                    console.log(url)
                })
            }
        )
    }

        
    return (
        <div>
       
        <h2>Upload Your Images</h2>
        <div className="bg-white border rounded">
            <h2 className="text-left">Your Image</h2>
            
        <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            type="file"
            id="image"
           
            accept="image/*"
            onChange={handleChange}
          />
          <div className="flex justify-between items-center">
          <button onClick={handleUpload} className="bg-blue-600 p-1 py-2 rounded-md text-white">Upload Images</button>
          <progress value={progress} max="100"  className="w-3/4 rounded-md"/>
          </div>
        </div>

        {/** */}
        <div className="bg-white border rounded mt-3">
            <h2 className="text-left">Aadhaar Image</h2>
        <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            type="file"
            id="image2"
           
            accept="image/*"
            onChange={handleChange2}
          />
          <div className="flex justify-between items-center">
          <button onClick={handleUpload2} className="bg-blue-600 p-1 py-2 rounded-md text-white">Upload Images</button>
          <progress value={progress2} max="100"  className="w-3/4 rounded-md"/>
          </div>
        </div>
        {/**  */}
        <div className="bg-white border rounded mt-3">
            <h2 className="text-left">Marksheet Image</h2>
        <input
            className="bg-gray-100 py-3 w-full p-2 rounded mt-1"
            type="file"
            id="image3"
           
            accept="image/*"
            onChange={handleChange3}
          />
          <div className="flex justify-between items-center">
          <button onClick={handleUpload3} className="bg-blue-600 p-1 py-2 rounded-md text-white" >Upload Images</button>
          <progress value={progress3} max="100"  className="w-3/4 rounded-md"/>
          </div>
        </div>
        <p className="font-semibold"><span className="text-red-500 text-xl">*</span>Click on registration button after successfully uploading all the images<span className="text-red-500 text-xl">*</span></p>
      </div>
    )

 }

export default Upload