import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { AdminHeader } from "../../../Components/Admin/AdminHeader";

export const AddArticlePage = () => {
  return (
    <>
      <AdminHeader />
      <h1 className="text-3xl font-semibold text-center py-5">Add Article</h1>
      <form className="flex flex-col gap-4 container max-w-4xl">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="judulArtikel" value="Judul Artikel" />
          </div>
          <TextInput id="judulArtikel" type="text" required={true} />
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
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="author" value="Author" />
          </div>
          <TextInput id="author" type="text" required={true} />
        </div>
        <Button type="submit" style={{ backgroundColor: "#D1BEBE" }}>
          Submit
        </Button>
      </form>
    </>
  );
};
