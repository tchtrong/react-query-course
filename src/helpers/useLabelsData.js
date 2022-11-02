import { useQuery } from "react-query";

export default function useLabelsData() {
  const labelsData = useQuery(["labels"], () =>
    fetch("/api/labels").then((res) => res.json())
  );

  return labelsData;
}
