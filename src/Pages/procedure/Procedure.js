import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap';

const Procedure = () => {
  return (
    <Container className=" my-5 py-5">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item active>رویه بازگشت کالا</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="fw-bold lh-lg">
        سلام فروشگاه به هیچ عنوان مرجوع ندارد . اگر بسته به دست شما رسید و مشکل
        داشت یا سایز شما نبود فقط همون روز میتونید توی دایرکت اینستاگرام به ما
        اطلاع بدید شماره سفارش خودتونو بفرستید تا برای تعویض کار با شما هماهنگ
        کنیم. درصورت اختلاف بیش از 2سانتی متر از لحاظ عرضی در لباس های بالاتنه
        تعویض انجام میشود و اختلاف کمتر از آن در لباس های تولید داخل عادی میباشد
        و تعویض ندارد. در خرید اجناسی که داخل توضیحاتشون قید شده که تعویض ندارند
        کاملا دقت کنید.
        <br />
        مهلت استفاده ازاین سرویس فقط روزی هست که بسته به دست شما میرسد. در غیر
        این صورت امکان تعویض وجود ندارد. باتشکر🙏
      </div>
    </Container>
  );
}

export default Procedure
