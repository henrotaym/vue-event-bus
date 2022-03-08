import Vue from "vue";
import EventBus from "./EventBus";
import install from "./install";

const bus = { EventBus, install };

declare module "vue/types/vue" {
  interface Vue {
    readonly $bus: EventBus;
  }
}

declare module "vue/types/options" {
  // eslint-disable-next-line
  interface ComponentOptions<V extends Vue> {
    bus?: EventBus;
  }
}

export { EventBus };
export default bus;
