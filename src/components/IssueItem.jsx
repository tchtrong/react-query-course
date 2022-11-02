import PropTypes from "prop-types";
import React from "react";
import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../helpers/useUserData";
import Label from "./Label";

export const IssueItem = ({
  title,
  number,
  assignee,
  commentCount,
  createdDate,
  createdBy,
  status,
  labels
}) => {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);

  return (
    <li>
      <div>
        {status === "done" || status === "canceled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((labelId) => (
            <Label key={labelId} labelId={labelId} />
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} by{" "}
          {`${createdByUser.isSuccess ? createdByUser.data.name : ""}`}
        </small>
      </div>
      {assignee ? (
        <img
          src={`${
            assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
          }`}
          className="assigned-to"
        />
      ) : (
        <></>
      )}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : (
          <></>
        )}
      </span>
    </li>
  );
};

IssueItem.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  assignee: PropTypes.string,
  commentCount: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  status: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string)
};
