'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SubdistrictCoordinates',[
      // เมืองพิษณุโลก
      {
        subdistrict: 'ในเมือง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.81921112857137,
        lon: 100.26377769029217,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังน้ำคู้',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.656283337379758,
        lon: 100.26963372189516,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วัดจัน',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.80284793799856,
        lon: 100.23595024150225,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วัดพริก',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.717038968245586,
        lon: 100.23532473027265,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าทอง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.78867013665404,
        lon: 100.1913081078712,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าโพธิ์',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.742758746056204,
        lon: 100.20066198724439,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'สมอแข',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.83179357394332,
        lon: 100.34475269430321,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ดอนทอง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.895677054497405,
        lon: 100.3993655968123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านป่า',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.93262956083749,
        lon: 100.36270952676037,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ปากโทก',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.898771183755432,
        lon: 100.25251841984226,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หัวรอ',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.875928527638052,
        lon: 100.27546383341777,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'จอมทอง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.90312219141687,
        lon: 100.21759968362744,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านกร่าง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.852062211577564,
        lon: 100.1878441696631,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านคลอง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.82740071163333,
        lon: 100.23925896080014,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'พลายชุมพล',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.850522508008165,
        lon: 100.22878325595715,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'มะขามสูง',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.927896832610916,
        lon: 100.25916080416111,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'อรัญญิก',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.805518450576752,
        lon: 100.29287439667462,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บึงพระ',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.741118683671765,
        lon: 100.27438834406652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ไผ่ขอดอน',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.902618134804428,
        lon: 100.17550111773052,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'งิ้วงาม',
        district: 'อำเภอเมืองพิษณุโลก',
        province: 'พิษณุโลก',
        lat: 16.671052548077157,
        lon: 100.23804804356334,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // ชาติตระการ
      {
        subdistrict: 'ป่าแดง',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.295404464723923,
        lon: 100.55258309580412,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ชาติตระการ',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.318738420814626,
        lon: 100.66986609204139,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'สวนเมี่ยง',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.20085152907016,
        lon: 100.53511256220919,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านดง',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.366356744111563,
        lon: 100.51468352025596,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ่อภาค',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.574961460002225,
        lon: 100.82813661920349,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าสะแก',
        district: 'ชาติตระการ',
        province: 'พิษณุโลก',
        lat: 17.235450729181135,
        lon: 100.66219120391963,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // นครไทย
      {
        subdistrict: 'นครไทย',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.115077503483423,
        lon: 100.83354727907684,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หนองกะท้าว',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.067566078150023,
        lon: 100.73366987056222,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านแยง',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 16.91225092502071,
        lon: 100.76066818323805,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'เนินเพิ่ม',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.032593242323596,
        lon: 100.94878799394388,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'นาบัว',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.226390965501263,
        lon: 100.8895476359665,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'นครชุม',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.269870820770965,
        lon: 100.81961358661933,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'น้ำกุ่ม',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.37859864973332,
        lon: 100.86895618503593,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ยางโกลน',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.183790890717685,
        lon: 100.94392305860303,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ่อโพธิ์',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.16392498730857,
        lon: 101.02275744575752,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านพร้าว',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 17.15342217215856,
        lon: 100.74292428404458,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ห้วยเฮี้ย',
        district: 'นครไทย',
        province: 'พิษณุโลก',
        lat: 16.896841810774678,
        lon: 100.9191591418868,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // เนินมะปราง
      {
        subdistrict: 'ชมพู',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.7333,
        lon: 100.8497,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านมุง',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.6947,
        lon: 100.8715,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ไทรย้อย',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.7036,
        lon: 100.8733,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังโพรง',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.6881,
        lon: 100.8424,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านน้อยซุ้มขี้เหล็ก',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.7235,
        lon: 100.8324,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'เนินมะปราง',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.7541,
        lon: 100.8703,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังยาง',
        district: 'เนินมะปราง',
        province: 'พิษณุโลก',
        lat: 16.7583,
        lon: 100.8300,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // บางกระทุ่ม
      {
        subdistrict: 'บางกระทุ่ม',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7462,
        lon: 100.4575,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านไร่',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7712,
        lon: 100.4891,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'โคกสลุด',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7355,
        lon: 100.4673,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'สนามคลี',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7302,
        lon: 100.5034,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าตาล',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.6893,
        lon: 100.4812,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ไผ่ล้อม',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.6726,
        lon: 100.4531,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'นครป่าหมาก',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7163,
        lon: 100.4422,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'เนินกุ่ม',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7503,
        lon: 100.4674,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วัดตายม',
        district: 'บางกระทุ่ม',
        province: 'พิษณุโลก',
        lat: 16.7654,
        lon: 100.4996,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // บางระกำ
      {
        subdistrict: 'บางระกำ',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.5106,
        lon: 100.4085,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ปลักแรด',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.5218,
        lon: 100.4300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'พันเสา',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.5404,
        lon: 100.4182,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังอิทก',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4983,
        lon: 100.4528,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บึงกอก',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4794,
        lon: 100.4822,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หนองกุลา',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4512,
        lon: 100.4711,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ชุมแสงสงคราม',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4465,
        lon: 100.4980,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'นิคมพัฒนา',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4596,
        lon: 100.4534,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ่อทอง',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4633,
        lon: 100.4812,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่านางงาม',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4301,
        lon: 100.4953,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'คุยม่วง',
        district: 'บางระกำ',
        province: 'พิษณุโลก',
        lat: 16.4528,
        lon: 100.4797,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // พรหมพิราม
      {
        subdistrict: 'พรหมพิราม',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5529,
        lon: 100.3067,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าช้าง',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5420,
        lon: 100.3332,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วงฆ้อง',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5535,
        lon: 100.3165,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'มะตูม',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5263,
        lon: 100.3241,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หอกลอง',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5317,
        lon: 100.2852,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ศรีภิรมย์',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5175,
        lon: 100.2798,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ตลุกเทียม',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5154,
        lon: 100.3137,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังวน',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5362,
        lon: 100.3384,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หนองแขม',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.5101,
        lon: 100.3213,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'มะต้อง',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.4886,
        lon: 100.3030,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ทับยายเชียง',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.4755,
        lon: 100.3069,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ดงประคำ',
        district: 'พรหมพิราม',
        province: 'พิษณุโลก',
        lat: 16.4741,
        lon: 100.3403,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // วังทอง
      {
        subdistrict: 'วังทอง',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8167,
        lon: 100.4333,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'พันชาลี',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8333,
        lon: 100.4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'แม่ระกา',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8000,
        lon: 100.4000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'บ้านกลาง',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8500,
        lon: 100.4167,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังพิกุล',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8167,
        lon: 100.4667,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'แก่งโสภา',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.7833,
        lon: 100.4833,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ท่าหมื่นราม',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.7667,
        lon: 100.4333,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'วังนกแอ่น',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8333,
        lon: 100.3833,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'หนองพระ',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8667,
        lon: 100.4333,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ชัยนาม',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8500,
        lon: 100.3833,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subdistrict: 'ดินทอง',
        district: 'วังทอง',
        province: 'พิษณุโลก',
        lat: 16.8000,
        lon: 100.3667,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SubdistrictCoordinates',null,{})

  }
};
