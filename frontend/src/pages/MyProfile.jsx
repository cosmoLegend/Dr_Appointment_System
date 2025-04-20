import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Kuber Vincent",
    image: assets.profile_pic,
    email: 'aryan.20223545@mnnit.ac.in',
    phone: '+1 123 456 7890',
    address: {
      line1: "557th Cross, Richmond",
      line2: "Circle, Church road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-g flex flex-col gap-3 text-sm p-4 text-neutral-700'>

      <img className='w-36 rounded shadow' src={userData.image} alt="Profile" />

      {
        isEdit
          ? <input
              className='bg-gray-100 text-3xl font-medium max-w-60 mt-4 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
              type="text"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-300 h-[1px] border-none my-4' />

      <div>
        <p className='text-neutral-500 underline mb-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 text-neutral-700'>
          <p className='font-medium'>Email ID:</p>
          <p className='text-blue-600 break-all'>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input
                  className='bg-gray-100 max-w-52 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
                  type="text"
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                />
              : <p className='text-blue-500'>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <div className='flex flex-col gap-1'>
                  <input
                    className='bg-gray-100 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))}
                  />
                  <input
                    className='bg-gray-100 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))}
                  />
                </div>
              : <p className='text-gray-500 whitespace-pre-line'>
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
          }
        </div>
      </div>

      <div className='mt-6'>
        <p className='text-neutral-500 underline mb-2'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select
                  className='max-w-24 bg-gray-100 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
                  value={userData.gender}
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p className='text-gray-500'>{userData.gender}</p>
          }

          <p className='font-medium'>Birthday:</p>
          {
            isEdit
              ? <input
                  className='max-w-28 bg-gray-100 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary'
                  type="date"
                  value={userData.dob}
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                />
              : <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
            ? <button
                className='border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
                onClick={() => setIsEdit(false)}
              >
                Save Information
              </button>
            : <button
                className='border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
        }
      </div>

    </div>
  )
}

export default MyProfile