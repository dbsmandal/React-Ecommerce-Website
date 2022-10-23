import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';



const Services = () => {
    return (
        <div className='grid grid-cols-3 h-48  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl  gap-5 p-5'>
            <div className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <TbTruckDelivery className='justify-self-center h-12 w-12' />
                <h1 className='font-semibold text-lg'>Super Fast and Free Delivery</h1>
            </div>

            <div className='grid grid-row-2 gap-2'>
                <div className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                    <MdSecurity className='justify-self-center h-12 w-12' />
                    <h1 className='font-semibold text-lg'>Non-Contact-Shipping</h1></div>
                <div className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                    <GiReceiveMoney className='justify-self-center h-12 w-12' />
                    <h1 className='font-semibold text-lg'>Money Back Guaranteed</h1></div>
            </div>
            <div className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <RiSecurePaymentLine className='justify-self-center h-12 w-12' />
                <h1 className='font-semibold text-lg'>Super Secuire Payment System</h1></div>

        </div>
    )
}

export default Services
