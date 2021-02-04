import { isNull, omitBy } from "lodash";

export const omitAttr = <T extends object>(obj: T) => {
  if (isNull(obj)) {
    return {};
  }
  return omitBy<T>(
    obj,
    (value: any) => value === "" || value === undefined || value === null
  );
};
