import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedDoctors from '../components/RelatedDoctors'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

    const {docId} = useParams()
    const {doctors, currencySymbol} = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo,setDocInfo] = useState(null)
    const [docSlots,setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
       
    }

    const getAvailableSlots = async () => {
      setDocSlots([])

      // getting current date
      let today = new Date()

      for(let i = 0; i < 7; i++){
        //getting date with index
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+i)

        // setting end time of the date with index
        let endTime = new Date()
        endTime.setDate(today.getDate()+i)
        endTime.setHours(21,0,0,0)

        //  setting hours
        if (today.getDate() === currentDate.getDate()) {
            currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

        } else {
            currentDate.setHours(10)
            currentDate.setMinutes(0)
        }

        let timeSlots = []

        while(currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})

            // add slot to array
            timeSlots.push({
                datetime: new Date(currentDate),
                time: formattedTime
            })

            // Increment current time by 30 minutes
            currentDate.setMinutes(currentDate.getMinutes() + 30)
        }

        setDocSlots(prev => ([...prev, timeSlots]))
      }

    }

    useEffect(()=>{
       fetchDocInfo()
    },[doctors,docId])

    useEffect(()=>{
      getAvailableSlots()
    },[docInfo])

    useEffect(()=>{
        console.log(docSlots);

    },[docSlots])

  return docInfo && (
    <div>
    {/* ------- Doctor Details ------- */}

    <div className='flex flex-col md:flex-row gap-6'>
  {/* Doctor Image */}
  <div className='md:w-1/4'>
    <img className='w-full rounded-xl bg-primary' src={docInfo.image} alt={docInfo.name} />
  </div>

  {/* Doctor Info */}
  <div className='flex-1 space-y-4'>
    <div className='border border-gray-300 rounded-xl p-6 bg-white'>
      <p className='text-2xl font-semibold flex items-center gap-2 text-gray-900'>
        {docInfo.name}
        <img className='w-5' src={assets.verified_icon} alt="verified" />
      </p>
      <p className='text-sm text-gray-600'>{docInfo.degree} - {docInfo.speciality}</p>
      <span className='text-xs px-2 py-1 border rounded-full'>{docInfo.experience}</span>
    </div>

    {/* About Section */}
    <div>
      <p className='flex items-center gap-1 text-sm font-semibold text-gray-800'>
        About <img className='w-4' src={assets.info_icon} alt="info" />
      </p>
      <p className='text-sm text-gray-600 mt-1'>{docInfo.about}</p>
    </div>

    <p className='text-gray-600'>
      Appointment fee: <span className='text-gray-800 font-semibold'>{currencySymbol}{docInfo.fee}</span>
    </p>
  </div>
</div>





    { /* ----- Booking slots ----- */}
    <div className='mt-8'>
  <p className='font-medium text-gray-700'>Booking slots</p>
  
  <div className='flex gap-4 overflow-x-auto mt-4 pb-2'>
    {
      docSlots.length > 0 && docSlots.map((item, index) => (
        <div
          onClick={() => setSlotIndex(index)}
          className={`min-w-[60px] px-3 py-2 text-center text-sm rounded-full cursor-pointer transition-all ${
            slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700'
          }`}
          key={index}
        >
          <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
          <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
      ))
    }
  </div>

  <div className='flex gap-3 overflow-x-auto mt-4'>
    {
      docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
        <p
          onClick={() => setSlotTime(item.time)}
          className={`px-5 py-2 rounded-full text-sm whitespace-nowrap cursor-pointer transition-all ${
            slotTime === item.time ? 'bg-primary text-white' : 'border border-gray-300 text-gray-500'
          }`}
          key={index}
        >
          {item.time.toLowerCase()}
        </p>
      ))
    }
  </div>

  <button className='bg-primary text-white font-medium text-sm px-6 py-3 rounded-full mt-6'>
    Book an appointment
  </button>
</div>

          
        {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}
  
export default Appointment