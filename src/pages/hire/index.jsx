import { useSelector } from "react-redux";
import PersonalInformation from "../../components/module/Profile/Worker/PersonalInfo";
import Home from "../Home";
import { getApi } from "../../utils/get/get";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import { api } from "../../config/api/api";
import Spinner from "../../components/base/Button/Spinner";
import { toastify } from "../../components/base/Toastify";

export default function HirePage() {
  const { activeUser, skills } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [detailProfile, setDetailProfile] = useState({
    profile: [],
    skill: [],
    experience: [],
    portofolio: [],
  });
  const [addHire, setAddHire] = useState({
    message_purpose: "",
    worker_id: id,
    name: "",
    email: "",
    phone: "",
    desciption: "",
  });
  const addHireWorker = async () => {
    setLoading(true);
    try {
      const response = await api.post(`hire`, addHire);
      if (response?.status === 201) {
        toastify("success", response?.data?.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toastify("error", error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const getDetailWorker = async () => {
    try {
      const profilePromise = getApi(`workers/${id}`);
      const skillPromise = getApi(`skills/${id}`);
      const experiencePromise = getApi(`experience/${id}`);
      const portofolioPromise = getApi(`portfolio/${id}`);

      const [profile, skill, experience, portofolio] = await Promise.all([
        profilePromise,
        skillPromise,
        experiencePromise,
        portofolioPromise,
      ]);
      setDetailProfile((prevDetailProfile) => ({
        ...prevDetailProfile,
        profile: profile?.data?.data,
        skill: skill?.data?.data,
        experience: experience?.data?.data,
        portofolio: portofolio?.data?.data,
      }));
    } catch (error) {
      console.error("Error fetching detail worker data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      getDetailWorker();
    }
  }, [id]);
  return (
    <Home footer>
      <div className="flex gap-10 justify-between px-[10%] h-full bg-gray-200 py-4 md:flex-col lg:flex-row">
        <PersonalInformation
          activeUser={id ? detailProfile?.profile : activeUser}
          skills={id ? detailProfile?.skill : skills?.data}
        />
        <div className="lg:pr-10 pl-2 lg:w-[60%] flex flex-col py-10 lg:py-2 md:w-full">
          <h1 className="text-[32px] font-semibold text-center lg:text-start">
            Hubungi {detailProfile?.profile?.name}
          </h1>
          <p className="text-lg text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="py-5">
            <label htmlFor="type" className="mb-3 inline-block text-gray-400 ">
              Tujuan tentang pesan ini
            </label>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Projek</InputLabel>
              <Select
                className="bg-white outline-none border-none"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addHire?.message_purpose}
                label="Projek"
                onChange={(e) =>
                  setAddHire({ ...addHire, message_purpose: e?.target?.value })
                }
              >
                <MenuItem value={"fulltime"}>Fulltime</MenuItem>
                <MenuItem value={"freelance"}>Freelance</MenuItem>
                <MenuItem value={"kontrak"}>Kontrak</MenuItem>
              </Select>
            </FormControl>
            <Input
              onChange={(e) =>
                setAddHire({ ...addHire, [e?.target?.name]: e?.target.value })
              }
              name="name"
              label={"Nama Lengkap"}
              style={"mt-5 mb-3 inline-block text-gray-400 "}
              className="py-4 px-4 outline-none border border-gray-400 rounded"
              placeholder="Masukan nama lengkap"
            />
            <Input
              onChange={(e) =>
                setAddHire({ ...addHire, [e?.target?.name]: e?.target.value })
              }
              type="email"
              name="email"
              label={"Email"}
              style={"mt-5 mb-3 inline-block text-gray-400 "}
              className="py-4 px-4 outline-none border border-gray-400 rounded"
              placeholder="Masukan email"
            />
            <Input
              onChange={(e) =>
                setAddHire({ ...addHire, [e?.target?.name]: e?.target.value })
              }
              name="phone"
              label={"No Handphone"}
              style={"mt-5 mb-3 inline-block text-gray-400 "}
              className="py-4 px-4 outline-none border border-gray-400 rounded"
              placeholder="Masukan No handphone"
            />
            <Input
              onChange={(e) =>
                setAddHire({ ...addHire, [e?.target?.name]: e?.target.value })
              }
              name="desciption"
              textArea={true}
              label={"Deskripsi"}
              style={"mt-5 mb-3 inline-block text-gray-400 "}
              className="py-4 px-4 h-60 outline-none border border-gray-400 rounded"
              placeholder="Deskripsi jelaskan lebih detail terkait pekerjaan"
            />
            <Button
              btnFunction={addHireWorker}
              disabled={loading}
              title={!loading ? "Hire" : <Spinner />}
              className={"bg-btn w-full text-white font-bold h-10 mt-10"}
            />
          </div>
        </div>
      </div>
    </Home>
  );
}
