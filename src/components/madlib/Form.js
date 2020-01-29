import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, onReset, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11 }) => (
  <form onSubmit={onSubmit} onChange={onChange} onReset={onReset}>
    <input type="text" name='v0' value={v0} placeholder="adjective" />
    <input type="text" name='v1' value={v1} placeholder="noun" />
    <input type="text" name='v2' value={v2} placeholder="verb, past tense" />
    <input type="text" name='v3' value={v3} placeholder="adverb" />
    <input type="text" name='v4' value={v4} placeholder="adjective" />
    <input type="text" name='v5' value={v5} placeholder="noun" />
    <input type="text" name='v6' value={v6} placeholder="noun" />
    <input type="text" name='v7' value={v7} placeholder="adjective" />
    <input type="text" name='v8' value={v8} placeholder="verb" />
    <input type="text" name='v9' value={v9} placeholder="adverb" />
    <input type="text" name='v10' value={v10} placeholder="verb, past tense" />
    <input type="text" name='v11' value={v11} placeholder="adjective" />
    <button type="submit">Create Madlib</button>
    <button type="reset">Reset</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  v0: PropTypes.string.isRequired,
  v1: PropTypes.string.isRequired, 
  v2: PropTypes.string.isRequired, 
  v3: PropTypes.string.isRequired, 
  v4: PropTypes.string.isRequired, 
  v5: PropTypes.string.isRequired, 
  v6: PropTypes.string.isRequired, 
  v7: PropTypes.string.isRequired, 
  v8: PropTypes.string.isRequired, 
  v9: PropTypes.string.isRequired, 
  v10: PropTypes.string.isRequired,
  v11: PropTypes.string.isRequired 
};

export default Form;
