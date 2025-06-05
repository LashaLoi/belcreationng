import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  fullName: string;
  age: number;
  phone: string;
  church: string;
  city: string;
  email: string;
  alerg: string;
  youtime: string;
  house: string;
  comment: string;
  tranfer: string;
};

export const useSubmit = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      const result = await fetch(
        "https://script.google.com/macros/s/AKfycbw7FlJAuWz5rBhS0SgkGZYJnmhY6QwsQwiJDNCKNf7L3AjI0q5Ew4O_DE2MBkALZZz4iA/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            fullName: data["fullName"] ?? "-",
            age: data["age"] ?? "-",
            phone: data["phone"] ?? "-",
            church: data["church"] ?? "-",
            city: data["city"] ?? "-",
            email: data["email"] ?? "-",
            alerg: data["alerg"] ?? "-",
            youtime: data["youtime"] ?? "-",
            house: data["house"] ?? "-",
            comment: data["comment"] ?? "-",
            tranfer: data["tranfer"] ?? "-",
            date: Date.now(),
          }),
        },
      );

      if (!result.ok) {
        setError(true);
        setLoading(false);

        return;
      }

      router.push("/final");
    } catch {
      setError(true);
      setLoading(false);

      return;
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    error,
    loading,
  };
};
