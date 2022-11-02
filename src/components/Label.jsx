import PropTypes from "prop-types";
import React from "react";
import useLabelsData from "../helpers/useLabelsData";

export default function Label({ labelId }) {
  const labelsData = useLabelsData();

  if (labelsData.isLoading) return <></>;

  const labelData = labelsData.data.find((label) => label.id === labelId);

  if (!labelData) return <></>;

  return <span className={`label ${labelData.color}`}>{labelData.name}</span>;
}

Label.propTypes = {
  labelId: PropTypes.string.isRequired
};
