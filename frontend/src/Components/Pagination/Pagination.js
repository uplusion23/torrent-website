import './Pagination.css';

export const Pagination = props => {
  const pages = [];

  const onPageButtonClick = e => {
    e.preventDefault();
    props.handleQueryPaged(e.target.getAttribute('data-page'));
  }

  for (let i = 0; i < props.page.totalPages; i++) {
    pages.push(<button key={i} onClick={onPageButtonClick} data-page={i} data-active={(props.page.pageNumber+1) === i}>{(i+1)}</button>);
  }

  return (
    <div className="pagination">
      {
        props.page.totalPages > 1 ? pages : null
      }
    </div>
  )
};