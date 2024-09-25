import "../Breadcrumbs/Breadcrumbs.css"
// import arrow from "../../assetsdashicons_arrow-down-alt2.png"
const Breadcrumbs = ({paths} ) => {
   
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {paths.map((path, index) => (
            <li key={index} className="breadcrumb-item">
              {path.link ? (
                <Link to={path.link}>{path.text}</Link>
              ) : (
                <span>{path.text}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
}

export default Breadcrumbs;
