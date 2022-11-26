import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartActions } from "../../Providers/CartProdvicer";
import http from "../../services/httpService";
import styles from "./search.module.css";
const Search = (props) => {
  const [value, setvalue] = useState("");
  const [contacts, setContacts] = useState([]);
  const [allData, setAllData] = useState(null);
  const [ product, setProduct] = useState('')
  const dispatch = useCartActions();

  const [purchasrd, setPurchasrd] = useState(false);

  const purchasedHandler = () => {
    setPurchasrd(true);
  };
  const modalCloseHandler = () => {
    setPurchasrd(false);
  };
 

  useEffect(() => {
    const fetchContact= async ()=>{
      const {data} = await http.get("/product")
      setContacts(data);
      setAllData(data)
    };
    try{
fetchContact()
    }catch (error) {}
    
     
   }, []);
  const changeHandler = (e) => {
    console.log('oo')
    setvalue(e.target.value)
    const search = e.target.value
    if(search !== ""){
      const filterContants = allData.filter((c)=>{
        
        return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase())
      })
      setContacts(filterContants)
    }else{
      setContacts(allData)

    }
    
  };
   const handelClick = () => {
     let search = document.getElementById("search-items");

     search.classList.add(`${styles.serarchAdd}`);
     setvalue("");
   
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
        // style={{
        //   display: purchasrd ? "block" : "none",
        // }}
      >
        {/* {contacts.map((i)=>{
  return(
    <p>{i.name}</p>
  )
})} */}
        {value.length ? (
          <section
            onClick={modalCloseHandler}
            className={styles.searchItemList}
          >
            {contacts.map((item) => {
              return (
                <div
                  className={styles.searchItemAdd}
                  id={"search-items"}
                  onClick={handelClick}
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
