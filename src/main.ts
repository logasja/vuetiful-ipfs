import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/sass/main.scss";
import "@/assets/sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { getIpfs, providers } from "ipfs-provider";
const { httpClient, jsIpfs, windowIpfs } = providers;

import * as config from "@/config.json";
console.debug(config);

import _default from "vuex";

library.add(faLock, faTwitter);

const app = createApp(App);

app
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon);

const ipfs = getIpfs({
  // HTTP client library can be defined globally to keep code minimal
  // when httpClient provider is used multiple times
  loadHttpClientModule: () => require("ipfs-http-client"),
  // try window.ipfs (if present),
  // then http apis (if up),
  // and finally fallback to spawning embedded js-ipfs
  providers: [
    windowIpfs({
      permissions: { commands: ["files.add", "files.cat"] }
    }),
    httpClient({
      // try multiaddr of a local node
      apiAddress: "/ip4/127.0.0.1/tcp/5001",
      root: {
        location: {
          hostname: "localhost",
          port: "5001"
        }
      }
    }),
    jsIpfs({
      // js-ipfs package is used only once, here
      loadJsIpfsModule: () => import(/* webpackChunkName: "ipfs" */ "ipfs"),
      options: {
        config: {
          Bootstrap: [
            // Leave this blank for now. We'll need it later
          ]
        }
      } // pass config: https://github.com/ipfs/js-ipfs/blob/master/packages/ipfs/docs/MODULE.md#ipfscreateoptions
    })
  ]
});

app.config.globalProperties.$ipfs = ipfs;

app.mount("#app");
