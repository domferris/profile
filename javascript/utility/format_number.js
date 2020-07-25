// properly formats integers with commas
const formatNumber = (integer) => {
  return integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatNumber;
