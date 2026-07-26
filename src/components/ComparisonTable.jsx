import React, { useState } from 'react';

/**
 * ComparisonTable – displays a list of proposal models with their score and speed.
 * Highlights the winning model (highest score) in green and shows a "Best Result"
 * badge with the model name. Includes a toggle to switch between top‑only and full view.
 */
const ComparisonTable = ({ proposals = [] }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine the winner (highest score)
  const winner = proposals.reduce(
    (prev, cur) => (cur.score > prev.score ? cur : prev),
    { score: -Infinity }
  );

  // If not showing all, only display the winner row
  const displayed = showAll ? proposals : [winner];

  return (
    <div className="mt-12 w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex justify-between items-center bg-lightBlue p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-darkNavy">Model Comparison</h2>
        <button
          onClick={() => setShowAll((v) => !v)}
          className="px-4 py-2 bg-primaryBlue text-white rounded-full hover:bg-darkNavy transition-colors"
        >
          {showAll ? 'Show Top' : 'See All'}
        </button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-lightBlue">
          <tr>
            <th className="px-4 py-2 font-medium text-graySub">Model</th>
            <th className="px-4 py-2 font-medium text-graySub">Score</th>
            <th className="px-4 py-2 font-medium text-graySub">Speed</th>
            <th className="px-4 py-2 font-medium text-graySub">Result</th>
          </tr>
        </thead>
        <tbody>
          {displayed.map((p, idx) => {
            const isWinner = p.model === winner.model;
            return (
              <tr
                key={idx}
                className={`${isWinner ? 'bg-green-100' : 'bg-white'} hover:bg-gray-50 transition-colors`}
              >
                <td className="px-4 py-2 text-gray-800">{p.model}</td>
                <td className="px-4 py-2 text-gray-800">{p.score}</td>
                <td className="px-4 py-2 text-gray-800">{p.speed}</td>
                <td className="px-4 py-2">
                  {isWinner && (
                    <span className="inline-flex items-center px-2 py-1 bg-primaryBlue text-white text-xs font-semibold rounded-full shadow">
                      Best Result – {p.model}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
