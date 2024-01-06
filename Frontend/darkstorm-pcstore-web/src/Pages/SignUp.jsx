
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase-config";
import * as firebaseStorage from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = firebaseStorage.ref(
        storage,
        `images/${Date.now() + username}`
      );
      const uploadTask = firebaseStorage.uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          firebaseStorage
            .getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
              });
            });
        }
      );

      setLoading(false);
      toast.success("Account Created");
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-500 via-black-500 to-white-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Create an Account
        </h2>
        <form onSubmit={signup} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md p-3 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
