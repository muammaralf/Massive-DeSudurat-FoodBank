import React from "react";
import Button from "../../Components/Button";
import "./index.css";

const RelawanAdmin = () => {
  return (
    <>
      <section className="relawan-admin-section">
        <div className="container-title">
          <img src="./src/assets/RelawanAdmin.png" alt="Relawan Admin" />
          <div className="container-title-inner">
            <span>Pusat Peduli Yogyakarta</span>
            <p>
              Selamat datang di Pusat Peduli Yogyakarta! Bergabunglah dalam
              perjuangan kami melawan kelaparan dengan memberikan donasi
              makanan/uang dan menjadi relawan. Ciptakan perubahan positif untuk
              memastikan setiap warga Yogyakarta memiliki akses terhadap makanan
              yang cukup dan bergizi. Mari kita peduli bersama di Pusat Peduli
              Yogyakarta
            </p>
          </div>
        </div>
        <div className="container-tabel">
          <div className="container-search-outer">
            <form action="search" className="form-search">
              <div className="container-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                >
                  <mask id="path-1-inside-1_292_958" fill="white">
                    <path d="M12.4925 0.689453C5.60786 0.689453 0 6.4226 0 13.461C0 20.4994 5.60786 26.2326 12.4925 26.2326C15.4863 26.2326 18.2357 25.1457 20.3905 23.3415L27.8494 30.967C27.9645 31.0896 28.1024 31.1875 28.2549 31.2549C28.4075 31.3223 28.5717 31.3579 28.7379 31.3596C28.9041 31.3614 29.069 31.3292 29.2229 31.2649C29.3767 31.2007 29.5165 31.1058 29.6341 30.9856C29.7516 30.8654 29.8445 30.7225 29.9073 30.5652C29.9701 30.4079 30.0016 30.2393 29.9999 30.0694C29.9982 29.8995 29.9634 29.7316 29.8975 29.5757C29.8315 29.4197 29.7358 29.2787 29.6159 29.161L22.157 21.5355C23.9218 19.3326 24.9849 16.5217 24.9849 13.461C24.9849 6.4226 19.3771 0.689453 12.4925 0.689453ZM12.4925 3.24376C18.0268 3.24376 22.4864 7.80306 22.4864 13.461C22.4864 19.119 18.0268 23.6783 12.4925 23.6783C6.95814 23.6783 2.49849 19.119 2.49849 13.461C2.49849 7.80306 6.95814 3.24376 12.4925 3.24376Z" />
                  </mask>
                  <path
                    d="M20.3905 23.3415L22.5351 21.2438L20.5936 19.2588L18.4646 21.0413L20.3905 23.3415ZM27.8494 30.967L30.0362 28.9133L30.0154 28.8911L29.994 28.8693L27.8494 30.967ZM29.6159 29.161L27.4713 31.2588L27.4926 31.2806L27.5144 31.302L29.6159 29.161ZM22.157 21.5355L19.8157 19.6599L18.1543 21.7337L20.0124 23.6333L22.157 21.5355ZM12.4925 -2.31055C3.88886 -2.31055 -3 4.82858 -3 13.461H3C3 8.01662 7.32686 3.68945 12.4925 3.68945V-2.31055ZM-3 13.461C-3 22.0934 3.88886 29.2326 12.4925 29.2326V23.2326C7.32686 23.2326 3 18.9054 3 13.461H-3ZM12.4925 29.2326C16.2284 29.2326 19.6515 27.873 22.3164 25.6417L18.4646 21.0413C16.82 22.4184 14.7442 23.2326 12.4925 23.2326V29.2326ZM18.2459 25.4393L25.7048 33.0648L29.994 28.8693L22.5351 21.2438L18.2459 25.4393ZM25.6625 33.0207C26.0506 33.4339 26.5191 33.7677 27.0424 33.9989L29.4675 28.5108C29.6857 28.6073 29.8784 28.7453 30.0362 28.9133L25.6625 33.0207ZM27.0424 33.9989C27.566 34.2303 28.132 34.3535 28.7067 34.3595L28.7691 28.3598C29.0115 28.3623 29.2491 28.4143 29.4675 28.5108L27.0424 33.9989ZM28.7067 34.3595C29.2815 34.3655 29.85 34.254 30.3784 34.0335L28.0673 28.4964C28.288 28.4043 28.5268 28.3573 28.7691 28.3598L28.7067 34.3595ZM30.3784 34.0335C30.9067 33.813 31.3821 33.4888 31.7787 33.0834L27.4894 28.8878C27.651 28.7227 27.8468 28.5885 28.0673 28.4964L30.3784 34.0335ZM31.7787 33.0834C32.1751 32.678 32.485 32.1996 32.6934 31.6778L27.1213 29.4526C27.204 29.2454 27.328 29.0528 27.4894 28.8878L31.7787 33.0834ZM32.6934 31.6778C32.9017 31.1561 33.0054 30.5994 32.9998 30.0396L27.0001 30.0993C26.9979 29.8793 27.0386 29.6597 27.1213 29.4526L32.6934 31.6778ZM32.9998 30.0396C32.9942 29.4798 32.8795 28.9251 32.6607 28.4075L27.1343 30.7439C27.0473 30.5382 27.0023 30.3193 27.0001 30.0993L32.9998 30.0396ZM32.6607 28.4075C32.4418 27.8897 32.1222 27.4174 31.7174 27.0201L27.5144 31.302C27.3494 31.14 27.2213 30.9496 27.1343 30.7439L32.6607 28.4075ZM31.7605 27.0633L24.3017 19.4378L20.0124 23.6333L27.4713 31.2588L31.7605 27.0633ZM24.4984 23.4112C26.6745 20.6947 27.9849 17.2272 27.9849 13.461H21.9849C21.9849 15.8163 21.169 17.9705 19.8157 19.6599L24.4984 23.4112ZM27.9849 13.461C27.9849 4.82858 21.0961 -2.31055 12.4925 -2.31055V3.68945C17.6581 3.68945 21.9849 8.01662 21.9849 13.461H27.9849ZM12.4925 6.24376C16.3078 6.24376 19.4864 9.39707 19.4864 13.461H25.4864C25.4864 6.20904 19.7458 0.243765 12.4925 0.243765V6.24376ZM19.4864 13.461C19.4864 17.525 16.3078 20.6783 12.4925 20.6783V26.6783C19.7458 26.6783 25.4864 20.713 25.4864 13.461H19.4864ZM12.4925 20.6783C8.67714 20.6783 5.49849 17.525 5.49849 13.461H-0.501509C-0.501509 20.713 5.23915 26.6783 12.4925 26.6783V20.6783ZM5.49849 13.461C5.49849 9.39707 8.67714 6.24376 12.4925 6.24376V0.243765C5.23915 0.243765 -0.501509 6.20904 -0.501509 13.461H5.49849Z"
                    fill="#FEB200"
                    mask="url(#path-1-inside-1_292_958)"
                  />
                </svg>
                <input type="text" placeholder="Search" />
              </div>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="62"
              viewBox="0 0 60 62"
              fill="none"
            >
              <path
                d="M30 0C13.4325 0 0 4.29 0 9.58445V15.3351L22.5 38.3378V57.5067C22.5 59.623 25.8563 61.3405 30 61.3405C34.1437 61.3405 37.5 59.623 37.5 57.5067V38.3378L60 15.3351V9.58445C60 4.29 46.5675 0 30 0ZM5.53125 8.31547C6.93375 7.49888 8.90625 6.72062 11.2312 6.06888C16.3837 4.62737 23.0513 3.83378 30 3.83378C36.9487 3.83378 43.6162 4.62737 48.7687 6.06888C51.0938 6.72062 53.0662 7.49504 54.4688 8.31547C55.395 8.85604 55.8937 9.31225 56.1263 9.58445C55.8937 9.85665 55.395 10.3129 54.4688 10.8534C53.0662 11.67 51.0938 12.4483 48.7687 13.1C43.6162 14.5415 36.9487 15.3351 30 15.3351C23.0513 15.3351 16.3837 14.5415 11.2312 13.1C8.90625 12.4483 6.93375 11.6739 5.53125 10.8534C4.605 10.3129 4.10625 9.85665 3.87375 9.58445C4.10625 9.31225 4.605 8.85604 5.53125 8.31547Z"
                fill="#FEB200"
              />
            </svg>
          </div>
          <div className="tabel-span-container">
            <span className="tabel-span">Data Relawan</span>
          </div>
          <div className="tabel">
            <table className="table" border={1}>
              <thead>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Telepon</th>
                <th>Tanggal Bergabung</th>
                <th>Alamat</th>
              </thead>
              <tr>
                <th>1</th>
                <th>Muamar</th>
                <th>muamar.alf@gmail.com</th>
                <th>082324583946</th>
                <th>23-11-2023</th>
                <th>Depok, Sleman</th>
              </tr>
              <tr>
                <th>2</th>
                <th>Imelda</th>
                <th>imel@gmail.com</th>
                <th>088888888888</th>
                <th>23-11-2023</th>
                <th>Depok, Sleman</th>
              </tr>
              <tr>
                <th>1</th>
                <th>Azzahra</th>
                <th>azzahra@gmail.com</th>
                <th>088888888888</th>
                <th>23-11-2023</th>
                <th>Depok, Sleman</th>
              </tr>
              <tr>
                <th>4</th>
                <th>Elvin</th>
                <th>Elvin112@gmail.com</th>
                <th>088888888888</th>
                <th>23-11-2023</th>
                <th>Depok, Sleman</th>
              </tr>
            </table>
          </div>
          <div className="button-tabel">
            <Button TextButton={"Unduh"} />
            <Button TextButton={"Detail"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RelawanAdmin;
