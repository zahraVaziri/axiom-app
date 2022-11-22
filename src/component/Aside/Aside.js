import "./aside.css";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";
import queryString from "query-string";
import axios from "axios";
import { Link } from "react-router-dom";

const Aside = ({ location }) => {
  const parsed = queryString.parse(location.search);
  const history = useHistory();
  const [value, setValue] = useState([20, 200]);
  const [checked, setChecked] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    parsed.price = newValue.join("-");
    const stringified = queryString.stringify(parsed);
    history.push({
      pathname: `${location.pathname}`,
      search: stringified,
    });
  };

  useEffect(() => {
    // const parsed = queryString.parse(location.search);
    // console.log("parsed changed", parsed);
    for (let key in parsed) {
      if (key === "brand") {
        const brands = parsed[key].split(",");
        setChecked((prev) => [...prev, ...brands]);
      }
      if (key === "price") {
        const range = parsed[key].split("-");
        setValue(range);
      }
    }
  }, []);

  const handleCheck = (e) => {
    const checkValue = e.target.value;
    const updatedChecked = [...checked];
    const index = updatedChecked.indexOf(checkValue);

    if (index === -1) {
      updatedChecked.push(checkValue);
    } else {
      updatedChecked.splice(index, 1);
    }

    setChecked(updatedChecked);

    if (updatedChecked.length) {
      parsed.brand = updatedChecked.join(",");
    } else {
      delete parsed.brand;
    }
    const stringified = queryString.stringify(parsed);
    history.push({
      pathname: `${location.pathname}`,
      search: stringified,
    });
  };

  return (
    <aside className="content__aside">
      <ul className="category__items sidebar__card">
        <h3>category</h3>
        {categories.map((category) => (
          <li className="" key={category}>
            <Link to={`/products/category/${category.split(" ").join("-")}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar__rang sidebar__card">
        <h3>price range</h3>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={400}
          // getAriaValueText={valuetext}
        />
      </div>
      <div className="sidebar__search sidebar__card">
        <h3>search in products</h3>
        <input type="text" className="search" />
      </div>
      <div className="sidebar__brand sidebar__card">
        <h3>brands</h3>
        <div>
          <div>
            <input
              type="checkbox"
              className="brand"
              id="apple"
              checked={checked.includes("apple")}
              onChange={handleCheck}
              value="apple"
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="brand"
              id="xiaumi"
              checked={checked.includes("xiaumi")}
              onChange={handleCheck}
              value="xiaumi"
            />
            <label htmlFor="xiaumi">xiaumi</label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default withRouter(Aside);
