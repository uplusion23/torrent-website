import './Pagination.css';

export const Pagination = props => {
  const pages = [];

  const onPageButtonClick = e => {
    e.preventDefault();
    props.handleQueryPaged(e.target.getAttribute('data-page'));
  }

  for (let i = 1; i <= props.page.totalPages; i++) {
    // make active page active
    if (i === 1 && props.page.pageNumber !== 1) pages.push(<button key={i} onClick={onPageButtonClick} data-page={i} data-active={props.page.pageNumber === i}>First</button>);
    else if (i === props.page.totalPages) pages.push(<button key={i} onClick={onPageButtonClick} data-page={i} data-active={props.page.pageNumber === i}>Last</button>);
    else pages.push(<button key={i} onClick={onPageButtonClick} data-page={i} data-active={props.page.pageNumber === i}>{i}</button>);
  }

  return (
    <div className="pagination">
      {
        props.page.totalPages > 1 ? pages : null
      }
    </div>
  )
};