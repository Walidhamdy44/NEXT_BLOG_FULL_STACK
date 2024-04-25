import { ProgressSpinner } from "primereact/progressspinner";

const loading = () => {
  return (
    <div className="min-h-[300px]">
      <div className="card flex justify-center items-center my-[40px]">
        <ProgressSpinner />
      </div>
    </div>
  );
};

export default loading;
