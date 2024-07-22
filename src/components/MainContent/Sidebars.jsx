import NewsCard from "./NewsCard";
import AnalysisCard from "./AnalysisCard";
import UserPanel from "./UserPanel";

const Sidebars = () => {
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 lg:col-span-1">
          <NewsCard />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <AnalysisCard />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <UserPanel />
        </div>
      </div>
    </>
  );
};

export default Sidebars;
