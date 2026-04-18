import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  // using custom hook
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const colors = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6"];
  const randomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

<div
  className="card"
  style={{ backgroundColor: randomColor() }}
>
  
</div>

  return (
    <div className="container">
      <h1>My API Data</h1>

      {/* loading */}
      {loading && <p>Loading...</p>}

      {/* error */}
      {error && <p>Error: {error}</p>}

      {/* data */}
      {!loading && !error && (
      <div className="grid-container">
  {data.map((item, index) => (
    <div
      className="card"
      key={item.id}
      style={{ backgroundColor: colors[index % colors.length], color: "white" }}
    >
      <h2>{item.title}</h2>
    </div>
  ))}
</div>
      )}
    </div>
  );
};

export default App;
