import { Link } from 'react-router-dom';
import './Pagination.css';

export default function Pagination({ prev, next }) {
  return (
    <div className="cs-pagination">
      {prev ? (
        <Link to={prev.path} className="cs-pag-btn" onClick={() => window.scrollTo(0,0)}>
          <span className="pag-dir">← Previous</span>
          <span className="pag-name">{prev.label}</span>
        </Link>
      ) : <div />}

      {next ? (
        <Link to={next.path} className="cs-pag-btn cs-pag-btn-next" onClick={() => window.scrollTo(0,0)}>
          <span className="pag-dir">Next →</span>
          <span className="pag-name">{next.label}</span>
        </Link>
      ) : <div />}
    </div>
  );
}
