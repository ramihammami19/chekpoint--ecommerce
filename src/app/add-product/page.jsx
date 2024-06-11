"use client";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function form() {
  const [picture, setpicture] = useState("");
  const [category, setcategory] = useState("");
  const handleSelect = (event) => {
    setcategory(event.target.textContent);
  };
  const onFileChange = (e) => {
    if (e.target?.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setpicture(reader.result);
        }
      };

      setpicture(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    fetch("http://localhost:3000/api/produits/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        description: e.target.description.value,
        price: e.target.price.value,
        img: picture,
        category
      }),
    }).then((res) => console.log(res));
  };

  return (
    <ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="name" type="text" name="name" />
          description:
          <input id="description" type="text" name="descripition" />
          price:
          <input id="price" type="text" name="price" />
          image:
          <input onChange={onFileChange} id="img" type="file" />
          category
        </label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {category.length > 0 ? category : "catogery"}{" "}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleSelect} id="men" href="#/action-1">
              men
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSelect} id="women" href="#/action-2">
              women's
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSelect} id="assiore"  href="#/action-3">
            assiore
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSelect} id="kids" href="#/action-4">
              kids
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSelect} id="costume"  href="#/action-3">
            costume
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <input type="submit" value="Submit" />
      </form>
    </ul>
  );
}

export default form;
