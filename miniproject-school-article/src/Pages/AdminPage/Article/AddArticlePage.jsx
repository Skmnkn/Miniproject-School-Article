import { useMutation } from "@apollo/client";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { INSERT_ARTICLE } from "../../../Apollo/GraphQL/Mutation/InsertArticle";
import { GET_ARTICLE } from "../../../Apollo/GraphQL/Query/GetAllArticle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet } from "react-helmet";

const initialData = {
  author: "",
  article_title: "",
  article_content: "",
};

const MySwal = withReactContent(Swal);

export const AddArticlePage = () => {
  const [data, setData] = useState(initialData);

  const [createArticle] = useMutation(INSERT_ARTICLE, {
    refetchQueries: [GET_ARTICLE],
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle({
      variables: {
        objects: {
          author: data.author,
          artikel_title: data.article_title,
          artikel_content: data.article_content,
        },
      },
    });
    MySwal.fire({
      title: "Artikel Ditambahkan",
      icon: "success",
    });
    setData(initialData);
  };

  return (
    <>
      <Helmet>
        <title>Add Artikel | Admin SD Negeri Lokasari</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center py-5">Add Artikel</h1>
      <form
        className="flex flex-col gap-4 container max-w-4xl"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="judulArtikel" value="Judul Artikel" />
          </div>
          <TextInput
            id="judulArtikel"
            type="text"
            required={true}
            name="article_title"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="kontenArtikel" value="Konten Artikel" />
          </div>
          <Textarea
            id="kontenArtikel"
            type="text"
            required={true}
            className="h-44"
            name="article_content"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="author" value="Author" />
          </div>
          <TextInput
            id="author"
            type="text"
            required={true}
            name="author"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" style={{ backgroundColor: "#D1BEBE" }}>
          Submit
        </Button>
      </form>
    </>
  );
};
