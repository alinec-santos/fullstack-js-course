import { useState, useEffect, useRef } from "react";

function UsersList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const intervalRef = useRef(null);
  const ARTICLES_PER_PAGE = 6;

  useEffect(() => {
    setLoading(true);
    fetch("https://dev.to/api/articles?per_page=18")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const currentArticles = articles.slice(
    currentPage * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE + ARTICLES_PER_PAGE
  );

  useEffect(() => {
    if (totalPages <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [totalPages]);

  function goToPage(index) {
    setCurrentPage(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-zinc-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20 text-red-400">
        Erro: {error}
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-white px-4 md:px-12 py-16">

      <div className="mb-10">
        <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
          devtrack
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Articles for Developers
        </h1>
        <div className="w-10 h-0.5 bg-emerald-500 mt-2 rounded-full" />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[420px]">
        {currentArticles.map(article => (
          <li
            key={article.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-3">
                {article.description || "No description available."}
              </p>
              <span className="text-xs text-zinc-500 font-mono">
                By {article.user.name}
              </span>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Read article →
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-3 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentPage
                ? "w-6 h-2 bg-emerald-500"
                : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default UsersList;