"use client"
import About from '@/components/About'
import Brands from '@/components/Brands'
import Feature from '@/components/Features'
import FeaturesTab from '@/components/FeaturesTab'
import FunFact from '@/components/FunFact'
import Hero from '@/components/Hero'
import ProductHero from '@/components/Hero/ProductHero'
import Integration from '@/components/Integration'
import Cards from '@/components/Cards/Cards'
import Solution from '@/components/Solution/Solution'
// import FulfillmentSteps from '../../../components/FulfillmentSteps/FulfillmentSteps'
import FunFactProduct from '@/components/FunFact/FunFactProduct'

import React from 'react'
import Image from '../../../public/images/hero/dynamic.png'
import Distributed from '../../../public/images/hero/Distributed-Inventory-Analytics.png'
import Day_iPhone from '../../../public/images/hero/2-Day-Express_Cart_iPhone.png'
import product from '../../../public/images/hero/product-sec5@2x.png'
import product2 from '../../../public/images/hero/product-sec4@2x.png'
import product3 from '../../../public/images/hero/product-sec7@2x.png'
import last from '../../../public/images/hero/last.png'
const ProductPage = () => {
    return (
        <div>
            <ProductHero />
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold text-blue-600">READY, SET, SHIP</p>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Streamlined fulfillment from your online store to your customer’s door
                        </h2>
                    </div>
                    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
                        {/* Step 1 */}
                        <li className="flex-start group relative flex lg:flex-col">
                            <span
                                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"></span>
                            <div
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
                                <span className="text-lg font-bold text-[#769EFF]">1</span>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3 className="text-base font-bold text-gray-900">
                                    Connect your store and send us your products
                                </h3>
                            </div>
                        </li>

                        {/* Step 2 */}
                        <li className="flex-start group relative flex lg:flex-col">
                            <span
                                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"></span>
                            <div
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
                                <span className="text-lg font-bold text-[#769EFF]">2</span>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3 className="text-base font-bold text-gray-900">
                                    We store your inventory securely in our fulfillment centers
                                </h3>
                            </div>
                        </li>

                        {/* Step 3 */}
                        <li className="flex-start group relative flex lg:flex-col">
                            <span
                                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#769EFF] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                aria-hidden="true"></span>
                            <div
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
                                <span className="text-lg font-bold text-[#769EFF]">3</span>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3 className="text-base font-bold text-gray-900">
                                    Your customer places an order on your store
                                </h3>
                            </div>
                        </li>

                        {/* Step 4 */}
                        <li className="flex-start group relative flex lg:flex-col">
                            <div
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#E7EEFF] transition-all duration-200">
                                <span className="text-lg font-bold text-[#769EFF]">4</span>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h3 className="text-base font-bold text-gray-900">
                                    We pick, pack, and ship the order to your customer fast
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <Cards item={1} position={2} p1={"We’ve onboarded thousands of ecommerce merchants and helped some of the fastest-growing brands scale effortlessly. Our implementation team sets you up for success with everything from configuring your ship options, to syncing your online store."} p2={"ShipBob’s turnkey integrations with all major ecommerce platforms and marketplaces – including Shopify, BigCommerce, Amazon, and Walmart – let you import orders and send data back and forth for a two-way flow of information."} heading={"Easy and helpful"} url={Image} brWord={"onboarding"} />

            <Cards item={2} position={1}
                p1={"With ShipBob’s network of fulfillment centers, you can strategically split your inventory across our locations to get your products from point A to point B more quickly and affordably. Storing inventory near your customers helps reduce the shipping zones and costs associated with shipping orders to faraway destinations."}
                p2={"Distributed inventory also helps you stay competitive by offering two-day shipping to your customers. When an order is placed, ShipBob’s algorithm automatically selects the warehouse and carrier that will give you the quickest turnaround at the best price. This strategy has helped our merchants bring 13% savings to their bottom line."}
                heading={"Distributed"}
                url={Distributed}
                brWord={"inventory"}
            />

            <Cards item={2} position={2}
                p1={"ShipBob’s 2-Day Express Shipping Program enables fast delivery for all continental US orders for any of our ecommerce store integrations. With 2-day shipping as the standard, merchants have been able to reduce cart abandonment by 18% and increase average order value by 97%. "}
                p2={"Whether you ship from one or multiple fulfillment center locations, you can offer fast delivery to 100% of US-based customers. Our proprietary algorithm uses a combination of ground, air, and regional carriers to provide high on-time delivery rates for 2-day orders. "}
                heading={"2-Day Express Shipping"}
                url={Day_iPhone}
                brWord={"Program"}
            />


            <Cards item={2} position={1}
                p1={"At ShipBob, we track your orders from A to Z. Filter orders by status, search for specific orders, see a quick timeline view of where your order is in the fulfillment process (e.g. when an order is picked, packed, or shipped), easily find shipping-related information (e.g., weights, dimensions, or carrier service), and get a quick snapshot of any orders that require action."}
                p2={"With order management software for your direct-to-consumer and wholesale shipments, you can manage subscriptions, make changes to your orders post-purchase, map your store’s shipping options to ShipBob, and automatically share tracking information with your customers."}
                heading={"Order management "}
                url={product}
                brWord={""}
            />



            <Cards item={2} position={2}
                p1={"At ShipBob, we empower merchants to manage their inventory with the right tools and guidance. It’s easy to view the status of inventory and quantity on hand across locations at any point in time, identify slow-moving inventory with high storage costs, and gain insights into the performance of units sold over time by channel."}
                p2={"Our inventory management software helps you set reminders to proactively replenish inventory with reorder notifications, bundle your products for promotions, make inventory transfer requests, and much more."}
                heading={"Inventory management"}
                url={product2}
                brWord={""}
            />



            <Cards item={2} position={1}
                p1={"To provide you with visibility into our operations and performance, and also hold ourselves accountable, ShipBob’s free analytics tool is packed with charts to help you with everything from year-end reporting, to better supply chain decision-making."}
                p2={"Data can be a competitive advantage, and our reports show an analysis of which fulfillment centers you should stock, days of inventory left before you run out, impact of promotions on stock levels, each shipping method’s average cart value, shipping cost, and days in transit, your fulfillment cost per order, storage cost per unit, and much more."}
                heading={"Reporting and"}
                url={product3}
                brWord={"analytics"}
            />

            <Cards item={2} position={2}
                p1={"From custom branded boxes to free plain packaging, ShipBob works with you to provide the unboxing experience you want. We also help you offer the fastest, most cost-effective shipping options to meet your customers’ expectations. As soon as an order ships, tracking is pushed back to your store."}
                p2={"We also offer return management services, allowing customers to generate return shipping labels and track returns, while getting your products processed and back into your available inventory as efficiently as possible."}
                heading={"End-to-end customer"}
                url={last}
                brWord={"experience"}
            />

            <FunFactProduct />
            {/* 
            <Brands />
            <Feature />
            <About /> */}
            {/* <FeaturesTab /> */}
            <Solution />

            {/* <FunFact /> */}
            {/* <Integration /> */}
        </div>
    )
}

export default ProductPage