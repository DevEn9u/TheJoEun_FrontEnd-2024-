import { useOnlineStatus } from '../hooks/useOnlineStatus';
import styles from './StatusBar.module.css';

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1 className={styles.tit}>{ isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>;
}