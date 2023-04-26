import React, { useEffect, useState } from "react";
import { deleteWord, getWords, restoreWord, saveWord } from "../../apis/word";
import { Pagination, PaginationProps } from "antd";
import AddWord from "./AddWord";
import Modal from "../../components/Modal";
import { useNotification } from "../../NotificationContext";

export interface Word {
  id?: number | null;
  letters: string;
  description: string;
  level: number;
  wordLength: number;
  deletedAt: string | null;
}

export interface Meta {
  total: number;
  from: number;
  to: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

const Words = () => {
  const [isWordModalVisible, setWordModalVisibility] = useState(false);
  const [words, setWords] = useState<Array<Word>>([]);
  const [wordMeta, setWordMeta] = useState<Meta>({
    total: 0,
    from: 0,
    to: 0,
    perPage: 0,
    currentPage: 0,
    lastPage: 0,
  });
  const { showNotification } = useNotification();

  const [wordId, setWordId] = useState<any>(null);

  useEffect(() => {
    fetchWords({});
  }, []);

  const fetchWords = (params: any) => {
    getWords(params)
      .then((res: any) => {
        setWords(res.data.data);
        setWordMeta(res.data.meta);
      })
      .catch((err) => {});
  };

  const editWord = (id: any) => {
    setWordModalVisibility(true);
    setWordId(id);
  };

  const closeModal = () => {
    setWordId(null);
    setWordModalVisibility(false);
  };

  const onPaginationChange: PaginationProps["onChange"] = (page, pageSize) => {
    fetchWords({ page, per_page: pageSize });
  };

  const deleteOrRestoreWord = (word: any) => {
    if (word.deletedAt) {
      restoreWord(word.id).then((res: any) => {
        showNotification("success", res.data.message, "", "topRight");
      });
    } else {
      deleteWord(word.id).then((res: any) => {
        showNotification("success", res.data.message, "", "topRight");
      });
    }
    fetchWords({});
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Words
          </h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the words</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={() => setWordModalVisibility(true)}
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-primary hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Add Word
          </button>
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
                      Hidden Word
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Word Length
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Is Deleted?
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {words.map((i) => (
                    <tr key={i?.id}>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {i.letters}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.description}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.wordLength}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.level}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {i.deletedAt ? (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                            Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/20">
                            No
                          </span>
                        )}
                      </td>
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <a
                          onClick={() => editWord(i.id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {i.letters}</span>
                        </a>
                      </td>
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <a
                          onClick={() => deleteOrRestoreWord(i)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {i.deletedAt ? "Restore" : "Delete"}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-10">
        <Pagination
          className=""
          defaultCurrent={1}
          defaultPageSize={20}
          onChange={onPaginationChange}
          total={wordMeta.total}
        />
      </div>
      {isWordModalVisible && (
        <Modal
          modalContent={
            <AddWord closeModal={() => closeModal()} wordId={wordId} />
          }
        />
      )}
    </div>
  );
};

export default Words;
