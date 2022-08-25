import React from "react";
import Image from "next/image";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Markdown from "markdown-to-jsx";

// import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${post.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={200}
    //     />
    //   );
    // },

    paragraph(paragraph) {
      const { node } = paragraph;

      if (Node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${post.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown>{post.content}</Markdown>
      {/* <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown> */}
    </article>
  );
}
