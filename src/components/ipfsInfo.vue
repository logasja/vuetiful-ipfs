<template>
  <div>
    <a class="ipfs-logo" v-on:click="ipfsInfo = true">
      <img src="../assets/img/ipfs-logo.png" />
    </a>
    <div class="modal" v-bind:class="{ 'is-active': ipfsInfo }">
      <div class="modal-background" v-on:click="ipfsInfo = false"></div>
      <div class="modal-content">
        <div class="box">
          <h1 class="title is-5">{{ status }}</h1>
          <h2 class="subtitle is-5">ID: {{ id }}</h2>
          <h2 class="subtitle is-5">Agent version: {{ agentVersion }}</h2>
          <p>Learn more about IPFS <a href="https://ipfs.io">here</a>!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IpfsInfo",
  data: function() {
    return {
      status: "Connecting to IPFS...",
      id: "",
      agentVersion: "",
      ipfsInfo: false
    };
  },
  mounted: function() {
    this.getIpfsNodeInfo();
  },
  methods: {
    getIpfsNodeInfo: async function() {
      try {
        // Await for ipfs node instance.
        const ipfsProvider = await (this as any).$ipfs;
        console.log(ipfsProvider);
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const { agentVersion, id } = await ipfsProvider.ipfs.id();
        this.agentVersion = agentVersion;
        this.id = id;
        // Set successful status text.
        this.status = "Connected to IPFS " + String.fromCodePoint(0x1f600);
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`;
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ipfs-logo {
  width: 30px;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
