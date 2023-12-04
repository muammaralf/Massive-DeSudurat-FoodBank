import React from "react";
import Button from "../Components/Button";
import Testimoni from "../Components/testimoni/Testimoni";
import DataPenyaluran from "../Components/DataPenyaluran";
import RelawanAdmin from "./RelawanAdmin/RelawanAdmin";
import "../index.css";

const Dashboard = () => {
  return (
    <>
      {/* <div className="coba aja ini deh"> */}
      {/* Dashboard */}
      {/* <div className="container-coment">
        <Testimoni
          name={"Muamar Ali"}
          pictureProfile={"../src/assets/informasibg.png"}
          coment={"aku suka kamu tapi kamu nggak suka aku haduh gimana yaaaa"}
        />
        <Testimoni
          name={"Muamar Hehewwww"}
          pictureProfile={"../src/assets/informasibg1.png"}
          coment={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate repellat, autem est laboriosam neque dolores consectetur nisi, beatae vel eligendi vitae ab distinctio necessitatibus quo. Vitae odio amet incidunt delectus error."
          }
        />
        <Testimoni
          name={"Muamar Kerennn"}
          pictureProfile={"../src/assets/informasibg.png"}
          coment={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate repellat, autem est laboriosam neque dolores consectetur nisi."
          }
        />
        <Testimoni
          name={"Muamar Kerennn"}
          pictureProfile={"../src/assets/informasibg.png"}
          coment={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate repellat, autem est laboriosam neque dolores consectetur nisi."
          }
        />
      </div> */}

      <RelawanAdmin />

      {/* <DataPenyaluran /> */}
      {/* </div> */}
    </>
  );
};

export default Dashboard;
