<template>
  <div class="wrapper">
    <!-- Sidebar Menu -->
    <Sidebar />
    <!-- Sidebar Menu End -->
    <div class="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <!--  -->
          <section class="col-lg-12">
            <TopHeader />
          <!-- <Breadcrumb /> -->
            <nav class="bg-light pt-2 pb-2 rounded" aria-label="breadcrumb">
              <ol class="breadcrumb d-flex align-items-center mb-0 px-2">
                <router-link to="/dshboard" class="breadcrumb-item">首頁</router-link>
                <li class="breadcrumb-item active" aria-current="page">
                  會員管理
                </li>
              </ol>
            </nav>
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-3 fw-bold">
                <span
                  ><i class="bi bi-person-fill fs-3 text-secondary"></i
                ></span>
                會員管理
              </h2>
            </div>
            <!--  -->
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">搜尋會員</h2>
            </div>
            <!--  -->
            <div class="col-12 mb-4">
              <form class="fs-6">
                <!--  -->
                <div
                  class="
                    d-flex
                    align-items-center align-items-sm-start
                    border border-1
                    rounded-4
                    pt-4
                    pb-4 pb-lg-0
                    flex-column flex-lg-row
                  "
                >
                  <div class="col-auto">
                    <label for="userAppId" class="col-form-label me-2 ms-1"
                      >星行號</label
                    >
                  </div>
                  <div class="col-md-4 mb-4">
                    <input
                      type="password"
                      id="userAppId"
                      class="form-control"
                      aria-describedby="passwordHelpInline"
                      placeholder="1234567890"
                    />
                  </div>
                  <div class="col-auto">
                    <button
                      type="button"
                      class="btn btn-primary text-white mx-2"
                      data-bs-dismiss="modal"
                    >
                      搜尋
                    </button>
                  </div>
                </div>
                <!--  -->
              </form>
            </div>
            <!--  -->
            <!--  -->
          </section>
          <!--  -->
          <div class="col-lg-12">
            <!--  -->
            <div>
              <h2 class="text-primary mt-4 fs-5 fw-bold">會員列表</h2>
            </div>
            <!--  -->
            <div class="table-responsive">
              <table class="table table-bordered align-middle star-table">
                <thead class="table-primary">
                  <!-- <tr v-for="(item, index) in products" :key="index" ></tr> -->
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">星行號</th>
                    <th scope="col">暱稱</th>
                    <th scope="col" class="text-center">頭像</th>
                    <th scope="col" class="text-center">背景圖</th>
                    <th scope="col">帳號</th>
                    <th scope="col">實名認證</th>
                    <th scope="col">操作</th>
                    <th scope="col">註冊方式</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="(item, index) in members" :key="index">
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ item.userAppId }}</td>
                    <td>{{ item.nickname }}</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img v-if="item.avatar === '' " src="@/assets/images/img-user.svg" alt="img-404" class="rounded-circle img-user">
                        <img v-else :src="item.avatar" alt="img-user" class="rounded-circle img-user">
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img v-if="item.background === '' " class="img-user-bg" src="@/assets/images/img-login-bg.png" alt="img-404"/>
                        <img v-else class="img-user-bg" :src="item.background" alt="img-user-bg"/>
                      </div>
                    </td>
                    <td v-if="item.account === 'null'" >{{ nullText[item.account] }} </td>
                    <td v-else>{{ item.account }}</td>
                    <td>{{ statusText[item.realNameVerify] }} </td>
                    <td id="cash-state">
                      <!-- btn -->
                      <!-- member-control -->
                      <router-link
                        to="/member-control"
                        class="btn btn-info text-light"
                      >
                        <i class="bi bi-person-gear"></i> 管理
                      </router-link>
                    </td>
                      <!-- btn end  -->
                    <td>{{ item.loginType }} </td>
                  </tr>
                  <!--  -->
                  <!-- <tr>
                    <th scope="row">2</th>
                    <td>4543413131</td>
                    <td>Meow</td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          class="rounded-circle img-user"
                          src="http://placekitten.com/200/300"
                          alt="img-user"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <img
                          class="img-user-bg"
                          src="https://images.unsplash.com/photo-1587713714775-fa70364f6445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80"
                          alt="img-user-bg"
                        />
                      </div>
                    </td>
                    <td>123@gmail.com</td>
                    <td>未認證</td>
                    <td>
                      <router-link
                        to="/member-control"
                        class="btn btn-info text-light"
                      >
                        <i class="bi bi-person-gear"></i> 管理</router-link
                      >
                    </td>
                    <td>apple</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
const api = `${import.meta.env.VITE_PATH}/member`;
export default {
  name: "Member",
  components: {
    TopHeader,
    Sidebar,
  },
  data() {
    return {
      //products: null,
      members: [],
      //
      statusText: {
        "false": '未認證',
        "true": '已認證',
      },
      nullText: {
        "null": '無帳號'
      }
    };
  },
  methods: {
    getMembers() {
      const vm = this;
      this.$http.get(api).then((res) => {
        //vm.isLoading = false;
        this.members = res.data.data.userList;
        //console.log(res.data.data.userList);
      });
    },
  },
  mounted() {
    this.getMembers();
  },
};
</script>