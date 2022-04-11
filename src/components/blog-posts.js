import { useEffect, useState } from "react";
import SITE_DATA from "../site-data.json";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(SITE_DATA.blogRSSfeed);
      const feedData = await response.json();
      setPosts(feedData.items.slice(0, 3));
    };

    fetchPosts();
  }, []);

  return (
    <section id="news" className="pb-0">
      <div className="container">
        <div className="section-title h2 text-center mb-8">
          <h2 className="mb-0">Latest Posts</h2>
          <span className="title-letter">P</span>
        </div>

        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-4 mb-md-0">
              <article className="news-block border-0">
                <div className="news-body p-0">
                  <div className="mb-4">
                    <img
                      className="img-fluid w-100 rounded"
                      src={post.thumbnail}
                      alt=""
                    />
                  </div>
                  <small className="d-block mb-1">
                    {new Date(post.pubDate).toDateString()}
                  </small>
                  <h2 className="h4 mb-1">
                    <a href={post.link}> {post.title} </a>
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content
                          .substring(
                            post.content.indexOf("<p>") + 3,
                            post.content.indexOf("</p>")
                          )
                          .substring(0, 150) + "..",
                    }}
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
