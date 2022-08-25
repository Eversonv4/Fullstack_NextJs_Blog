import React from "react";
import Image from "next/image";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Markdown from "markdown-to-jsx";

import ReactMarkdown from "react-markdown";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${post.src}`}
          alt={image.alt}
          width={600}
          height={200}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* <Markdown>{post.content}</Markdown> */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
