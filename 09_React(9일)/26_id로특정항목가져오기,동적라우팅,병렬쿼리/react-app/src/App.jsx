import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReactQuery from './pages/ReactQuery';
import ReactQueryDetails from './pages/ReactQueryDetails';
import ParallelQuery from './pages/ParallelQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App() {
  return (
    <>
      <Routes>
        {/* 루트 공통 레이아웃 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-query" element={<ReactQuery />} />
          <Route path="/react-query/:userId" element={<ReactQueryDetails />} />
          <Route path="/parallel-query" element={<ParallelQuery />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
