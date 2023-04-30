import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomeComps = () => {
  const navigate = useNavigate();
  const [redirect, setdirect] = useState(false);
  const directing = localStorage.getItem("id") === null ? "1" : localStorage.getItem("id");
  useEffect(() => {
    if (redirect) {
      navigate("/questions/" + directing);
    }
  });
  const handleCLick = () => {
    const fixedQuestions = JSON.parse(localStorage.getItem("dataSoal"));
    if (localStorage.getItem("timer") === null) {
      localStorage.setItem("soal", JSON.stringify(fixedQuestions));
      setdirect(true);
      localStorage.setItem("timer", Date.now());
      localStorage.setItem("nilai", "0");
      localStorage.setItem("answer", "0");
    }
    setdirect(true);
  };
  const notify = () => {
    toast.success("Anda telah mengerjakan soal ini");
  };
  return (
    <section className="flex justify-center  w-full h-screen px-10">
      <div className="wrapper-container my-10 w-full flex flex-col gap-y-10">
        <div className="alert-notifications flex flex-col gap-y-6">
          <div className="flex flex-row gap-x-2 font-semibold items-center ">
            <p className="text-lg">Pengumuman!</p>
          </div>
          <div className="alert alert-error outline outline-2 outline-yellow-600 rounded-2xl bg-yellow-100">
            <div className="flex flex-col items-start">
              <p className="font-bold">Kerjakan dengan teliti!</p>
              <p className="font-medium">Berdoalah sebelum mengerjakan, kerjakan dengan teliti dan pilih jawaban yang benar berdasarkan pengetahuan anda!</p>
            </div>
          </div>
        </div>
        <div className="wrapper-table shadow-lg rounded-xl">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Mata Pelajaran</th>
                  <th>Jumlah Soal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Matematika</td>
                  <td>{5}</td>
                  <td>
                    {localStorage.getItem("finished") === null ? (
                      parseInt(directing) > 1 || localStorage.getItem("nilai") !== null ? (
                        <div className="badge badge-error gap-2 text-white bg-yellow-500" onClick={handleCLick}>
                          Lanjutkan
                        </div>
                      ) : (
                        <div className="badge badge-error gap-2 text-white bg-red-500" onClick={handleCLick}>
                          kerjakan
                        </div>
                      )
                    ) : (
                      <div className="badge badge-error gap-2 text-white bg-green-500" onClick={notify}>
                        nilai :{localStorage.getItem("nilai")}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default HomeComps;
