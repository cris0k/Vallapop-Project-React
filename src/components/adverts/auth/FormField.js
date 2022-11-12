import classNames from 'classnames';

import './FormField.css';

export const FormField = ({ className, label, ...props }) => {
  return (
    <div className={classNames('formField', className)}>
      <label>
        <span className="formField-label">{label}</span>
        <input className="formField-input" autoComplete="off" {...props} />
      </label>
    </div>
  );
};

export const Checkbox = ({ label, className, ...props}) => {
  return (
    <div>
      <input className="login-checkox" type="checkbox" {...props}/>
      <span>{label}</span>
    </div>
  )
}

export const SelectField = ({ label, className, ...props}) => {
  return (
    <div className='select-field'>
      <span>{label}</span>
      <select {...props}></select>
    </div>
    
  )
}
