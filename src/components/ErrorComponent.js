import { useRouteError } from "react-router-dom";

export const errorComponent = () => {
  const error = useRouteError();

  return (
    <div className="errorCompoenent">
      <h1>Opps!! Something went wrong</h1>
      <h1>
        {error.status}:{error.statusCode}
      </h1>
    </div>
  );
};
