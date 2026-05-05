import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
      <h2 className="text-3xl mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 text-black"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 text-black"
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full p-2 text-black"
        />

        <button className="bg-purple-500 px-6 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;