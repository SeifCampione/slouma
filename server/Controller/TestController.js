// const sequelize = require("../Config/dbConfig");
// const { QueryTypes, Sequelize, Op } = require("sequelize");
// const { AsyncParser } = require("@json2csv/node");
// const entet = require("../models/entet");
// const ligne = require("../models/ligne");

// exports.test = async (req, res) => {
//   // const startDate = new Date(req.params.date);
//   // const endDate = new Date(req.params.end);
//   // var search = {};
//   // for (const [key, value] of Object.entries(req.body)) {
//   //   if (value !== "a") search = { ...search, [[key]]: value };
//   // }
//   // console.log(search);
//   console.log("first");
//   try {
//     const resp = await entet.findAll({
//       where: {
//         DO_Date: { [Op.between]: [startDate, endDate] },
//         ...search,
//       },
//     });
//     res.status(200).send(resp);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ error });
//   }
// };
// exports.lignes = async (req, res) => {
//   try {
//     const resp = await ligne.findAll({
//       where: {
//         DO_Piece: req.params.id,
//       },
//     });
//     res.status(200).send(resp);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ error });
//   }
// };

// exports.download = async (req, res) => {
//   try {
//     const resp = await entet.findAll({
//       where: {
//         DO_Date: { [Op.between]: [req.params.date, req.params.end] },
//       },
//     });
//     const parser = new AsyncParser();
//     const data = resp.map((e) => {
//       return {
//         [["Id de commande"]]: e.DO_Piece.substring(4, e.DO_Piece.length),
//         [["Date"]]: e.DO_Date,
//         [["Adresse"]]: e.CT_Adresse,
//         [["Id du lieu"]]: undefined,
//         [["Nom du lieu"]]: e.CT_Ville,
//         [["Latitude"]]: e.CT_Statistique07,
//         [["Longitude"]]: e.CT_Statistique06,
//         [["Durée"]]: undefined,
//         [["CH de"]]: undefined,
//         [["CH à"]]: undefined,
//         [["Poids"]]: undefined,
//         [["Volume"]]: undefined,
//         [["Caractéristiques du véhicule"]]: undefined,
//         [["Compétences"]]: undefined,
//         [["Attribué au conducteur"]]: e.LIVREUR,
//       };
//     });
//     // const final = data.map((e) => {
//     //   return { ...e, DO_Piece: undefined };
//     // });
//     // Convert JSON data to CSV
//     const csv = await parser.parse(data).promise();

//     // Set response headers for CSV download
//     res.setHeader(
//       "Content-disposition",
//       `attachment; filename=Commandes_${req.params.date}_${req.params.end}.csv`
//     );
//     res.set("Content-Type", "text/csv");

//     // Send the CSV data as the response
//     res.send(csv);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ error });
//   }
// };

// // Compare table structures and copy data
// exports.copyDataFromView = async (req, res) => {
//   let numNewRowsCopied = 0;
//   try {
//     const viewExists = await sequelize.query(
//       `
//       SELECT COUNT(*) AS viewExists
//       FROM INFORMATION_SCHEMA.VIEWS
//       WHERE TABLE_NAME = 'LivComEntet';
//     `,
//       { type: Sequelize.QueryTypes.SELECT }
//     );

//     if (viewExists[0].viewExists === 1) {
//       const dataToCopy = await sequelize.query(
//         `
//         SELECT * FROM LivComEntet;
//       `,
//         { type: Sequelize.QueryTypes.SELECT }
//       );

//       const uniqueKeyColumn = "DO_Piece";
//       for (const row of dataToCopy) {
//         const uniqueKeyValue = row[uniqueKeyColumn];
//         const existingRow = await entet.findOne({
//           where: {
//             [uniqueKeyColumn]: uniqueKeyValue,
//           },
//         });

//         if (!existingRow) {
//           await entet.create({
//             ...row,
//           });
//           numNewRowsCopied++;
//         }
//       }
//       if (numNewRowsCopied > 0) {
//         console.log(`${numNewRowsCopied} new rows copied successfully.`);
//         res.status(200).send("synch");
//       } else {
//         res.status(400).send("No new rows to copy.");
//         console.log("No new rows to copy.");
//       }
//     } else {
//       console.log(`View LivComEntet does not exist. Data not copied.`);
//       res.status(400).send("error.");
//     }
//   } catch (error) {
//     console.error("Error copying data:", error);
//     res.status(400).send("error");
//   }
// };
// exports.copyDataLignes = async (req, res) => {
//   let numNewRowsCopied = 0;
//   try {
//     const viewExists = await sequelize.query(
//       `
//       SELECT COUNT(*) AS viewExists
//       FROM INFORMATION_SCHEMA.VIEWS
//       WHERE TABLE_NAME = 'LivComLignes';
//     `,
//       { type: Sequelize.QueryTypes.SELECT }
//     );

//     if (viewExists[0].viewExists === 1) {
//       const dataToCopy = await sequelize.query(
//         `
//         SELECT * FROM LivComLignes;
//       `,
//         { type: Sequelize.QueryTypes.SELECT }
//       );

//       const uniqueKeyColumn = "DO_Piece";
//       for (const row of dataToCopy) {
//         const uniqueKeyValue = row[uniqueKeyColumn];
//         const existingRow = await ligne.findOne({
//           where: {
//             [uniqueKeyColumn]: uniqueKeyValue,
//           },
//         });

//         if (!existingRow) {
//           await ligne.create({
//             ...row,
//           });
//           numNewRowsCopied++;
//         }
//       }
//       if (numNewRowsCopied > 0) {
//         console.log(`${numNewRowsCopied} new rows copied successfully.`);
//         res.status(200).send("synch");
//       } else {
//         res.status(400).send("No new rows to copy.");
//         console.log("No new rows to copy.");
//       }
//     } else {
//       console.log(`View LivComEntet does not exist. Data not copied.`);
//       res.status(400).send("error.");
//     }
//   } catch (error) {
//     console.error("Error copying data:", error);
//     res.status(400).send("error");
//   }
// };

// exports.updateDoc = async (req, res) => {
//   try {
//     const newUser = await entet.update(
//       {
//         ...req.body,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );

//     res.status(200).send("updated successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ error });
//   }
// };
