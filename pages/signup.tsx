import React from "react";
// import React, { useState } from "react";
import Link from "next/link";

import Layout from "../components/Layout";

// import CreateUsers from "../../../api/users/CreateUsers";

const Signup = () => {
  /* const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); */

  // const submitSignup = async ({ username, email, phone, password, confirmPassword }) => {
    /* console.log("username");
    console.log("@@@@@");
    console.log(username);

    console.log("email");
    console.log("-------");
    console.log(email);

    console.log("phone");
    console.log("-------");
    console.log(phone);

    console.log("password");
    console.log("-------");
    console.log(password);

    console.log("confirmPassword");
    console.log("-------");
    console.log(confirmPassword); */

    // Hash data to send to the server and make the post request with axios
    /* const userResult = await CreateUsers(username, email, phone, password, confirmPassword);
    console.log("userResult");
    console.log("-------");
    console.log(userResult); */
  // };

  return (
    <Layout title="SignUp | nextjs-template">
    <h1>SignUp</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
  );
};

export default Signup;
