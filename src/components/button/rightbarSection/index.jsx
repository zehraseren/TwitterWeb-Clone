import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RightbarSection({ title, children, more }) {
  return (
    <section className="mb-4 rounded-2xl border border-[#16181c] bg-[#16181c] overflow-hidden">
      <h5 className="py-3 px-4 flex items-center text-xl text-[#e7e9ea] font-extrabold leading-6">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          className="h-[52px] px-4 flex items-center text-[#1d9bf0] text-[15px] hover:bg-white/[0.03] transition-colors"
          to={more}
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
}

RightbarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

RightbarSection.defaultProps = {
  more: false,
};
