// import React, { useState } from 'react'
// import { Container } from 'react-bootstrap';
// import { BsCheck2All, BsHeart, BsSearch } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { useFav, useFavActions } from '../../Providers/FavorideProvider';
// import { checkInFav } from '../../utils/checkInFav';

// const Fav = () => {
//   const { fav, total } = useFav();
//   const dispatch = useFavActions();

 

//   if (!fav.length)
//     return (
//       <main className="container">
//         <h2>محصولی انتخاب نشده</h2>
//       </main>
//     );
//   return (
//     <Container>
//       <h2 className="mt-4"> محصولات مورد علاقه شما</h2>
//       <main className="row mt-4">
//         <section className="cartItemList mb-3">
//           {fav.map((product) => {
//             return (
//               <div className="cartItem" key={product.id}>
//                 <div className="itemImg">
//                   <img src={product.image} alt={product.name}></img>
//                 </div>
//                 <div>{product.name}</div>
//                 </div>
//             );
//           })}
//         </section>
       
//       </main>
//     </Container>
//   );
// };

// export default Fav
