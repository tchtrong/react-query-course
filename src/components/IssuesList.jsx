import React from "react";
import useIssuessData from "../helpers/useIssuesData";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ selectedLabels }) {
  const issuesData = useIssuessData({ labelNames: selectedLabels });

  return (
    <div>
      <h2>Issues List</h2>
      {issuesData.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issuesData.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdDate={issue.createdDate}
              createdBy={issue.createdBy}
              status={issue.status}
              labels={issue.labels}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
