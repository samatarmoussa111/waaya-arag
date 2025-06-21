"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Post } from "@/lib/posts";

interface Props {
  post: Post;
  index: number;
}
export default function PostItem({ post, index }: Props) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/resumes/${post.slug}`}
        key={post.slug}
        className="group block"
      >
        <div className="space-y-4">
          {/* Image du livre */}
          <div className="relative mx-auto aspect-[9/14] w-[180px] overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            <Image
              src={post.cover || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Informations du livre */}
          <div className="text-center">
            <h3 className="text-base font-medium leading-tight">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{post.author}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
