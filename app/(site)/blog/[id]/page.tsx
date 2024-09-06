import React from 'react'
import { Metadata } from "next";
import Image from 'next/image';
import Check from '../../../../public/check.svg'
import { CiClock2 } from "react-icons/ci";
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Single Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};


const SingleBlogPage = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">


      <div className="bg-[#f8f8fc] dark:bg-black flex justify-center flex-wrap items-center p-[3rem] md:p-[5.5rem] mt-[-8px] -z-99999 gap-x-[5rem]">

        <div>
          <h1 className="text-5xl font-bold text-black dark:text-white">How to Fix + Prevent <br /> Inventory Errors: An <br /> Ecommerce Guide </h1>

          <div className='flex justify-start items-center bg-[#E7FFE7] mt-[3rem] rounded-full px-3 w-fit gap-x-2 border border-[#CCF0CC]'>

            <div className='w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full bg-[#00B600]'>
              <Image src={Check} alt='check' width={15} height={5} />
            </div>
            <p className='text-[#00B600]'>Verified & Reviewed</p>

          </div>
          <p className="text-lg mt-4">Get a bi-weekly email, rounding up our latest articles that</p>
          <p className="text-lg ">feature the latest tips to improve ecommerce logistics.</p>

          <div className='flex items-center gap-x-2 mt-6'>
            <p className='text-xl'> Published on August 29, 2024</p>
            <div className='w-[6px] h-[6px] rounded-full bg-[#00B600]'></div>
            <p className='text-xl'>Written By <span className='text-[#175cff] cursor-pointer'>Meredith Flora</span></p>
          </div>
        </div>

        <div className="lg:mt-0 mt-10">
          <Image width={500} height={100} alt='' src={"https://www.shipbob.com/wp-content/smush-webp/2024/08/448b4d0de0e23bc21429923b029bd069.png.webp"} className='rounded-2xl' />
        </div>

      </div>


      <div className="mx-auto max-w-[95rem] md:flex items-start flex-wrap ">

        <div className='min-w-[100%] md:min-w-[20rem] md:max-w-[20rem] pt-15 px-5 md:border-none border-b'>

          <div className='flex justify-between items-center'>
            <p className='text-lg text-[#175cff] cursor-pointer'>Table of Contents</p>
            <div className='flex items-center gap-x-1'>
              <CiClock2 />
              <p className='text-sm'>13 minutes</p>
            </div>
          </div>

          <div className='mt-6'>
            <Link href={"#1"}>
              <p className='mb-3 hover:text-[#175cff] hover:bg-[#f8f8fc] cursor-pointer ease-out px-2 py-1 text-wrap rounded-md'>What is Free Carrier (FCA Incoterms)?</p>
            </Link>

            <Link href={"#2"}>
              <p className='mb-3 hover:text-[#175cff] hover:bg-[#f8f8fc] cursor-pointer ease-out px-2 py-1 text-wrap rounded-md'>What are the obligations for sellers and buyers in Free Carrier?</p>
            </Link>

            <Link href={"#3"}>
              <p className='mb-3 hover:text-[#175cff] hover:bg-[#f8f8fc] cursor-pointer ease-out px-2 py-1 text-wrap rounded-md'>Key changes in FCA Incoterms 2020</p>
            </Link>

            <Link href={"#4"}>
              <p className='mb-3 hover:text-[#175cff] hover:bg-[#f8f8fc] cursor-pointer ease-out px-2 py-1 text-wrap rounded-md'>What are the differences between Free Carrier and Ex Works?</p>
            </Link>

            <Link href={"#5"}>
              <p className='mb-3 hover:text-[#175cff] hover:bg-[#f8f8fc] cursor-pointer ease-out px-2 py-1 text-wrap rounded-md'>Other Incoterms alternatives to consider</p>
            </Link>

          </div>

        </div>

        <div className='flex-1 pt-15 pl-6 md:pl-20 border-l'>

          <div className='mb-5' id='1'>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>What is Free Carrier (FCA Incoterms)?</h1>
            <p className='mt-6 text-xl'>FCA Incoterm, or “Free Carrier (FCA),” is a trade agreement that identifies a seller of goods as responsible for their delivery to an end destination, or “Named Place,” specified by the buyer. “Free” alludes to the seller’s obligation (or the buyer’s lack of obligation) to manage the transfer of goods to the named place.</p>
            <p className='mt-6 text-xl'>As per the FCA shipping terms, the seller can choose the location if the buyer doesn’t offer a location.</p>
          </div>


          <div className='mb-5' id='2'>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>What are the obligations for sellers and buyers in Free Carrier?</h1>
            <p className='mt-6 text-xl'>FCA Incoterm, or “Free Carrier (FCA),” is a trade agreement that identifies a seller of goods as responsible for their delivery to an end destination, or “Named Place,” specified by the buyer. “Free” alludes to the seller’s obligation (or the buyer’s lack of obligation) to manage the transfer of goods to the named place.</p>
            <p className='mt-6 text-xl'>As per the FCA shipping terms, the seller can choose the location if the buyer doesn’t offer a location.</p>
          </div>


          <div className='mb-5' id='3'>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>Key changes in FCA Incoterms 2020</h1>
            <p className='mt-6 text-xl'>FCA Incoterm, or “Free Carrier (FCA),” is a trade agreement that identifies a seller of goods as responsible for their delivery to an end destination, or “Named Place,” specified by the buyer. “Free” alludes to the seller’s obligation (or the buyer’s lack of obligation) to manage the transfer of goods to the named place.</p>
            <p className='mt-6 text-xl'>As per the FCA shipping terms, the seller can choose the location if the buyer doesn’t offer a location.</p>
          </div>



          <div className='mb-5' id='4'>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>What are the differences between Free Carrier and Ex Works?</h1>
            <p className='mt-6 text-xl'>FCA Incoterm, or “Free Carrier (FCA),” is a trade agreement that identifies a seller of goods as responsible for their delivery to an end destination, or “Named Place,” specified by the buyer. “Free” alludes to the seller’s obligation (or the buyer’s lack of obligation) to manage the transfer of goods to the named place.</p>
            <p className='mt-6 text-xl'>As per the FCA shipping terms, the seller can choose the location if the buyer doesn’t offer a location.</p>
          </div>



          <div className='mb-5' id='5'>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>Other Incoterms alternatives to consider</h1>
            <p className='mt-6 text-xl'>FCA Incoterm, or “Free Carrier (FCA),” is a trade agreement that identifies a seller of goods as responsible for their delivery to an end destination, or “Named Place,” specified by the buyer. “Free” alludes to the seller’s obligation (or the buyer’s lack of obligation) to manage the transfer of goods to the named place.</p>
            <p className='mt-6 text-xl'>As per the FCA shipping terms, the seller can choose the location if the buyer doesn’t offer a location.</p>
          </div>






        </div>

      </div>


    </section>
  )
}

export default SingleBlogPage