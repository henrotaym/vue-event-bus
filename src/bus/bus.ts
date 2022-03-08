import EventBus from "./EventBus";
import install from "./install";

const bus = { EventBus, install };

declare module "vue/types/vue" {
  interface VueConstructor {
    $bus: EventBus;
  }
}

export { EventBus };
export default bus;
