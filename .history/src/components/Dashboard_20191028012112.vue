<template>
  <section id="dashboard">
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          <a href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">Home Page</a><span>/</span><span>Dashboard</span>
        </h4>
      </mdb-card-body>
    </mdb-card>
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="money-bill-alt" far class="primary-color"/>
              <div class="data">
                <p></p>
                <h4>
                  <strong></strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color"/>
              <div class="data">
                <p></p>
                <h4>
                  <strong></strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-pie" class="light-blue lighten-1"/>
              <div class="data">
                <p></p>
                <h4>
                  <strong></strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2"/>
              <div class="data">
                <p></p>
                <h4>
                  <strong></strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <section>
      <mdb-row class="mt-5">
          <mdb-col md="12" class="mb-5">
              <mdb-card>
                  <mdb-card-body>
                    <div>
                      <mdb-tbl sm>
                        <mdb-tbl-head>
                          <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>name</th>
                          </tr>
                        </mdb-tbl-head>
                        <mdb-tbl-body  class="post" v-for="post in posts" :key="post.id">
                          <tr>
                            <th>{{ post.id }}</th>
                            <td>{{post.username}}</td>
                            <td>{{post.name}}</td>
                          </tr>
                        </mdb-tbl-body>
                      </mdb-tbl>
                    </div>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import axios from 'axios'
import { mdbTblHead, mdbTblBody, mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
export default {
  name: 'Dashboard',
  components: {
    mdbTblHead,
    mdbTblBody,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbTbl,
    mdbBarChart,
    mdbPieChart,
    mdbLineChart,
    mdbRadarChart,
    mdbDoughnutChart,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    var self = this
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        self.posts = res.data
        console.log('Data: ', res.data)
      })
      .catch(function (error) {
        console.log('Error: ', error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
