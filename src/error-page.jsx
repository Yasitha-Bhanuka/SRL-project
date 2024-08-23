import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 bg-black">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-2xl text-red-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl ">
        <i>{error.statusText || error.message}..!!!</i>
      </p>
    </div>
  );
}
