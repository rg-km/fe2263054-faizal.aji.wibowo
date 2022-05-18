import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  // const [author, setAuthor] = React.useState("");
  const [color, setColor] = React.useState("#fff");

  React.useEffect(() => {
    // TODO: answer here
    const interval = setInterval(() => {
      setColor(generateColor());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  function generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
      <h1>Random Quote</h1>
      <button onClick={getQuote}>Get Quote</button>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <p>{quote.content}</p>
          <p>{quote.author}</p>
        </>
      )}
    </div>
  );

}
