const isArray = (a: any) => Array.isArray(a);

const isObject = (o: any) =>
  o === Object(o) && !isArray(o) && typeof o !== "function";

const snakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const camelToSnake = (o: any) => {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k: any) => {
      n[snakeCase(k)] = camelToSnake(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map((i: any) => camelToSnake(i));
  }
  return o;
};

export { camelToSnake, snakeCase };
