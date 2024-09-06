"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata,_id } = blog;

  return (
    <>
      <motion.div variants={{hidden: {opacity: 0,y: -20,},visible: {opacity: 1,y: 0,},}} initial="hidden" whileInView="visible" transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="animate_top rounded-lg p-4 pb-9  dark:bg-blacksection">
        
        <Link href={`/blog/${_id}`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link href={`/blog/blog-details`}>
            {`${title.slice(0, 40)}...`}
          </Link>
        </h3>

        <p className="line-clamp-3">{metadata}</p>
        
      </motion.div>
    </>
  );
};

export default BlogItem;
