import { useParams } from "react-router";

export function ScenicFoodDetail() {
  const { name } = useParams();
  console.log(name);
  
  return (
    <div>
      detail
    </div>
  )
}