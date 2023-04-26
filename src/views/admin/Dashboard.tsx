import React, { useEffect, useState } from "react";
import { getDashboardCounts } from "../../apis/users";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    users: 0,
    words: 0,
    userWords: 0,
  });

  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = () => {
    getDashboardCounts().then((res: any) => {
      setCounts(res.data);
    });
  };
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-5 mt-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        <li className="flex col-span-1 rounded-md shadow-sm">
          <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-pink-600 rounded-l-md">
            U
          </div>
          <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a
                href="/admin/users"
                className="font-medium text-gray-900 hover:text-gray-600"
              >
                Users
              </a>
              <p className="text-gray-500">{counts.users} Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
            </div>
          </div>
        </li>

        <li className="flex col-span-1 rounded-md shadow-sm">
          <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-purple-600 rounded-l-md">
            UW
          </div>
          <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a
                href="/admin/user-words"
                className="font-medium text-gray-900 hover:text-gray-600"
              >
                User Words
              </a>
              <p className="text-gray-500">{counts.userWords}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
            </div>
          </div>
        </li>

        <li className="flex col-span-1 rounded-md shadow-sm">
          <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-yellow-500 rounded-l-md">
            W
          </div>
          <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a
                href="/admin/words"
                className="font-medium text-gray-900 hover:text-gray-600"
              >
                Words
              </a>
              <p className="text-gray-500">{counts.words}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
            </div>
          </div>
        </li>

        <li className="flex col-span-1 rounded-md shadow-sm">
          <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-green-500 rounded-l-md">
            F
          </div>
          <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-gray-600"
              >
                FAQ
              </a>
              <p className="text-gray-500">8 Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Dashboard;
