const Car = ({ brand, tyre }) => {
  return (
    <div>
      <h1>I a nice Car and my brand is {brand ? brand : "the latest"}</h1>
      <h4 className="text-[10px]">I need {tyre} tyres to run effectively </h4>
      <h6 className="text-[7px]">
        I need {tyre ? tyre : 4} tyres to run effectively{" "}
      </h6>
    </div>
  );
};

export default Car;
