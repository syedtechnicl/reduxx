"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, removeTodo } from "../reduxx/slicer";
import { RootState } from "../reduxx/store";

interface TodoListsmain {
  name: string;
  qualification: string;
  address: string;
}

const TodoList = () => {
  const [name, setname] = useState("");
  const [qualification, setqualification] = useState("");
  const [address, setaddress] = useState("");
  // use selector
  const data = useSelector((state: RootState) => state.TodoListss);

  // reducers
  const dispatch = useDispatch();

  const added = () => {
    const main = { name, qualification, address };
    dispatch(AddTodo([main]));
  };

  const remove = (elem: TodoListsmain) => {
    dispatch(removeTodo(elem.name));
  };

  return (
    <div>
      <center>
        <h1>Name : {name}</h1>
        <h1>Qualification : {qualification}</h1>
        <h1>Address : {address}</h1>
        <br />
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.currentTarget.value);
          }}
          type="text"
          name=""
          id=""
        />
        <br />
        <br />
        <input
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => {
            setqualification(e.currentTarget.value);
          }}
          type="text"
          name=""
          id=""
        />
        <br />
        <br />
        <input
          placeholder="address"
          value={address}
          onChange={(e) => {
            setaddress(e.currentTarget.value);
          }}
          type="text"
          name=""
          id=""
        />
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            added();
          }}
        >
          Add todo
        </button>
        <br />
        <br />
        <div className="main2">
          {data.map((elem, ind) => (
            <div style={{ width: "200px" }} className="main_maping" key={ind}>
              <h1>Name: {elem.name}</h1>
              <h2>qualification: {elem.qualification}</h2>
              <h3>Address: {elem.address}</h3>
              <button
                onClick={() => {
                  remove(elem);
                }}
              >
                Remove {ind + 1}
              </button>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default TodoList;
