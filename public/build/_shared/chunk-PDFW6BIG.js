import {
  BaseUrl,
  axios_default
} from "/build/_shared/chunk-Z6G3P7XF.js";

// app/utils.ts
async function UploadFile(file) {
  try {
    let formData = new FormData();
    formData.append("file", file);
    const data = await axios_default({
      method: "post",
      url: `${BaseUrl}/api/upload-file`,
      data: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Options": "*",
        "Access-Control-Allow-Methods": "*",
        "X-Content-Type-Options": "*",
        "Content-Type": "multipart/form-data",
        Accept: "*"
      }
    });
    if (data.data.status == false) {
      return { data: data.data.message, status: false };
    } else {
      return { data: data.data.data.filePath, status: true };
    }
  } catch (e) {
    return { data: e.toString(), status: false };
  }
}
async function getCampaignType(id) {
  try {
    const data = await axios_default.post(`${BaseUrl}/api/get-campaign-type`);
    if (data.data.status == false) {
      return data.data.message;
    } else {
      let name = "";
      for (let i = 0; i < data.data.data.length; i++) {
        if (data.data.data[i].id == id) {
          name = data.data.data[i].categoryName;
        }
      }
      return name;
    }
  } catch (e) {
    return e.toString();
  }
}

export {
  UploadFile,
  getCampaignType
};
//# sourceMappingURL=/build/_shared/chunk-PDFW6BIG.js.map
