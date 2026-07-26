import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submit = () => {
    // In a real app, send to backend. Here we just log.
    console.log('Feedback submitted', { rating, comment });
    setOpen(false);
    setRating(0);
    setComment('');
  };

  return (
    <>
      {/* Fixed button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-primaryBlue text-white rounded-full p-3 shadow-lg hover:bg-darkNavy transition"
        title="Give Feedback"
      >
        ★
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-primaryBlue">Rate this feature</h3>
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={24}
                  className={`cursor-pointer ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => setRating(i)}
                />
              ))}
            </div>
            <textarea
              placeholder="Additional comments (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full h-24 p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                className="px-4 py-2 bg-primaryBlue text-white rounded hover:bg-darkNavy transition"
                disabled={rating === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;
