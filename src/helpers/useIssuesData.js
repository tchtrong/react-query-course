import { useQuery } from "react-query";

export default function useIssuessData({ labelNames }) {
  const issuesData = useQuery(["issues", { labelNames }], async () => {
    const labelsQueryString = labelNames
      .map((label) => `labels[]=${label}`)
      .join("&");
    const res = await fetch(`/api/issues?${labelsQueryString}`);
    return res.json();
  });

  return issuesData;
}
