"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //ข้อมูลตั้งต้นใช้เทรนโมเดล
    await queryInterface.bulkInsert("AvgMemberIncome", [
      //64
      {
        district_name: "วัดโบสถ์",
        amount: 519.22,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 1329.81,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 596.06,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 2353.53,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 1278.61,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 2251.04,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 2285.82,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 2227.7,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 2667.18,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },

      //65
      {
        district_name: "วัดโบสถ์",
        amount: 739.29,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 444.58,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 15.48,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 1178.03,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 3263.8,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 3695.96,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 2334.39,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 1046.96,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },

      //66
      {
        district_name: "วัดโบสถ์",
        amount: 1518.5,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 1112.56,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 436.9,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 1640.6,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 158.99,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 4954.67,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 2602.34,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 2962.11,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 1045.68,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },

      //67
      {
        district_name: "วัดโบสถ์",
        amount: 999.63,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 913.15,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 407.94,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 2176.83,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 1394.23,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 3237.86,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 1228.43,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 1911.4,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 2127.53,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AvgMemberIncome", null, {});
  },
};
