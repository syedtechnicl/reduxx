"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, Remove } from "../Reduxx/slicer";
import { RootState } from "../Reduxx/store";

const Todolist = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");

  // main data
  const data = useSelector((dd: RootState) => dd.TodoLists);
  const dispatch = useDispatch();

  const adding = () => {
    const alltodo = { name, age, address };
    dispatch(AddTodo([alltodo]));
    setname("");
    setage("");
    setaddress("");
  };

  const remove = (name: string) => {
    dispatch(Remove(name));
  };

  const id = new Date();
  const main = Math.floor(id.getMilliseconds());

  const person = {
    mains: main,
  };

  return (
    <>
      <div className="main">
        <center key={person.mains}>
          <h1>Name : {name}</h1>
          <h1>Age : {age}</h1>
          <h1>Address : {address}</h1>
          <br />
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setname(e.currentTarget.value);
            }}
            type="text"
          />
          <br />
          <br />
          <input
            placeholder="Age"
            value={age}
            onChange={(e) => {
              setage(e.currentTarget.value);
            }}
            type="text"
          />
          <br />
          <br />
          <input
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setaddress(e.currentTarget.value);
            }}
            type="text"
          />
          <br />
          <br />
          <button
            onClick={() => {
              adding();
            }}
          >
            Add Todo
          </button>
          <br />
          <br />
          <hr />
          <hr />
          {data.map((elem: TodoLists, ind) => {
            return (
              <>
                <div className="main" key={ind + 1}>
                  <h1>Name {elem.name}</h1>
                  <h2>Age {elem.age}</h2>
                  <h3>Address {elem.address}</h3>
                  <button onClick={() => remove(elem.name)}>Remove</button>
                </div>
              </>
            );
          })}
        </center>
      </div>
    </>
  );
};

export default Todolist;
