import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: answer heres
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <h2>Random Quote</h2>
      </nav>

      <div className="container p-3">
        <div className="d-flex flex-column justify-content-center align-items-center bg-warning">
          <figure>
            <blockquote>
              <p data-testid="quote">
                {loading ? "Loading..." : quote.content}
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">{quote.author}</figcaption>
          </figure>
          <button className="btn btn-primary" onClick={getQuote}>Get another quote</button>
        </div>
      </div>
    </div>
  );
}
