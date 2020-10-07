import { useEffect, useState } from 'react';
import getFirebase from './util';

export default function useFirebase() {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    setInstance(getFirebase());
  }, []);

  return instance;
} 