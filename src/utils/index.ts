// Credits: https://zhuanlan.zhihu.com/p/30515967#:~:text=%E2%80%9C%E5%85%AC%E5%85%83%E5%B9%B4%E6%95%B0%E5%85%88%E5%87%8F%E4%B8%89,%E8%BE%9B%E3%80%81%E5%A3%AC%E3%80%81%E7%99%B8%EF%BC%89%E3%80%82

import dayjs from "dayjs";
import lunarFun from "lunar-fun";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

const heavenlyStems = [
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸",
];

const earthlyBranches = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];

export const getYearSexagenaryCycle = (date: string): string => {
  const lunar = lunarFun.gregorianToLunal(
    dayjs(date).year(),
    dayjs(date).month() + 1,
    dayjs(date).day(),
  );
  const heavenlyStem = heavenlyStems[((lunar[0] - 3) % 10) - 1];
  const earthlyBranch = earthlyBranches[((lunar[0] - 3) % 12) - 1];
  return heavenlyStem + earthlyBranch;
};

export const getDaySexagenaryCycle = (date: string): string => {
  // const lunar = lunarFun.gregorianToLunal(
  //   dayjs(date).year(),
  //   dayjs(date).month() + 1,
  //   dayjs(date).day(),
  // );
  const twoDigitYear = Number(dayjs(date).format("YY"));
  let base = 0;
  if (dayjs(date).year() >= 1900 && dayjs(date).year() <= 1999) {
    base = Math.trunc((twoDigitYear + 3) * 5 + 55 + (twoDigitYear - 1) / 4);
  } else if (dayjs(date).year() >= 2000 && dayjs(date).year() <= 2099) {
    base = Math.trunc((twoDigitYear + 7) * 5 + 15 + (twoDigitYear + 19) / 4);
  }
  while (base > 60) {
    base -= 60;
  }
  let dayOfYearWithBase = base + dayjs(date).dayOfYear();
  while (dayOfYearWithBase > 60) {
    dayOfYearWithBase -= 60;
  }
  let heavenlyIndex = dayOfYearWithBase;
  let earthlyIndex = dayOfYearWithBase;

  while (heavenlyIndex > 10) {
    heavenlyIndex -= 10;
  }
  while (earthlyIndex > 12) {
    earthlyIndex -= 12;
  }

  const heavenlyStem = heavenlyStems[heavenlyIndex - 1];
  const earthlyBranch = earthlyBranches[earthlyIndex - 1];

  return heavenlyStem + earthlyBranch;
};
