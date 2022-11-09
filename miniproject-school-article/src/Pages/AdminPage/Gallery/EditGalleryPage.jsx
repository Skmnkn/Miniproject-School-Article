import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { AdminHeader } from "../../../Components/Admin/AdminHeader";

export const EditGalleryPage = () => {
  return (
    <>
      <AdminHeader />
      <h1 className="text-3xl font-semibold text-center py-5">Edit Gallery</h1>
      <form className="flex flex-col gap-4 container max-w-4xl">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="captionFoto" value="Caption Foto" />
          </div>
          <TextInput id="captionFoto" type="text" required={true} />
        </div>
        <div id="fileUpload">
          <div className="mb-2 block ">
            <Label htmlFor="file" value="Upload Gambar" />
          </div>
          <FileInput id="file" helperText="Tambahkan Galeri Kegiatan Sekolah" />
        </div>
        <Button type="submit" style={{ backgroundColor: "#D1BEBE" }}>
          Submit
        </Button>
        <Button type="submit" color="failure">
          Delete
        </Button>
      </form>
    </>
  );
};
