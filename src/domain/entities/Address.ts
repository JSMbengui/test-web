export type ProvinceCode = "01" | "02" | "03" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18"

export class Address {
  value: string
  provinceCode: ProvinceCode

  constructor(value: string, provinceCode: ProvinceCode) {
    this.value = value;
    this.provinceCode = provinceCode
  }
}