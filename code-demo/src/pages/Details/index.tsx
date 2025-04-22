import { useSearchParams } from "react-router-dom";

const Details = () => {
  const [params] = useSearchParams();
  const currency = params.get("currency");
  return <div>this is {currency} Details </div>;
};

export default Details;
