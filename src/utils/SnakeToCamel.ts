export const toCamel = (s: any) =>
  s.replace(/([-_][a-z])/gi, ($1: any) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );

const isArray = (a: any) => Array.isArray(a);

const isObject = (o: any) =>
  o === Object(o) && !isArray(o) && typeof o !== "function";

const snakeToCamel = (o: any) => {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k: any) => {
      n[toCamel(k)] = snakeToCamel(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map((i: any) => snakeToCamel(i));
  }
  return o;
};

export default snakeToCamel;
