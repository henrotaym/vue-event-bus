/** Prefixing given type keys. */
export type PrefixKeys<
  N extends string,
  P extends Prefixable,
  S extends string = "."
> = {
  [K in keyof P as K extends PrefixableKey ? `${N}${S}${K}` : never]: P[K];
};

/** Prefixable entity. */
export type Prefixable = Record<string, any>;

/** Prefixable key. */
export type PrefixableKey = string | number | bigint | boolean;
