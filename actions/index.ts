"use server";

export const getContactInfoAndSendEmail = async (formData: FormData) => {
  formData.append("access_key", process.env.WEB3_FORM_KEY as string);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
