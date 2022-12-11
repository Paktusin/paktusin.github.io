import dayjs from "dayjs";
import * as React from "react";
import { useMemo, useState } from "react";

interface ICommentsProps {}

interface Comment {
  date: string;
  text: string;
}

const commentsKey = "comments";

const Comments: React.FunctionComponent<ICommentsProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [coef, setCoef] = useState(0);
  const storageComments = useMemo<Comment[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(commentsKey)!) ?? [];
    } catch (err) {
      return [];
    }
  }, []);
  const [comments, setComments] = useState<Comment[]>(storageComments);
  const visibleComments = comments.slice(0, coef * 10 + 1);
  const sendComment = () => {
    if (ref.current) {
      const value = ref.current.value.trim();
      if (!value.length) {
        return;
      }
      const newComments = [
        { text: ref.current.value, date: dayjs().valueOf().toString() },
        ...comments,
      ];
      setComments(newComments);
      ref.current.value = "";
      localStorage.setItem(commentsKey, JSON.stringify(newComments));
    }
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendComment();
    }
  };
  return (
    <div
      className={`comments pe-3 ${
        coef > 0 || comments.length === 1 ? "mb-2" : ""
      }`}
    >
      {visibleComments.map((comment, index) => (
        <div className="media" key={index}>
          <img
            alt="not found"
            src="https://vk.com/images/deactivated_100.png?ava=1"
            className="img-fluid rounded-circle me-3"
            width="34"
            height="34"
          />
          <div className="media-body">
            <div className="font-weight-bold text-primary">You</div>
            <div>{comment.text}</div>
            <span className="text-black-50">
              {dayjs(+comment.date).format("lll")}
            </span>
            <hr ng-if="coef > 0" />
          </div>
        </div>
      ))}
      {visibleComments.length < comments.length && (
        <button
          onClick={() => {
            setCoef(coef + 1);
          }}
          className="btn btn-link font-weight-bold"
        >
          Show more comments
        </button>
      )}
      <div className="form-inline d-flex">
        <div className="form-group flex-grow-1 m-0">
          <input
            ref={ref}
            onKeyDown={onKeyDown}
            className="form-control w-100"
            placeholder="Write comment..."
          />
        </div>
        <button
          className="btn btn-link send-btn"
          ng-disabled="comment.length==0"
          onClick={sendComment}
        >
          <i className="fa fa-lg fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Comments;
