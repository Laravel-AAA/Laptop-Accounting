import DangerButton from "@/Components/Buttons/DangerButton";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";
import Input from "@/Components/Inputs/Input";
import NoImageImage from "@/Pages/Authenticated/Inventory/Partials/NoImageImage";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { ICreateProduct, IModalAction, IProduct } from "@/types";
import { useState } from "react";

export default function FormImage({
  formProps: form,
  modalAction,
}: {
  formProps: UseBetterForm<ICreateProduct>;
  modalAction: IModalAction<IProduct>;
}) {
  const state = modalAction.state;
  const img = form.data.img;
  /** In edit modalAction.state the image can be change/removed/default.
   * - change when user click change.
   * - removed when user click remove.
   * - default is when user never click on either change/remove.
   */
  const [editImageState, setEditImageState] = useState<
    "removed" | "change" | "default"
  >(() => "default");
  const imageElement = (
    <div className="mt-1  rounded-md border border-gray-300">
      <img
        className="mx-auto h-40"
        src={img?.startsWith("http") ? img : "products-images/" + img}
        alt={"Image " + (img ?? "") + " of product " + form.data.name}
      />
    </div>
  );

  const inputImage = (
    <>
      <Input
        label={
          ((img === null && state === "edit") ||
          editImageState === "removed" ||
          state === "create"
            ? "Choose "
            : editImageState === "change"
            ? "Change "
            : "") + "Image"
        }
        type="file"
        className="mt-1 block w-full"
        hidden={!!img}
        disabled={state === "show" || form.processing}
        required={false}
        onChange={(e) => {
          form.setData("imageFile", e.target.files?.[0] ?? null);
        }}
        errorMsg={form.errors.img || form.errors.imageFile}
        hideError={form.isDirty("img") || form.isDirty("imageFile")}
        hint="We recommend an image with white background"
      />
      {form.progress && (
        <div className="my-1 h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-700">
          <div
            style={{ width: form.progress + "%" }}
            className="h-2.5 rounded-md bg-green-600 dark:bg-green-500"
          ></div>
        </div>
      )}
    </>
  );

  if (state === "create") return inputImage;
  if (state === "show") {
    if (img === null) return <NoImageImage />;
    else return imageElement;
  }
  //if edit
  if (img === null) return inputImage;

  if (editImageState === "default")
    return (
      <>
        {imageElement}
        <div className="mb-4 mt-1 flex justify-center gap-8">
          <TertiaryButton
            disabled={form.processing}
            onClick={() => {
              setEditImageState("change");
            }}
          >
            Change&nbsp;Image
          </TertiaryButton>
          <DangerButton
            disabled={form.processing}
            onClick={() => {
              setEditImageState("removed");
              form.setData("img", null);
            }}
          >
            Remove&nbsp;Image
          </DangerButton>
        </div>
      </>
    );
  //if editImageState is `change` OR `removed`
  return inputImage;
}
