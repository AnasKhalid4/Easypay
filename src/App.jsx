
import {
  Navbar,
  Billing,
  Business,
  Service,
  Stats,
  Footer,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="w-full xl:max-w-[1280px]">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px]">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6">
      <div className="w-full xl:max-w-[1280px]">
        <Stats />
        <Business />
        <Billing />
        <Service />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
