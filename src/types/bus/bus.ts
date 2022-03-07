/** Event bus event name. */
export type EventBusEventName<E = EventBusEvents> = keyof E extends string
  ? keyof E
  : never;

/** Event bus listener. */
export type EventBusListener<
  K extends EventBusEventName<E>,
  E = EventBusEvents
> = (params: EventBusListenerParams<K, E>) => void;

/** Event bus listener params */
export type EventBusListenerParams<
  K extends EventBusEventName<E>,
  E = EventBusEvents
> = E[K];

/** Event bus event names with related params. */
export type EventBusEvents = Record<string, Record<string, any>>;
