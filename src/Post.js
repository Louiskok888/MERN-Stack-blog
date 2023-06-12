export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Blogs for all day</h2>
        <p className="info">
          <a className="author">Louis Kok</a>
          <time>2023-06-12 16.08</time>
        </p>
        <p className="summary">
          A blog, short for weblog, is a frequently updated web page used for
          personal commentary or business content. Blogs are often interactive
          and include sections at the bottom of individual blog posts where
          readers can leave comments.
        </p>
      </div>
    </div>
  );
}
