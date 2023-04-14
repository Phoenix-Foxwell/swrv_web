import {
  faEdit,
  faEye,
  faFill,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BaseUrl } from "~/const";
import { ToastContainer, toast } from "react-toastify";

import styles from "react-toastify/dist/ReactToastify.css";
import { UploadFile } from "~/utils";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const neb = await axios({
    method: "post",
    url: `${BaseUrl}/api/get-neb`,
  });
  return json({ neb: neb.data.data[0] });
};

const NEWSEVENTBLOG = () => {
  const neb = useLoaderData().neb;

  const [img, setImale] = useState<File | null>(null);
  let imgref = useRef<HTMLInputElement | null>(null);
  const [imgerror, setImgerror] = useState<string | null>(null);

  const [viewBox, setViewBox] = useState<boolean>(false);
  const [viewDate, setViewData] = useState<any>({});

  const [editBox, setEditBox] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const titleDescRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const shortDescRef = useRef<HTMLTextAreaElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const [editDate, setEditData] = useState<any>({
    title: titleRef.current?.value || "",
    titleDesc: titleDescRef.current?.value || "",
    description: descriptionRef.current?.value || "",
    shortDesc: shortDescRef.current?.value || "",
    imageUrl: imageUrlRef.current?.value || "",
    type: typeRef.current?.value || "",
    dateTime: dateRef.current?.value || "",
  });

  const [error, setError] = useState<String>("");

  const edit = async (id: number) => {
    const view = await axios({
      method: "post",
      url: `${BaseUrl}/api/get-neb-byid`,
      data: { id: id },
    });
    setEditBox((val) => true);
    setEditData((val: any) => view.data.data[0]);
  };

  const [delBox, setDelBox] = useState<boolean>(false);
  const [delDate, setDelData] = useState<any>({});
  const del = async (id: number) => {
    const view = await axios({
      method: "post",
      url: `${BaseUrl}/api/get-neb-byid`,
      data: { id: id },
    });
    setDelBox((val) => true);
    setDelData((val: any) => view.data.data[0]);
  };

  const delButton = async (id: number) => {
    const res = await axios({
      method: "post",
      url: `${BaseUrl}/api/del-neb`,
      data: { id: id },
    });
    if (res.data.status) {
      toast.success("Successfully Deleted.", { theme: "dark" });
    } else {
      toast.error(res.data.message, { theme: "dark" });
    }
    setDelBox((val) => false);
    window.location.reload();
  };
  const view = async (id: number) => {
    const view = await axios({
      method: "post",
      url: `${BaseUrl}/api/get-neb-byid`,
      data: { id: id },
    });
    setViewBox((val) => true);
    setViewData((val: any) => view.data.data[0]);
  };

  const submit = async (id: number) => {
    if (
      titleRef.current?.value == null ||
      titleRef.current?.value == undefined ||
      titleRef.current?.value == ""
    ) {
      setError("Enter the title.");
    } else if (
      titleDescRef.current?.value == null ||
      titleDescRef.current?.value == undefined ||
      titleDescRef.current?.value == ""
    ) {
      setError("Enter the title description.");
    } else if (
      shortDescRef.current?.value == null ||
      shortDescRef.current?.value == undefined ||
      shortDescRef.current?.value == ""
    ) {
      setError("Enter the short description.");
    } else if (
      descriptionRef.current?.value == null ||
      descriptionRef.current?.value == undefined ||
      descriptionRef.current?.value == ""
    ) {
      setError("Enter the description.");
    } else if (
      typeRef.current?.value == null ||
      typeRef.current?.value == undefined ||
      typeRef.current?.value == ""
    ) {
      setError("Enter the type.");
    } else if (
      dateRef.current?.value == null ||
      dateRef.current?.value == undefined ||
      dateRef.current?.value == ""
    ) {
      setError("Enter the date.");
    } else {
      let sendata: any = {
        title: titleRef.current?.value,
        titleDesc: titleDescRef.current?.value,
        shortDesc: shortDescRef.current?.value,
        dateTime: dateRef.current?.value,
        description: descriptionRef.current?.value,
        type: typeRef.current?.value,
        id: id,
      };

      if (img == null) {
        sendata["imageUrl"] = editDate.imageUrl;
      } else {
        const imageurl = await UploadFile(img);
        if (imageurl.status) {
          sendata["imageUrl"] = imageurl.data;
        } else {
          return setError(imageurl.data);
        }
      }
      const res = await axios({
        method: "post",
        url: `${BaseUrl}/api/upd-neb`,
        data: sendata,
      });
      if (res.data.status) {
        toast.success("Successfully Updated.", { theme: "dark" });
      } else {
        toast.error(res.data.message, { theme: "dark" });
      }
      setEditBox((val) => false);
      window.location.reload();
    }
  };

  const [newBox, setNewBox] = useState<boolean>(false);
  const titleNewRef = useRef<HTMLInputElement>(null);
  const titleDescNewRef = useRef<HTMLTextAreaElement>(null);
  const descriptionNewRef = useRef<HTMLTextAreaElement>(null);
  const shortDescNewRef = useRef<HTMLTextAreaElement>(null);
  const typeNewRef = useRef<HTMLSelectElement>(null);
  const dateNewRef = useRef<HTMLInputElement>(null);

  const submitNew = async () => {
    if (
      titleNewRef.current?.value == null ||
      titleNewRef.current?.value == undefined ||
      titleNewRef.current?.value == ""
    ) {
      setError("Enter the title.");
    } else if (
      titleDescNewRef.current?.value == null ||
      titleDescNewRef.current?.value == undefined ||
      titleDescNewRef.current?.value == ""
    ) {
      setError("Enter the title description.");
    } else if (
      shortDescNewRef.current?.value == null ||
      shortDescNewRef.current?.value == undefined ||
      shortDescNewRef.current?.value == ""
    ) {
      setError("Enter the short description.");
    } else if (
      descriptionNewRef.current?.value == null ||
      descriptionNewRef.current?.value == undefined ||
      descriptionNewRef.current?.value == ""
    ) {
      setError("Enter the description.");
    } else if (
      typeNewRef.current?.value == null ||
      typeNewRef.current?.value == undefined ||
      typeNewRef.current?.value == ""
    ) {
      setError("Enter the type.");
    } else if (
      dateNewRef.current?.value == null ||
      dateNewRef.current?.value == undefined ||
      dateNewRef.current?.value == ""
    ) {
      setError("Enter the date.");
    } else if (img == null || img == undefined) {
      setError("Select the image..");
    } else {
      const imageurl = await UploadFile(img);
      if (imageurl.status) {
        let sendata: any = {
          title: titleNewRef.current?.value,
          titleDesc: titleDescNewRef.current?.value,
          shortDesc: shortDescNewRef.current?.value,
          dateTime: dateNewRef.current?.value,
          description: descriptionNewRef.current?.value,
          type: typeNewRef.current?.value,
          imageUrl: imageurl.data,
        };

        const res = await axios({
          method: "post",
          url: `${BaseUrl}/api/add-neb`,
          data: sendata,
        });

        if (res.data.status) {
          toast.success("Successfully added.", { theme: "dark" });
        } else {
          toast.error(res.data.message, { theme: "dark" });
        }
        setNewBox((val) => false);
        window.location.reload();
      } else {
        setError(imageurl.data);
      }
    }
  };

  return (
    <>
      {/* view box */}
      <div
        className={`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${
          viewBox ? "grid" : "hidden"
        }`}
      >
        <div className="bg-[#31353f] rounded-lg p-4 w-96 ">
          <div className="mx-auto">
            <div className="w-full grid place-items-center mb-4">
              <img
                src={viewDate.imageUrl}
                alt="avatar"
                className="w-56 h-56 object-cover object-center rounded-md"
              />
            </div>
            <div className="text-white grid place-items-center">
              <p>{viewDate.title} </p>
              <p>
                {new Date(viewDate.dateTime).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>{viewDate.titleDesc}</p>
              <div className="w-full h-[1px] bg-gray-300 my-2"></div>
              <p>{viewDate.shortDesc}</p>
              <div className="w-full h-[1px] bg-gray-300 my-2"></div>
              <p>{viewDate.description}</p>
            </div>
            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
            <div className="grid place-items-center">
              <div
                onClick={() => setViewBox(false)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>CLOSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* del box */}
      <div
        className={`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${
          delBox ? "grid" : "hidden"
        }`}
      >
        <div className="bg-[#31353f] rounded-lg p-4">
          <div className="mx-auto">
            <div className="text-white">
              <p>Are you Sure you want to delete {delDate.title}?</p>
            </div>
            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
            <div className="flex w-full justify-between">
              <div
                onClick={() => setDelBox(false)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>CLOSE</p>
              </div>
              <div
                onClick={() => delButton(delDate.id)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* edit box */}
      <div
        className={`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${
          editBox ? "grid" : "hidden"
        }`}
      >
        <div className="bg-[#31353f] rounded-lg p-4 w-80 ">
          <div className="mx-auto">
            <div className="w-full grid place-items-center mb-4">
              <img
                src={img == null ? editDate.imageUrl : URL.createObjectURL(img)}
                alt="avatar"
                className="w-40 h-40 object-cover object-center rounded-md"
              />
            </div>
            <div className="hidden">
              <input
                type="file"
                accept="image/*"
                ref={imgref}
                onChange={(value) => {
                  let file_size = parseInt(
                    (value!.target.files![0].size / 1024 / 1024).toString()
                  );
                  if (file_size < 4) {
                    setImgerror(null);
                    setImale(value!.target.files![0]);
                  } else {
                    setImgerror("Image file size must be less then 4 mb");
                  }
                }}
              />
            </div>
            <div className="text-white">
              {imgerror == "" ||
              imgerror == null ||
              imgerror == undefined ? null : (
                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                  {imgerror}
                </div>
              )}
              <div className="grid place-items-center">
                <button
                  onClick={() => {
                    imgref.current?.click();
                  }}
                  className="text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm"
                >
                  UPLOAD IMAGE
                </button>
              </div>
              <p className="text-white text-sm font-semibold text-left">
                Title
              </p>
              <input
                ref={titleRef}
                type={"text"}
                name="name"
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the name.."
                autoComplete="off"
                value={editDate.title}
                onChange={(e) =>
                  setEditData((data: any) => ({
                    ...data,
                    title: e.target.value,
                  }))
                }
              />
              <p className="text-white text-sm font-semibold text-left">
                Title Description
              </p>
              <textarea
                ref={titleDescRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the number.."
                autoComplete="off"
                value={editDate.titleDesc}
                onChange={(e) =>
                  setEditData((data: any) => ({
                    ...data,
                    titleDesc: e.target.value,
                  }))
                }
              ></textarea>
              <p className="text-white text-sm font-semibold text-left">
                Short Description
              </p>
              <textarea
                ref={shortDescRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the position.."
                autoComplete="off"
                value={editDate.shortDesc}
                onChange={(e) =>
                  setEditData((data: any) => ({
                    ...data,
                    shortDesc: e.target.value,
                  }))
                }
              ></textarea>

              <p className="text-white text-sm font-semibold text-left">
                Description
              </p>
              <textarea
                ref={descriptionRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the position.."
                autoComplete="off"
                value={editDate.description}
                onChange={(e) =>
                  setEditData((data: any) => ({
                    ...data,
                    description: e.target.value,
                  }))
                }
              ></textarea>
              <p className="text-white text-sm font-semibold text-left">Date</p>
              <input
                ref={dateRef}
                type={"date"}
                name="dob
                            "
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the dob.."
                autoComplete="off"
                value={editDate.dateTime.substring(0, 10)}
                onChange={(e) =>
                  setEditData((data: any) => ({
                    ...data,
                    dateTime: e.target.value,
                  }))
                }
              />
              <p className="text-white text-sm font-semibold text-left">Type</p>
              <select
                ref={typeRef}
                name="type"
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
              >
                <option
                  selected={editDate.type == 1 ? true : false}
                  value="1"
                  className="bg-[#31353f]"
                >
                  BLOG
                </option>
                <option
                  selected={editDate.type == 2 ? true : false}
                  value="2"
                  className="bg-[#31353f]"
                >
                  NEWS
                </option>
                <option
                  selected={editDate.type == 3 ? true : false}
                  value="3"
                  className="bg-[#31353f]"
                >
                  EVENT
                </option>
              </select>
            </div>
            {error == "" || error == null || error == undefined ? null : (
              <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                {error}
              </div>
            )}
            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
            <div className="flex w-full justify-between">
              <div
                onClick={() => setEditBox(false)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>CLOSE</p>
              </div>
              <div
                onClick={() => submit(editDate.id)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faFill}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>SUBMIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* add box */}
      <div
        className={`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${
          newBox ? "grid" : "hidden"
        }`}
      >
        <div className="bg-[#31353f] rounded-lg p-4 w-80">
          <div className="mx-auto">
            <div
              className={`${
                img == null ? "hidden" : ""
              } w-full grid place-items-center mb-4`}
            >
              <img
                src={
                  img == null
                    ? "/images/avatar/user.png"
                    : URL.createObjectURL(img)
                }
                alt="avatar"
                className="w-40 h-40 object-cover object-center rounded-md"
              />
            </div>
            <div className="hidden">
              <input
                type="file"
                accept="image/*"
                ref={imgref}
                onChange={(value) => {
                  let file_size = parseInt(
                    (value!.target.files![0].size / 1024 / 1024).toString()
                  );
                  if (file_size < 4) {
                    setImgerror(null);
                    setImale(value!.target.files![0]);
                  } else {
                    setImgerror("Image file size must be less then 4 mb");
                  }
                }}
              />
            </div>
            <div className="text-white">
              {imgerror == "" ||
              imgerror == null ||
              imgerror == undefined ? null : (
                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                  {imgerror}
                </div>
              )}
              <div className="grid place-items-center">
                <button
                  onClick={() => {
                    imgref.current?.click();
                  }}
                  className="text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm"
                >
                  UPLOAD IMAGE
                </button>
              </div>
              <p className="text-white text-sm font-semibold text-left">
                Title
              </p>
              <input
                ref={titleNewRef}
                type={"text"}
                name="name"
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the name.."
                autoComplete="off"
              />
              <p className="text-white text-sm font-semibold text-left">
                Title Description
              </p>
              <textarea
                ref={titleDescNewRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the number.."
                autoComplete="off"
              ></textarea>
              <p className="text-white text-sm font-semibold text-left">
                Short Description
              </p>
              <textarea
                ref={shortDescNewRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the position.."
                autoComplete="off"
              ></textarea>

              <p className="text-white text-sm font-semibold text-left">
                Description
              </p>
              <textarea
                ref={descriptionNewRef}
                className="h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the position.."
                autoComplete="off"
              ></textarea>
              <p className="text-white text-sm font-semibold text-left">Date</p>
              <input
                ref={dateNewRef}
                type={"date"}
                name="dob
                            "
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
                placeholder="Enter the dob.."
                autoComplete="off"
              />
              <p className="text-white text-sm font-semibold text-left">Type</p>
              <select
                ref={typeNewRef}
                name="type"
                className="py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none"
              >
                <option
                  selected={editDate.type == 1 ? true : false}
                  value="1"
                  className="bg-[#31353f]"
                >
                  BLOG
                </option>
                <option
                  selected={editDate.type == 2 ? true : false}
                  value="2"
                  className="bg-[#31353f]"
                >
                  NEWS
                </option>
                <option
                  selected={editDate.type == 3 ? true : false}
                  value="3"
                  className="bg-[#31353f]"
                >
                  EVENT
                </option>
              </select>
            </div>
            {error == "" || error == null || error == undefined ? null : (
              <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">
                {error}
              </div>
            )}
            <div className="w-full h-[1px] bg-gray-300 my-2"></div>
            <div className="flex w-full justify-between">
              <div
                onClick={() => setNewBox(false)}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>CLOSE</p>
              </div>
              <div
                onClick={submitNew}
                className={`text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer`}
              >
                <FontAwesomeIcon
                  icon={faFill}
                  className="w-6"
                ></FontAwesomeIcon>
                <p>SUBMIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow bg-[#1b2028] my-2 rounded-md p-4 w-full">
        <div className="flex">
          <h1 className="text-white font-medium text-xl">NEWS EVENT BLOG</h1>
          <div className="grow"></div>
          <button
            onClick={() => setNewBox(true)}
            className="bg-green-600 py-1 px-2 text-sm text-white rounded-md"
          >
            ADD NEW
          </button>
        </div>
        <div className="w-full bg-slate-400 h-[1px] my-2"></div>
        <div className="overflow-x-hidden no-scrollbar">
          <div className="bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap">
            <div className="w-14">Id</div>
            <div className="grow"></div>
            <div className="w-32">Name</div>
            <div className="grow"></div>
            <div className="w-24">Type</div>
            <div className="grow"></div>
            <div className="w-32">Action</div>
          </div>
          {neb.map((val: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap"
              >
                <div className="w-14">{val.id}</div>
                <div className="grow"></div>
                <div className="w-32">{val.title}</div>
                <div className="grow"></div>
                <div className="w-24">
                  {val.type == 1 ? (
                    <div className="w-14 py-1 text-white text-xs bg-red-500 text-center rounded-md font-medium">
                      BLOG
                    </div>
                  ) : val.type == 2 ? (
                    <div className="w-14 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium">
                      NEWS
                    </div>
                  ) : (
                    <div className="w-14 py-1 text-white text-xs bg-blue-500 text-center rounded-md font-medium">
                      EVENT
                    </div>
                  )}
                </div>
                <div className="grow"></div>
                <div className="w-32 flex text-bold text-md gap-4">
                  <div
                    className="text-cyan-500 cursor-pointer"
                    onClick={() => edit(val.id)}
                  >
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </div>
                  <div className="text-emerald-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => view(val.id)}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="text-rose-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => del(val.id)}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default NEWSEVENTBLOG;
