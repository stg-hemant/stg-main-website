import React, { useState } from "react";

import CustomInput from "./CustomInput";
import Button from "./Buttons";

const TagsInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag();
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 flex items-center"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-gray-500 hover:text-gray-700"
              onClick={() => removeTag(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <div>
        <CustomInput
          title="Blog Tags:"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button type="button" onClick={addTag}>
          Add Tag
        </Button>
      </div>
    </>
  );
};

export default TagsInput;
