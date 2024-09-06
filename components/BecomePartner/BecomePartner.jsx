"use client";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

const BecomePartner = () => {
    const [currentTab, setCurrentTab] = useState("tabOne");

    return (
        <>
            <section className="relative pb-20 pt-18.5 lg:pb-22.5">
                <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

                    <div className="mt-[5rem]">
                        <p className="font-bold text-[#0675FE] text-center text-xs">WANT TO PARTNER WITH US?</p>
                        <div className="flex justify-center items-center mt-3 flex-col ">
                            <p className="text-5xl mb-14 text-black dark:text-white max-w-[60%] font-semibold text-center">Join the 3PHOST partner ecosystem  today</p>
                            <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center h-[4rem] mt-[3rem] justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Become Partner</Link>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default BecomePartner;
