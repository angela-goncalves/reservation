import React, { useState } from "react";

export default function Reservation({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");

  const handleOnChange = (e) => {
    setFirstName(e.target.value);
    setEmail(e.target.value);
    setPhone(e.target.value);
    setPeople(e.target.value);
  };
  return (
    <form onClick={onSubmit} className="flex flex-col w-full max-w-2xl ">
      <input
        placeholder="Name"
        className="rounded-md border-2 border-purple-900"
        type="text"
        value={firstName}
        onChange={handleOnChange}
      />
      <input
        placeholder="E-mail"
        className="rounded-md border-2 border-purple-900"
        type="email"
        value={email}
        onChange={handleOnChange}
      />
      <input
        placeholder="Phone"
        className="rounded-md border-2 border-purple-900"
        type="tel"
        value={phone}
        onChange={handleOnChange}
      />
      <input
        placeholder="People"
        className=""
        type="select"
        value={people}
        onChange={handleOnChange}
      />
      <input type="submit" value="save" />
    </form>
  );
}
