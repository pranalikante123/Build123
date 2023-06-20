<template>
  <div>
  </div>
  <div class="row" style="margin:10px">
      <div class="btn btn-primary"> Maldo Security Auditor Home  </div>
    </div>
  <div class="container mt-4">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <span></span>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Resource Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr>
          <th scope="row">1</th>
          <td>Security Dashboard</td>
          <td>
            <button
              @click="this.$router.push('/dashboard')"
              type="button"
              class="btn"
            >
              View
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Violation Tree</td>
          <td>
            <button @click="this.$router.push('/tree')" type="button" class="btn">
              View
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #fff;
  border-bottom-color: 0d6efd;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
label {
  color: #fff;
  font-size: 110%;
  text-align: center;
}
.thead-dark tr{
  font-size: 14px;
  background-color: #0d6efd;
}
.tbody {
  font-size: 14px;
}
</style>