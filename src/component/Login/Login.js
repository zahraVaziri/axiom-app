import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { useState, useEffect } from "react";
import { useAuthActions, useAuth } from "../../Providers/AuthProvider";
import { loginUser } from "../../services/loginService";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
const initialValues = {
  email: "",
  password: "",
};
// 2.

// 3.
const validationSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل را درست وارد کنید")
    .required("ایمیل الزامی است"),
  password: Yup.string().required("رمز الزامی است"),
});

const LoginForm = () => {
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const history = useNavigate();
  useEffect(() => {
    if (auth) history(redirect);
  }, [redirect, auth]);
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
      history(redirect);
      setAuth(data);
      
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="fromContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input
          formik={formik}
          name="password"
          label="رمز"
          type="password"
        />

        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          ورود
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="link-sign">هنوز ثبت نام نکردی؟</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
