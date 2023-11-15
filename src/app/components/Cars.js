import Brands from "@/app/components/Brands";
import CarSlider from "@/app/components/CarSlider";

const Cars = () => {
  return (
    <section className="h-screen flex" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};

export default Cars;
