import React, { useEffect, useState } from "react";
import { getUserWords } from "../../apis/users";
const UserWords = () => {
  const [userWords, setUserWords] = useState<Array<any>>();
  useEffect(() => {
    fetchUserWords({});
  }, []);

  const fetchUserWords = (params: any) => {
    getUserWords(params).then((res: any) => {
      setUserWords(res.data.data);
    });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            User's Words
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Words solved by all users.
          </p>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Word
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Is Solved?
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userWords?.map((i) => (
                    <tr key={i.id}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {i.user.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.word.letters}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.isSolved ? (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/20">
                            No
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWords;
