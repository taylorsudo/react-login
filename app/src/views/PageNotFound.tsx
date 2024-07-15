import { Link } from "react-router-dom";

// if there is no existing page
function PageNotFound() {
  return (
    <div>
      <h1>Error 404: Page not found!</h1>
      <p>
          Go <Link to="/">home</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;