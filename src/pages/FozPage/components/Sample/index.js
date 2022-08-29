import { useSample } from "../../../../hooks";

export default function Sample() {
  const { status, error, data, isFetching } = useSample();

  console.log("data", data);

  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <div>
          <ur>
            <li>{data.a}</li>
            <li>{data.b}</li>
            <li>{data.c}</li>
          </ur>
        </div>
      )}
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }
    </>
  );
}
