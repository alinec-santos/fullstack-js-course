import { useState, useEffect } from "react";

function UsersList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://dev.to/api/articles?per_page=6")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        Erro: {error}
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 text-white px-4 md:px-12 py-16">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
          devtrack
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Articles for Developers
        </h1>
        <div className="w-10 h-0.5 bg-emerald-500 mt-2 rounded-full" />
      </div>

      {/* Grid de artigos */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <li
            key={article.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-3">

              {/* Título */}
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-zinc-400 line-clamp-3">
                {article.description || "No description available."}
              </p>

              {/* Autor */}
              <span className="text-xs text-zinc-500 font-mono">
                By {article.user.name}
              </span>
            </div>

            {/* Botão */}
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
    </div>
  );
}

export default UsersList;