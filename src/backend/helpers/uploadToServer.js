//upload single file : code define here
export const uploadToServer = async (file, folder) => {
  let response = {
    message: "Something went wronge at file upload!",
    code: 500,
    data: null,
  };

  try {
    const mediaUrl = process.env.NEXT_PUBLIC_Media_URL;
    const project = "webanix";

    const secret_key = process.env.NEXT_PUBLIC_SECRET_KEY;

    const formData = new FormData();
    formData.append("media", file);

    const res = await fetch(`${mediaUrl}/upload/?project=${project}&folder=${folder}`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.code == 201) {
      response = res;
    }

  } catch (error) {
    response.message = error.message;
  }

  return response;
};
