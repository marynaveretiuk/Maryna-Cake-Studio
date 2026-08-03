"use client";

import { Post } from "@/data/posts";
import SlideLink from "@/components/common/SlideLink";
import Sidebar from "@/components/blog/Sidebar";
import PostShare from "@/components/common/PostShare";
import PostFormatMedia from "@/components/blog/post-format/PostFormatMedia";
import Comments from "@/components/blog/single/Comments";

interface BlogSingleProps {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

// Single blog post page - content, prev/next, comments, sidebar.
export default function BlogSingle({ post, prevPost, nextPost }: BlogSingleProps) {
  return (
    <section className="blog-section blog-single space">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <article className="post-item">
              <PostFormatMedia post={post} />

              <h5 className="title">{post.title}</h5>

              <div className="post-details">
                <div className="date">
                  <i className="fa-solid fa-calendar-days" aria-hidden="true" />
                  <span> {post.publishedDate}</span>
                </div>
                <div className="author">
                  <i className="fa-solid fa-user" aria-hidden="true" /> by {post.author}
                </div>
                <div className="category">
                  <i className="fa-solid fa-list" aria-hidden="true" />{" "}
                  {post.categories.map((cat, i) => (
                    <span key={cat}>
                      {cat}
                      {i < post.categories.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="footer-post">
                <div className="tags-links">
                  <span>Tags:</span>
                  {post.tags.map((tag, i) => (
                    <a key={tag} href="#" onClick={(e) => e.preventDefault()}>
                      <div className="btn-reveal">
                        <span>{tag}{i < post.tags.length - 1 ? ", " : ""}</span>
                        <span className="reveal">{tag}{i < post.tags.length - 1 ? ", " : ""}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Post Share */}
                <PostShare title={post.title} />
              </div>
            </article>

            {/* Prev / Next navigation */}
            <div className="post-navigation">
              <div className="prev-post">
                {prevPost && (
                  <SlideLink href={`/blog-details/${prevPost.slug}`} className="btn-link">
                    <div className="btn-reveal">
                      <span><i className="fa fa-angle-left" aria-hidden="true" /> Prev Post</span>
                      <span className="reveal"><i className="fa fa-angle-left" aria-hidden="true" /> Prev Post</span>
                    </div>
                  </SlideLink>
                )}
              </div>

              <div className="next-post">
                {nextPost && (
                  <SlideLink href={`/blog-details/${nextPost.slug}`} className="btn-link">
                    <div className="btn-reveal">
                      <span>Next Post <i className="fa fa-angle-right" aria-hidden="true" /></span>
                      <span className="reveal">Next Post <i className="fa fa-angle-right" aria-hidden="true" /></span>
                    </div>
                  </SlideLink>
                )}
              </div>
            </div>

            {/* Comments */}
            <Comments comments={post.comments} />
          </div>

          <div className="col-md-3 blog-sidebar--right">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
