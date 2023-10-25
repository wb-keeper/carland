import Brands from "@/app/components/Brands";
import CarSlider from "@/app/components/CarSlider";

const Cars = () => {
  return (
    <section className="h-screen flex items-center bg-yellow-50" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};

export default Cars;
