const db = require("../models");
// const physical_model = db.PhysicalCapital;
// const natural_model = db.Naturalresourcecapital;
// const financial_model = db.Financialcapital;
// const social_model = db.Socialcapital;
const capital_model = db.HelpMember;

exports.getCaptial = async (req, res) => {
    try {
        // ✅ ดึงข้อมูลจาก model
        const capitalData = await capital_model.findAll();

        // ✅ นับจำนวนข้อมูลทั้งหมด
        const capitalAllCount = await capital_model.count();

        // ✅ จัดกลุ่มตามปีและคำนวณจำนวนและยอดเงินรวม
        const capitalByYear = capitalData.reduce((acc, item) => {
            // แปลง createdAt เป็นปี พ.ศ.
            const year = new Date(item.createdAt).getFullYear() + 543;

            // ถ้ายังไม่มีปีนี้ในผลลัพธ์ ให้กำหนดค่าเริ่มต้น
            if (!acc[year]) {
                acc[year] = {
                    "ทุนทางสังคม": { count: 0, amount: 0 },
                    "ทุนมนุษย์": { count: 0, amount: 0 },
                    "ทุนกายภาพ": { count: 0, amount: 0 },
                    "ทุนธรรมชาติ": { count: 0, amount: 0 },
                    "ทุนทางเศรษฐกิจ": { count: 0, amount: 0 }
                };
            }

            // ✅ นับจำนวนและยอดเงินของประเภททุนในปีนั้น
            const capitalType = item.capital;
            if (acc[year][capitalType] !== undefined) {
                acc[year][capitalType].count += 1;      // เพิ่มจำนวนในประเภทนั้น
                acc[year][capitalType].amount += item.amount; // รวมยอดเงินในประเภทนั้น
            }

            return acc;
        }, {});

        // ✅ รวมจำนวนเงินทั้งหมด
        const totalAmount = capitalData.reduce((acc, item) => acc + item.amount, 0);

        return {
            // capitalData,
            capitalAllCount,
            capitalByYear,
            totalAmount, // ✅ เพิ่มยอดรวมของ `amount` ทั้งหมด
        };
    } catch (err) {
        throw new Error(`Error fetching capital data: ${err}`);
    }
};






