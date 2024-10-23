import { Button } from "antd";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";

function PageNotFound() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation(appRoutes.attributes);
  };

  return (
    <div>
      <Header />

      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-center w-1/2 mb-5 tracking-widest">
          Congrats! You&apos;re Lost.
        </h1>

        <Button
          color="default"
          variant="solid"
          onClick={handleClick}
          className="mb-6"
          size="large"
        >
          Home
        </Button>

        {/* //! need to change the url, using mailchimps gif atm */}
        <img
          src="https://mailchimp.com/static/images/404Horse.gif"
          alt="ghoda"
          className="w-1/4"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
