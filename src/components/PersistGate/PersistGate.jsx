//
// Workaround for redux-persist blocking Next's SSG.
//
// TODO: Find another workaround, as this causes a weird error in
//       development: Warning: Did not expect server HTML to
//       contain <div> in <div>
//
import PropTypes from 'prop-types';
import { PersistGate as PG } from 'redux-persist/integration/react';

import { isClient } from '../../lib/utils';

const PersistGate = ({ children, loading, persistor }) => {
  if (isClient) {
    return (
      <PG loading={loading} persistor={persistor}>
        {children}
      </PG>
    );
  }
  return children;
};

PersistGate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PersistGate;
