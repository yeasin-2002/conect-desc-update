"use client"
import { IIntlTranslator } from "@/Interface";
import { FC, useState } from "react";
import { Button, InputField } from "..";



export const ContactUsForm: FC<IIntlTranslator> = ({ t }) => {
  const [formData, setFormData] = useState<any>({
    name: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // You can access form data here from the state variable `formData`
    console.log(formData);
    // You can perform further actions like sending the data to a server here
  };
  return (
    <div className="bg-base-100 bg-opacity-50 rounded-md p-6 w-full ">
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.yourName")}
      />
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.yourAddress")}
      />
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.writeSubject")}
      />
      <textarea
        className="border-primary p-3 w-full"
        placeholder={t("contactForm.writeMessage")}
        rows={8}
      />
      <br /> <br />
      <Button width="full" variant="primary" onClick={handleSubmit}>
        {t("contactForm.submit")}
      </Button>
    </div>
  );
};
