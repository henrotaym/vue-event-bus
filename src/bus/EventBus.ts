import Vue from "vue";
import {
  EventBusEventName,
  EventBusEvents,
  EventBusListener,
  EventBusListenerParams,
} from "../types";

class EventBus<E = EventBusEvents> {
  private bus: Vue;

  constructor() {
    this.bus = new Vue();
    Vue.prototype.$bus = this.bus;
  }

  $emit<K extends EventBusEventName<E>>(
    event: K,
    params: EventBusListenerParams<K, E>
  ): void {
    this.bus.$emit(event, params);
  }

  $on<K extends EventBusEventName<E>>(
    event: K,
    listener: EventBusListener<K, E>
  ): void {
    this.bus.$on(event, listener);
  }

  $off<K extends EventBusEventName<E>>(
    event: K,
    listener?: EventBusListener<K, E>
  ): void {
    this.bus.$off(event, listener);
  }
}

export default EventBus;
