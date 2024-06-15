"use client";

import { IIntlTranslator } from "@/Interface";
import { getContactInfoAndSendEmail } from "@/actions";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Button, InputField } from "..";
import { LoadingLoop } from "../icons";

export const ContactUsForm: FC<IIntlTranslator> = ({ t }) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    try {
      const convertedFormData = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        convertedFormData.append(key, value as string);
      }

      await getContactInfoAndSendEmail(convertedFormData);
      toast.success("Email sent suc cessfully");
      setFormData({
        name: "",
        address: "",
        subject: "",
        message: "",
        contact: "",
      });
    } catch (error: any) {
      toast.error("Something went wrong");
      console.log("🚀 ~ handleSubmit ~ error:", error?.message);
    } finally {
      setIsFormSubmitting(false);
    }
  };
  return (
    <form
      className="bg-base-100 bg-opacity-50 rounded-md p-6 w-full "
      onSubmit={handleSubmit}
    >
      <InputField
        value={formData.name}
        handleOnChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        placeholder={t("contactForm.yourName")}
        name="name"
      />
      <InputField
        value={formData.email}
        handleOnChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        placeholder={t("contactForm.yourAddress")}
        name="email"
        type="email"
      />
      <InputField
        value={formData.subject}
        handleOnChange={(e) =>
          setFormData({ ...formData, subject: e.target.value })
        }
        placeholder={t("contactForm.writeSubject")}
        name="subject"
      />
      <InputField
        value={formData.contact}
        handleOnChange={(e) =>
          setFormData({ ...formData, contact: e.target.value })
        }
        placeholder={t("contactForm.contactNumber")}
        name="contact"
        className="mb-4"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        name="message"
        className="border-primary p-3 w-full text-sm"
        placeholder={t("contactForm.writeMessage")}
        rows={8}
      />
      <br /> <br />
      <Button width="full" variant="primary" type="submit">
        {isFormSubmitting ? (
          <LoadingLoop className="mx-auto" />
        ) : (
          t("contactForm.submit")
        )}
      </Button>
    </form>
  );
};
