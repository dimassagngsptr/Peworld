import Home from "../../Home";
import Header from "../../../components/module/EditProfile/Company/Header";
import EditWorkers from "../../../components/module/EditProfile/Workers";

const EditWorkersPge = () => {
   return (
      <Home footer={false}>
         <Header title={"Edit Pekerja"} />
         <EditWorkers />
      </Home>
   );
};

export default EditWorkersPge;
