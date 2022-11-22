import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} click={props.modalClick} />
      <div
        className="modal-page"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          display: props.show ? "flex" : "none",
        }}
      >
        <span className="xclose" onClick={props.modalClick}>x</span>
        <h1 className="mb-4">راهنمای سایز کفش</h1>
        <p className="text-dark-50 mb-4">
          نکته مهم: جدول فوق بر اساس استاندارد سایز پا میباشد ، اما در هر فرد
          بسته به اندازه ی پنجه پا ، فرم پا و غیره ممکن است متغیر باشد.
        </p>
        <div className="w-100 px-5">
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">سایز رایج در ایران (EURO) </th>
                <th scope="col">طول کف پا ، فاصله پاشنه تا نوک انگشت (CM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>35</td>
                <td>20.8</td>
              </tr>
              <tr>
                <td>35</td>
                <td>21.3</td>
              </tr>
              <tr>
                <td>35-36</td>
                <td>21.6</td>
              </tr>
              <tr>
                <td>36</td>
                <td>22.3</td>
              </tr>
              <tr>
                <td>36-37</td>
                <td>22.5</td>
              </tr>
              <tr>
                <td>37</td>
                <td>23</td>
              </tr>
              <tr>
                <td>37-38</td>
                <td>23.5</td>
              </tr>
              <tr>
                <td>38</td>
                <td>23.8</td>
              </tr>
              <tr>
                <td>38-39</td>
                <td>24.3</td>
              </tr>
              <tr>
                <td>39</td>
                <td>24.6</td>
              </tr>
              <tr>
                <td>39-40</td>
                <td>25.1</td>
              </tr>
              <tr>
                <td>40</td>
                <td>25.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Modal;
