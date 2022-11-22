import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap';

const Guide = () => {
  return (
    <Container className=" my-5 py-5">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item active>راهنمای ثبت سفارش</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="fw-bold lh-lg ">
        به راحتی با انتخاب مدل , رنگ و سایز به قسمت وارد کردن اطلاعات و پرداخت
        منتقل میشوید پس از تکمیل مراحل کد سفارش برای شما ارسال میشود حتما آن را
        یادداشت کنید و در اولین روزی که ارسال داریم بسته ی شما تحویل اداره پست
        خواهد شد و 2 تا 5 روز کاری به دستتون خواهد رسید. همچنین میتونید استوری
        های اینستاگرام رو برای دریافت کد مرسوله ی خودتون دنبال کنید.
      </div>
    </Container>
  );
}

export default Guide
