import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";
import "./form.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Обовʼязково"),
  email: Yup.string().email("Невірний email").required("Обовʼязково"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обовʼязково"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Дані відправлено! " + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="form-container">
      <h1 className="form-title">Форма реєстрації</h1>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        aria-label="Форма реєстрації"
        className="form-box"
      >
        <Input
          label="Ім'я: "
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
          aria-invalid={formik.touched.name && !!formik.errors.name}
          error={formik.touched.name && !!formik.errors.name}
        >
          {formik.touched.name && formik.errors.name && (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          )}
        </Input>

        <Input
          label="Email: "
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
          aria-invalid={formik.touched.email && !!formik.errors.email}
          error={formik.touched.email && !!formik.errors.email}
        >
          {formik.touched.email && formik.errors.email && (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          )}
        </Input>

        <Input
          label="Пароль: "
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
          aria-invalid={formik.touched.password && !!formik.errors.password}
          error={formik.touched.password && !!formik.errors.password}
        >
          {formik.touched.password && formik.errors.password && (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          )}
        </Input>

        <button type="submit" className="form-button">
          Відправити
        </button>
      </form>
    </div>
  );
};

export default Form;
