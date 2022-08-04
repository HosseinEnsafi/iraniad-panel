import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { UIContext } from "../../context/UIState/UIContext";

function SidebarSkeleton() {
  const { userTheme } = useContext(UIContext);
  return (
    <SkeletonTheme
    baseColor={`${userTheme === "Light" ? "#bdbdbd" : "#313236"}`}
    highlightColor={`${userTheme === "Light" ? "#999999" : "#50535a"}`}
    >
      <Skeleton
        count={10}
        direction="rtl"
        inline
        className="mb-6 mr-4 h-4 w-full "
        width={"80%"}
      />
    </SkeletonTheme>
  );
}

export default SidebarSkeleton;
