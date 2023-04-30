import { Navbar, Footer } from '../components';
import { Complaint } from '../sections';

const Complain = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <Complaint />
      <div className="gradient-03 z-0" />
    </div>
    <Footer />
  </div>
);

export default Complain;
