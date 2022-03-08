import EventBus from "./EventBus";
import install from "./install";

const bus = { EventBus, install };

declare module "vue/types/vue" {
  interface Vue {
    readonly $bus: EventBus;
  }
}

declare module "vue/types/options" {
  // @ts-ignore
  interface ComponentOptions<V extends Vue> {
    // eslint-disable-line
    bus?: EventBus;
  }
}

export { EventBus };
export default bus;
