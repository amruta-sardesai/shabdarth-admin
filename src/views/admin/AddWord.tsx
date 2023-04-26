import React, { useEffect, useState } from "react";
import { Word } from "./Words";
import { getWord, saveWord } from "../../apis/word";
import { useNotification } from "../../NotificationContext";

const AddWord: React.FC<{ wordId: any; closeModal: () => void }> = ({
  wordId,
  closeModal,
}) => {
  const { showNotification } = useNotification();
  const [errors, setErrors] = useState<any>(null);
  const [word, setWord] = useState<Word>({
    letters: "",
    description: "",
    level: 1,
    wordLength: 0,
    deletedAt: null,
  });

  useEffect(() => {
    if (wordId) {
      getWord(wordId).then((res: any) => {
        setWord(res.data.data);
      });
    }
  }, []);

  const submitWord = () => {
    const { hasErrors, validationErrors } = validateWordForm();
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }
    setErrors(null);
    const data = {
      letters: word.letters.split(","),
      description: word.description,
      level: word.level,
    };

    saveWord(data)
      .then(() => {
        showNotification("success", "Word added successfully", "", "topRight");
        cancel();
      })
      .catch(() => {
        showNotification("error", "Error occured", "", "topRight");
      });
  };
  const cancel = () => {
    closeModal();
  };
  const setLetters = (value: any) => {
    setWord({ ...word, letters: value });
  };
  const validateWordForm = () => {
    const validationErrors: any = {};
    if (word.letters === "") {
      validationErrors.letters = "Letters are required";
    }
    if (word.description === "") {
      validationErrors.description = "Description is required";
    }
    if (word.level === null) {
      validationErrors.level = "Level is required";
    }
    const hasErrors = Boolean(Object.keys(validationErrors).length);
    return { hasErrors, validationErrors };
  };
  return (
    <div className="">
      <span className="font-medium">{wordId ? "Update" : "Add"} Word</span>
      <div className="pt-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Letters
        </label>
        <div className="mt-1">
          <input
            type="string"
            id="letters"
            name="letters"
            value={word.letters}
            onChange={(e) => setLetters(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors && (
          <span className="text-sm text-red-500">{errors.letters}</span>
        )}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={3}
            value={word.description}
            onChange={(e) => setWord({ ...word, description: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        {errors && (
          <span className="text-sm text-red-500">{errors.description}</span>
        )}
      </div>
      <div className="pt-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Level
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="level"
            name="level"
            value={word.level}
            min={1}
            onChange={(e) =>
              setWord({ ...word, level: parseInt(e.target.value) })
            }
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {errors && <span className="text-sm text-red-500">{errors.level}</span>}
      </div>
      <div className="flex items-center justify-start py-4 gap-x-6 border-gray-900/10 ">
        <button
          onClick={() => submitWord()}
          type="submit"
          className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-primary hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
        >
          Save
        </button>
        <button
          onClick={() => cancel()}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddWord;
