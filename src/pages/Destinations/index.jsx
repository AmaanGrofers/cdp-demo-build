function Destinations() {
  return (
    <div>
      {[...Array(10).keys()].map((item) => (
        <div key={item} className="p-10">
          Destinations
        </div>
      ))}
    </div>
  );
}

export default Destinations;
