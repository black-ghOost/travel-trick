export default function PlaceItem({ location, isActive }) {
    const { name, image } = location;

  return (
    <div className={`bg-transparent ${isActive ? 'active' : 'not-active'}`}>
      <img variant="top" className="img-fluid" src={image} alt="places" />
      <button className="bg-transparent booking">{name}</button>
    </div>
  );
}