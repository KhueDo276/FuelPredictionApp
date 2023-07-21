import connection from "../database/database.js";

export const fuelQuoteHistory = async (req, res) => {
  const [rows] = await connection.query(`SELECT * FROM fuelhistory`);
  res.json(rows);
};
// const result = fuelHistoryData.map((item) => {
//   const {
//     customer_id,
//     gallonRequested,
//     deliveryDate,
//     deliveryAddress,
//     price,
//   } = item;
//   const total = gallonRequested * price;

//   return {
//     customer_id,
//     gallonRequested,
//     deliveryDate,
//     deliveryAddress,
//     price,
//     total,
//   };
// });
// res.json(result);
// };
