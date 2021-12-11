import { getYearSexagenaryCycle, getDaySexagenaryCycle } from "./index";

describe("Get year's sexagenary cycle", () => {
  test("should return 辛丑", () => {
    expect(getYearSexagenaryCycle("2021-12-11")).toBe("辛丑");
  });
  test("should return 庚寅", () => {
    expect(getYearSexagenaryCycle("2010-04-12")).toBe("庚寅");
  });
  test("should return 壬寅", () => {
    expect(getYearSexagenaryCycle("2023-01-11")).toBe("壬寅");
  });
  test("should return 己未", () => {
    expect(getYearSexagenaryCycle("1979-12-11")).toBe("己未");
  });
});

describe("Get day's sexagenary cycle", () => {
  test("should return 癸巳", () => {
    expect(getDaySexagenaryCycle("2021-12-11")).toBe("癸巳");
  });
  test("should return 壬辰", () => {
    expect(getDaySexagenaryCycle("2010-04-12")).toBe("壬辰");
  });
  test("should return 丁亥", () => {
    expect(getDaySexagenaryCycle("1989-03-28")).toBe("丁亥");
  });
  test("should return 壬寅", () => {
    expect(getDaySexagenaryCycle("2021-04-24")).toBe("壬寅");
  });
  test("should return 丁酉", () => {
    expect(getDaySexagenaryCycle("2020-04-24")).toBe("丁酉");
  });
  test("should return 癸卯", () => {
    expect(getDaySexagenaryCycle("2021-12-21")).toBe("癸卯");
  });
  test("should return 戊子", () => {
    expect(getDaySexagenaryCycle("2057-09-28")).toBe("戊子");
  });
  test("should return 壬子", () => {
    expect(getDaySexagenaryCycle("2089-09-04")).toBe("壬子");
  });
  test("should return 丙寅", () => {
    expect(getDaySexagenaryCycle("2097-08-07")).toBe("丙寅");
  });
  test("should return 甲辰", () => {
    expect(getDaySexagenaryCycle("2051-03-20")).toBe("甲辰");
  });
  test("should return 丁未", () => {
    expect(getDaySexagenaryCycle("2083-02-03")).toBe("丁未");
  });
  test("should return 丁酉", () => {
    expect(getDaySexagenaryCycle("2084-03-19")).toBe("丁酉");
  });
});
