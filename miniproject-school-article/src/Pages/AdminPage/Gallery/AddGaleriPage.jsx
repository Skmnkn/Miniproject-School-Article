import { Button, FileInput, Label } from "flowbite-react";
import { useState } from "react";
import { storage } from "../../../Firebase/firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet } from "react-helmet";
import { INSERT_GALLERY } from "../../../Apollo/GraphQL";

const MySwal = withReactContent(Swal);

export const AddGalleryPage = () => {
  const [addGallery] = useMutation(INSERT_GALLERY);

  const [imgUrl, setImgUrl] = useState(null);

  const handleOnchange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgUrl(downloadURL);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGallery({
      variables: {
        objects: {
          image: imgUrl,
        },
      },
    });
    MySwal.fire({
      title: "Gambar Ditambahkan",
      icon: "success",
    });
  };

  return (
    <>
      <Helmet>
        <title>Add Galeri | Admin SD Negeri Lokasari</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center py-5">Add Galeri</h1>
      <form
        className="flex flex-col gap-4 container max-w-4xl"
        onSubmit={handleSubmit}
      >
        <div id="fileUpload">
          <div className="mb-2 block ">
            <Label htmlFor="file" value="Upload Gambar" />
          </div>
          <FileInput
            id="file"
            helperText="Tambahkan Galeri Kegiatan Sekolah"
            onChange={handleOnchange}
          />
        </div>
        <Button type="submit" style={{ backgroundColor: "#D1BEBE" }}>
          Submit
        </Button>
      </form>{" "}
      <br />
    </>
  );
};
