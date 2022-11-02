import PropTypes from "prop-types";
import React from "react";
import useLabelsData from "../helpers/useLabelsData";

export default function LabelList({ selectedLabels, toggle }) {
  const labelsData = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsData.isLoading ? <p>Loading...</p> : <></>}
      {labelsData.isSuccess ? (
        <ul>
          {labelsData.data.map((label) => (
            <li key={label.id}>
              <button
                onClick={() => toggle(label.name)}
                className={`label ${label.color}
                ${selectedLabels.includes(label.name) ? "selected" : ""}`}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

LabelList.propTypes = {
  selectedLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggle: PropTypes.func
};
