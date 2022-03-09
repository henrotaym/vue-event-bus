/** Prefixing given type keys. */
export type PrefixKeys<
  N extends string,
  P extends Prefixable,
  S extends string = ".",
  K extends keyof P = keyof P
> = {
  [Key in K as Key extends string | number | bigint | boolean
    ? `${N}${S}${Key}`
    : never]: P[Key];
};

/** Reprensenting Prefixable entity. */
export type Prefixable = Record<string, any>;
