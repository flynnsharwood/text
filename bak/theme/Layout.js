import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function CustomLayout(props) {
  useEffect(() => {
    document.body.innerHTML = document.body.innerHTML.replace(/%%(.*?)%%/g, '');
  }, []);

  return <Layout {...props} />;
}
