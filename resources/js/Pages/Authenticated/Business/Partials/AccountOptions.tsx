import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IUser } from "@/types";
import DeleteConfirmAccountModal from "@/Components/Modals/CreateEdit/AccountModal/DeleteConfirmAccountModal";

export default function AccountOptions({
  account,
  requestEdit,
}: {
  account: IUser;
  requestEdit: () => void;
}) {
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    useState<boolean>(false);
  return (
    <div
      className={"text-center " + (account.role === "Owner" ? "hidden" : "")}
    >
      <Dropdown>
        <Dropdown.Trigger>
          <button
            type="button"
            className="rounded-[50%] p-2  align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none"
          >
            <BsThreeDotsVertical className="text-lg" />
          </button>
        </Dropdown.Trigger>

        <Dropdown.Content>
          {/* <button
            onClick={() => requestShow()}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FaBars className="text-base" /> View
            </div>
          </button> */}
          <button
            onClick={() => requestEdit()}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <FaEdit className="text-base" /> Edit
            </div>
          </button>
          {/* <Link
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            href={route('account.')}
          >
            <div className="flex items-center gap-3">
              <FaUserEdit className="text-base" /> Edit
            </div>
          </Link> */}

          <button
            onClick={() => setOpenConfirmDeleteModal(true)}
            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3 text-danger-600">
              <FaTrashAlt className="text-base" /> Delete
            </div>
          </button>
        </Dropdown.Content>
      </Dropdown>

      <DeleteConfirmAccountModal
        account={account}
        isOpen={openConfirmDeleteModal}
        requestClose={() => setOpenConfirmDeleteModal(false)}
      />
    </div>
  );
}
