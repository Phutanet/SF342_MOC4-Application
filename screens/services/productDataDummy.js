const productData = [
    ["15/04/2022","190 - 185",187.25,"บาท/กก."],
    ["16/04/2022","190 - 185",187.25,"บาท/กก."],
    ["17/04/2022","190 - 185",187.25,"บาท/กก."],
    ["18/04/2022","190 - 185",187.25,"บาท/กก."],
    ["19/04/2022","190 - 185",187.25,"บาท/กก."],
    ["20/04/2022","190 - 185",187.25,"บาท/กก."],
    ["21/04/2022","190 - 185",187.25,"บาท/กก."],
    ["22/04/2022","190 - 185",187.25,"บาท/กก."],
    ["23/04/2022","190 - 185",187.25,"บาท/กก."],
    ["24/04/2022","190 - 185",187.25,"บาท/กก."],
    ["25/04/2022","190 - 185",187.25,"บาท/กก."],
    ["26/04/2022","190 - 185",187.25,"บาท/กก."],
    ["27/04/2022","190 - 185",187.25,"บาท/กก."],
    ["28/04/2022","190 - 185",187.25,"บาท/กก."],
    ["29/04/2022","190 - 185",187.25,"บาท/กก."],
    ["30/04/2022","200 - 195",197.25,"บาท/กก."],
    ["01/05/2022","200 - 195",197.25,"บาท/กก."],
    ["02/05/2022","200 - 195",197.25,"บาท/กก."],
]

function getProductData(id, from_date, to_date) {
    return productData
}

const productList = {
  "P01": "หมูสามชั้น",
  "P02": "หมูเนื้อแดงล้วน",
  "P03": "หมูสันนอก",
  "P04": "หมูสันใน",
  "P05": "หมูบด",
  "P06": "ตับหมู",
  "P08": "อกไก่",
  "P09": "ปีกกลางไก่",
  "P10": "ปีกบนไก่",
  "P11": "ปีกเต็มไก่",
  "P12": "น่องไก่",
  "P13": "น่องติดสะโพก",
  "P14": "ขาไก่",
  "P15": "ไก่ตัว",
  "P16": "ไก่บ้านตัว",
  "P17": "เนื้อวัวสามชั้น",
  "P18": "สันนอกวัว",
  "P19": "สันในวัว",
  "P20": "เครื่องในต้ม",
}

function getProductList() {
    return productList
}
export {getProductData, getProductList}