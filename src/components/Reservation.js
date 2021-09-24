// import React, { useState } from "react";

export default function Reservation({
  handleSubmit,
  value,
  setValue,
  handleOnChange,
}) {
  return (
    <form
      onClick={handleSubmit}
      className="flex flex-col w-full max-w-xl my-4 p-8 bg-white space-y-8"
    >
      <input
        placeholder="Name"
        className="border-0 border-b-2 border-gray-400 text-xl focus:ring-0 focus:border-b-2 focus:border-black"
        name="name"
        type="text"
        value={value.name}
        onChange={handleOnChange}
      />
      <input
        placeholder="E-mail"
        className="border-0 border-b-2 border-gray-400 text-xl focus:ring-0 focus:border-b-2 focus:border-black"
        type="email"
        name="email"
        value={value.email}
        onChange={handleOnChange}
      />
      <input
        placeholder="Phone"
        className="border-0 border-b-2 border-gray-400 text-xl focus:ring-0 focus:border-b-2 focus:border-black"
        type="tel"
        name="phone"
        value={value.phone}
        onChange={handleOnChange}
      />
      <div className="flex ">
        <label className="w-32 text-xl">Pick a day</label>
        <input
          type="date"
          name="date"
          className="w-full border-0 border-b-2 border-gray-400 text-lg focus:ring-0 focus:border-b-2 focus:border-black"
          value={value.date}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex">
        <label className="w-32 text-xl">Pick a time</label>
        <input
          type="time"
          name="time"
          className="w-full border-0 border-b-2 border-gray-400 text-lg focus:ring-0 focus:border-b-2 focus:border-black"
          value={value.time}
          onChange={handleOnChange}
        />
      </div>
      <input
        placeholder="People"
        name="people"
        className="border-0 border-b-2 border-gray-400 text-center text-xl focus:ring-0 focus:border-b-2 focus:border-black"
        type="number"
        value={value.people}
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="w-full bg-black py-4 px-6 text-gray-200 text-xl self-center"
      >
        Make a reservation
      </button>
    </form>
  );
}
