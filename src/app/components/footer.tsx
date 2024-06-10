import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
                {/* <!-- Company Information --> */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <div className="flex flex-col items-start gap-y-4 mb-2">
                        <Image src="/initiqal-logo.png" alt='Intiqal Logo' width={200} height={100} className='h-11 rounded-md'/>
                        <div>
                            <p className="font-bold text-xl">INTIQAAL</p>
                            <p>Smart Digital Transformation</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Services --> */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">SERVICES</h3>
                    <ul>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Branding</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Design</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Marketing</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Advertisement</a></li>
                    </ul>
                </div>
                {/* <!-- Company --> */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">COMPANY</h3>
                    <ul>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">About us</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Jobs</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Press kit</a></li>
                    </ul>
                </div>
                {/* <!-- Legal --> */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2">LEGAL</h3>
                    <ul>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Terms of use</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Privacy policy</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Cookie policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
