import Header from '../components/Header';

const AppLayout = ({ children }) => {
  return <>
    <Header />
    <div className="container">
      {children}
    </div>
  </>
}

export default AppLayout;
