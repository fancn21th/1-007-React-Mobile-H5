import { useState } from "react";
import { useUsers, useUser } from "../../../../hooks";

export default function Sample() {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <>
      {selectedId === -1 ? (
        <Users setSelectedId={setSelectedId} />
      ) : (
        <User id={selectedId} setSelectedId={setSelectedId} />
      )}
    </>
  );
}

function Users({ setSelectedId }) {
  const { status, error, data, isFetching } = useUsers();

  const onChange = (e) => {
    const selectedId = e.target.value;
    selectedId && setSelectedId(e.target.value);
  };

  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <>
          <select onChange={onChange}>
            <option value="">Select an User</option>
            {data.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
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

function User({ id, setSelectedId }) {
  const { status, error, data, isFetching } = useUser(id);

  const onClick = () => {
    setSelectedId(-1);
  };

  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        // `data` will either resolve to the latest page's data
        // or if fetching a new page, the last successful page's data
        <>
          <button onClick={onClick}>All Users</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
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
