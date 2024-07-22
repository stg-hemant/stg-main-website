import React, { useState } from "react";
import axios from "axios";

import { base_URL } from "../../../components/api/constants";
import CustomInput from "../../../components/UI/CustomInput";
import Button from "../../../components/UI/Buttons";
import TagsInput from "../../../components/UI/TagsInput";
import { toast } from "react-toastify";

const BlogsForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");

  const addBlogHandler = async (event) => {
    event.preventDefault();

    console.log("formData");

    try {
      const response = await axios.post(
        `${base_URL}/blogs`,
        { title, image, author, tags: tags.join(", "), description },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response", response);

      toast.success("Blog added successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTitle("");
      setImage(null);
      setAuthor("");
      setTags([]);
      setDescription("");
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Error adding blog. Please try again later.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="max-w-md shadow p-4">
      <form onSubmit={addBlogHandler}>
        <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
        <CustomInput
          title="Blog Title:"
          name="blog-title"
          id="blog-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CustomInput
          title="Blog Image:"
          name="blog-image"
          id="blog-image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <CustomInput
          title="Author:"
          name="author"
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TagsInput tags={tags} setTags={setTags} />

        <label className="block my-4" id="blog-description">
          Description:
          <textarea
            name="blog-description"
            className="w-full mt-2 p-2 border border-gray-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <Button type="submit">Add Blog</Button>
      </form>
    </div>
  );
};

export default BlogsForm;
