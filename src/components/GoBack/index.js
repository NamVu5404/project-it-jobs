import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function GoBack(props) {
  const { step, name } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(step);
  };

  return (
    <>
      <Button type="primary" ghost onClick={handleClick}>
        {name}
      </Button>
    </>
  );
}

export default GoBack;
