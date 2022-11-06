import { useMutation, useSubscription } from "@apollo/client";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Spinner, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DELETE_ARTICLE } from "../../../Apollo/GraphQL/Mutation/DeleteArticle";
import { GET_SUBSCRIPTION_ARTICLE } from "../../../Apollo/GraphQL/Subscription/GetSubscriptionArticle";
import { Helmet } from "react-helmet";

export const MainArticlePage = () => {
  const MySwal = withReactContent(Swal);

  const { data: getArticleData, loading } = useSubscription(
    GET_SUBSCRIPTION_ARTICLE
  );

  const [deleteArticleData] = useMutation(DELETE_ARTICLE);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center ">
        <Spinner size="xl" />
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArticleData({
          variables: {
            id: id,
          },
        });
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Kelola Artikel | Admin SD Negeri Lokasari</title>
      </Helmet>
      <div className="container py-10">
        <div className="flex flex-row justify-between px-2 pb-5">
          <p className="text-xl font-bold uppercase">Manage Article</p>
          <Button color="light" className="w-20">
            <Link
              to={`/secret-admin/addArticle`}
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faAdd} size="xl" />
            </Link>
          </Button>
        </div>
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Article Title</Table.HeadCell>
            <Table.HeadCell>Article Content</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {getArticleData?.miniProject_artikel.map(
              ({ artikel_title, id, author, artikel_content }) => (
                <Table.Row className="bg-white " key={id}>
                  <Table.Cell>{artikel_title}</Table.Cell>
                  <Table.Cell className="text-justify line-clamp-3">
                    {artikel_content}
                  </Table.Cell>
                  <Table.Cell>{author}</Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-row gap-4">
                      <Link
                        to={`/secret-admin/editArticle/${id}`}
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        <FontAwesomeIcon icon={faEdit} size="xl" />
                      </Link>
                      <button
                        className="font-medium text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(id)}
                      >
                        <FontAwesomeIcon icon={faTrash} size="xl" />
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
