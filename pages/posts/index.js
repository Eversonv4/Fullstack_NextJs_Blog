import React from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of my programming-related tutorials and posts in general"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
