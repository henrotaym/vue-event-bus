import { PluginFunction } from "vue";
import EventBus from "./EventBus";

const install: PluginFunction<undefined> = (Vue) => {
  Vue.mixin({
    beforeCreate() {
      const options: any = this.$options;
      if (!(options.bus instanceof EventBus)) return;
      /** Setting $bus on instance. */
      const bus = options.bus as EventBus;
      Object.defineProperty(this, "$bus", {
        /** Getting bus dynamically. */
        get() {
          return bus;
        },
      });
    },
  });
};

export default install;
