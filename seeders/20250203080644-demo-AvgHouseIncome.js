'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AvgHouseIncome",[
      //64
      {
        district_name: "วัดโบสถ์",
        amount: 1545.63,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 1082.34,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 1658.73,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 3301.14,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 2411.99,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 3924.51,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 3274.15,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 3981.18,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 4211.06,
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },

       //65
       {
        district_name: "วัดโบสถ์",
        amount: 15129.25,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 4614.71,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 219.25,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 18989.91,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 23955.04,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 13921.88,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 6585.96,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 1448.71,
        createdAt: "2022-01-01T00:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00.000Z",
      },

       //66
       {
        district_name: "วัดโบสถ์",
        amount: 8561.94,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 9043.59,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 1567.23,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 4909.81,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 1553.95,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 30182.03,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 12108.06,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 13299.02,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 6564.6,
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },

      //67
      {
        district_name: "วัดโบสถ์",
        amount: 5214.37,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "ชาติตระการ",
        amount: 5895.89,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "อำเภอเมืองพิษณุโลก",
        amount: 1695.73,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "พรหมพิราม",
        amount: 4303.01,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "นครไทย",
        amount: 10623.89,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางระกำ",
        amount: 20721.84,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "บางกระทุ่ม",
        amount: 5385.29,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "วังทอง",
        amount: 6059,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        district_name: "เนินมะปราง",
        amount: 3611.72,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AvgHouseIncome",null,{})
  }
};
