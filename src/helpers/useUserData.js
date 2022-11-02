import { useQuery } from "react-query";

export default function useUserData(userId) {
  const userData = useQuery(
    ["users", userId],
    () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    {
      enabled: !!userId
    }
  );

  return userData;
}
