<template>
 <div class="flexible-content">
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="./assets/logo-mdb-vue-small.png"/></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'"><mdb-icon icon="chart-pie" class="mr-3"/>Dashboard</mdb-list-group-item>
        </router-link>
        <router-link to="/404" @click.native="activeItem = 5">
          <mdb-list-group-item :action="true" :class="activeItem === 5 && 'active'"><mdb-icon icon="exclamation" class="mr-3"/>404</mdb-list-group-item>
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{new Date().getFullYear()}} Copyright: <a> Hector </a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbIcon, mdbListGroup, mdbListGroupItem, mdbCardBody, mdbFooter, waves } from 'mdbvue'
export default {
  name: 'App'
components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbCardBody,
    'ftr': mdbFooter,
    Dashboard
  },
  data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 150px;
}
</style>
