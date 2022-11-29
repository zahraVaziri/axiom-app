import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../services/httpService";
import styles from "./search.module.css";
const Search = () => {
  const [value, setvalue] = useState("");
  const [contacts, setContacts] = useState([]);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const { data } = await http.get("/product");
      setContacts(data);
      setAllData(data);
    };
    try {
      fetchContact();
    } catch (error) {}
  });
  const changeHandler = (e) => {
    setvalue(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filterContants = allData.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filterContants);
    } else {
      setContacts(allData);
    }
  };
  const handelClick = () => {
    setvalue("");
    console.log(value);
  };

  return (
    <>
      <div className={styles.formControl}>
        <input
          type={"text"}
          placeholder=" جستجوی محصول ..."
          onChange={changeHandler}
          value={value}
        />
      </div>
      <div
        className={styles.showProduct}
        id={"search-items"}
        onClick={handelClick}
      >
        {value.length ? (
          <section className={styles.searchItemList}>
            {contacts.map((item) => {
              return (
                <div
                  className={styles.searchItemAdd}
                  id={"search-items"}
                  onClick={handelClick}
                  key={item._id}
                >
                  <Link to={`product/${item._id}`} state={{ data: item }}>
                    <div className={styles.searchItem} key={item._id}>
                      <div className={styles.itemImg}>
                        <img src={item.image} alt={item.name}></img>
                      </div>
                      <div className="fs-6">{item.name}</div>
                      <div>{item.offPrice}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Search;
