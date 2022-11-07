import classNames from 'classnames';

import './FormField.css';

const FormField = ({ className, label, ...props }) => {
  return (
    <div className={classNames('formField', className)}>
      <label>
        <span className="formField-label">{label}</span>
        <input className="formField-input" autoComplete="off" {...props} />
      </label>
    </div>
  );
};

export default FormField;