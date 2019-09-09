/* eslint-disable */
<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Project Count</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in localsJson"
          :key="data.id"
          v-bind:class="[data.isActive ? 'activeClass' : null]"
        >
          <td>{{ data.id }}</td>
          <td>{{ data.username }}</td>
          <td>{{ data.project_count }}</td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="toggleHighlight()">New Users</button>
  </div>
</template>

<script>
import json from "../users.json";

export default {
  name: "established",
  data() {
    return {
      localsJson: json
    };
  },

  methods: {
    addUser: function() {
      for (let i = 0; i < this.localsJson.length; i++) {
        var data = this.localsJson[i];
        if (data.login_count > 0) {
          Object.assign(data, { isActive: false });
        } else {
          data;
        }
      }
      return this.localsJson;
    },

    toggleHighlight: function() {
      for (let i = 0; i < this.localsJson.length; i++) {
        var data = this.localsJson[i];
        if (data.login_count > 0) {
          if (data.isActive === false) {
            data.isActive = true;
          } else {
            data.isActive = false;
          }
        }
        this.$forceUpdate();
      }
    }
  },

  beforeMount() {
    this.addUser();
  },

  computed: {
    computedHighlight: function() {
      return this.localsJson;
    }
  }
};
</script>

<style scoped>
button {
  padding: 6px;
  margin: 15px;
  width: 30%;
}

table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 1px solid #7d82a8;
  border-bottom: 1px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
#app {
  margin: auto;
  width: 50%;
}
.activeClass {
  background: green;
}
</style>
