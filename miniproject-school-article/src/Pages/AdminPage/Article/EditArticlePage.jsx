import { useMutation, useQuery } from "@apollo/client";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EDIT_ARTICLE } from "../../../Apollo/GraphQL/Mutation/EditArticle";
import { GET_ARTICLE } from "../../../Apollo/GraphQL/Query/GetAllArticle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet } from "react-helmet";

export const EditArticlePage = () => {
  const MySwal = withReactContent(Swal);

  const params = useParams();
  const setId = params.id;

  const [editArticle] = useMutation(EDIT_ARTICLE);

  const { data: editArticleData } = useQuery(GET_ARTICLE, {
    variables: {
      id: setId,
    },
  });

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      ...editArticleData?.miniProject_artikel[0],
    });
  }, [editArticleData?.miniProject_artikel]);

  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editArticle({
      variables: {
        id: setId,
        artikel_title: data.artikel_title,
        artikel_content: data.artikel_content,
        author: data.author,
      },
    });
    MySwal.fire({
      title: "Artikel Diubah",
      icon: "success",
    });
  };

  return (
    <>
      <Helmet>
        <title>Edit Artikel | Admin SD Negeri Lokasari</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center py-5">Edit Artikel</h1>
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
            value={data.artikel_title}
            name="artikel_title"
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
            value={data.artikel_content}
            name="artikel_content"
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
            value={data.author}
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
