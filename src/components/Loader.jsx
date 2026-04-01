import { GridLoader } from "react-spinners";
export default function Loader() {
  return (
    <>
      <div className="loading flex flex-col items-center justify-center gap-3 mt-10">
        <h3 className="font-semibold text-2xl">VisioCreate</h3>
        <GridLoader
          color="#8ea09e"
          loading={true}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}
