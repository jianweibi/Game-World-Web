import PropTypes from "prop-types";

function PaginationComponent({ page, onChangePage, total }) {
    let numPages = 6;
    let minPageInRange = Math.max(0, page - numPages / 2);
    let lastPage = Math.floor(total / 9);
    let maxPageInRange = Math.min(minPageInRange + numPages, lastPage);
  
    const renderPages = () => {
      let pages = [];
  
      for (let i = minPageInRange; i <= maxPageInRange; i += 1) {
        pages.push(
          <li
            key={"page" + i}
            className={"page-item" + (page === i ? " active" : "")}
          >
            <button className="main_btn page-link" onClick={() => onChangePage(i)}>
              {i}
            </button>
          </li>
        );
      }
  
      return pages;
    };
  
    return (
        <div className="footer">
            <ul className="Pagination nav nav-pills">
              <li className="nav-item">
                <button className="main_btn page-link" onClick={() => onChangePage(0)}>
                  First
                </button>
              </li>
              <li className="nav-item">
                <button className="main_btn page-link" onClick={() => onChangePage(page - 1)}>
                  Previous
                </button>
              </li>

              {renderPages()}

              <li className="nav-item">
                <button className="main_btn page-link" onClick={() => onChangePage(page + 1)}>
                  Next
                </button>
              </li>

              <li className="nav-item">
                <button className="main_btn page-link" onClick={() => onChangePage(lastPage)}>
                  Last
                </button>
              </li>
            </ul>
        </div>
    );
}

PaginationComponent.propTypes = {
  pages: PropTypes.array,
};

export default PaginationComponent;