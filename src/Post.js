export default function Post({title,summary,cover,content,createdAt}) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Louis Kok</a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  );
}
