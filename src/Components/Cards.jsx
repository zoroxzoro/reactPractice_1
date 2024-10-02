import PropTypes from "prop-types";
const Cards = ({ img }) => {
  return (
    <>
      <img className="card" src={img} alt="" />
    </>
  );
};

Cards.propTypes = {
  img: PropTypes.string,
};
export default Cards;
