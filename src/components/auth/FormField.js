import classNames from 'classnames';

import '../../style/FormField.css';

export const FormField = ({ className, label, ...props }) => {
  return (
    <div className={classNames('formField', className)}>
      <div>
        <span className="formField-label">{label}</span>
        <input className="formField-input" autoComplete="off" {...props} />
      </div>
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

