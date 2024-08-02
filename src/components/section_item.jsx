import PropTypes from "prop-types";

export default function SectionItem({ id, label, hint }) {
  return (
    <div className="section-item">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} placeholder={hint} required />
    </div>
  );
}

SectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};
