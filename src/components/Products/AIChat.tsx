'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: 'ai', content: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Error connecting to AI.' },
      ]);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Chat with AI"
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-5 right-5 w-60 sm:w-80 bg-white dark:bg-item-bg border border-gray-300 dark:border-gray-600 rounded-lg shadow-2xl flex flex-col
               transform transition-all duration-300 ea-out
               opacity-100 scale-100"
        >
          <div className="flex justify-between items-center p-2 border-b border-text-gray">
            <h3 className="font-semibold dark:text-white">Got Questions?</h3>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer dark:text-white dark:hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-2 space-y-2 max-h-64"
          >
            {messages.length === 0 ?
              <div className="text-center text-gray-400 italic">
                Here will be your question
              </div>
            : messages.map((m, idx) => (
                <div
                  key={idx}
                  className={m.role === 'user' ? 'text-right' : 'text-left'}
                >
                  <p
                    className={`inline-block px-3 py-2 rounded-lg ${
                      m.role === 'user' ?
                        'bg-blue-500 text-white dark:bg-product-add-btn'
                      : 'bg-gray-200 text-black dark:bg-dark-theme-bg dark:text-white border dark:border-text-gray'
                    }`}
                  >
                    {m.content}
                  </p>
                </div>
              ))
            }
          </div>

          <div className="flex gap-2 p-2 border-t border-text-gray">
            <input
              type="text"
              className="flex-1 min-w-0 px-3 py-2 border border-text-gray dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-product-add-btn"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              aria-label="Send Message"
              onClick={sendMessage}
              className="px-3 sm:px-4 py-2 bg-blue-500 dark:bg-product-add-btn text-white rounded cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
