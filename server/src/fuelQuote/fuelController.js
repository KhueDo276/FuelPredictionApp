import fuelHistoryData from "../data/fuelQuoteHistory.js";

export const fuelQuoteHistory = async (req, res) => {
  //const data = req.body;
  const result = fuelHistoryData.map((item) => {
    const {
      customer_id,
      gallonRequested,
      deliveryDate,
      deliveryAddress,
      price,
    } = item;
    const total = gallonRequested * price;

    return {
      customer_id,
      gallonRequested,
      deliveryDate,
      deliveryAddress,
      price,
      total,
    };
  });
  res.json(result);
};
