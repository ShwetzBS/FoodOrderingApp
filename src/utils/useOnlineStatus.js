import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //Check if user is online if not set the state as offline
  const [isOnline, setOnline] = useState(true);

  //UseEffect because we need to check if online just once

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });

    window.addEventListener("online", () => {
      setOnline(true);
    });
  });

  return isOnline;
};

export default useOnlineStatus;
