import { Button, Result } from "antd";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            <Link to="/"> Back To Home</Link>
          </Button>
        }
      />
    </>
  );
};
export default NotFound;
