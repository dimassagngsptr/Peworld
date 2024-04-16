import Skeleton from "@mui/material/Skeleton";
const SkeletonItems = () => {
   return (
      <>
         <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={118} />
         <Skeleton variant="rounded" width={210} height={60} />
      </>
   );
};

export default SkeletonItems;
