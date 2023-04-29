import { Navbar, Footer } from '../components';
import { Nextpage } from '../sections';

const nextPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <Nextpage />
      <div className="gradient-03 z-0" />
    </div>
    <Footer />
  </div>
);

export default nextPage;
