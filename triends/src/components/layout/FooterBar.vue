<template>
  <div
    class="footer-bg text-muted text-center text-lg-start w-100"
    style="background-color: #f2f0eb !important"
  >
    <!-- Grid container -->
    <div class="container p-4 pt-3">
      <!--Grid row-->
      <div class="row justify-content-between">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <!-- Facebook -->
          <a class="btn b-rad text-muted btn-floating m-1" href="#" role="button"
            ><i class="bi bi-facebook h4"></i
          ></a>

          <!-- Twitter -->
          <a class="btn b-rad text-muted btn-floating m-1" href="#" role="button"
            ><i class="bi bi-twitter h4"></i
          ></a>

          <!-- Instagram -->
          <a class="btn b-rad text-muted btn-floating m-1" href="#" role="button"
            ><i class="bi bi-instagram h4"></i
          ></a>
          <!-- Github -->
          <a class="btn b-rad text-muted btn-floating m-1" href="#" role="button"
            ><i class="bi bi-github h4"></i
          ></a>
          <ul class="ms-2 list-unstyled list-group list-group-horizontal small">
            <li class="mb-2 me-4"><a href="#" class="text-muted">개인정보처리방침</a></li>
            <li class="mb-2 me-4"><a href="#" class="text-muted">이용약관</a></li>
            <li class="mb-2 me-4"><a href="#" class="text-muted">이메일수집거부</a></li>
            <li class="mb-2 me-4"><a href="#" class="text-muted">고객센터</a></li>
            <li class="mb-2 me-4"><a href="#" class="text-muted">FAQ</a></li>
            <li class="mb-2">&copy; EnjoyTrip Corp.</li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-5 col-md-6 mb-4 mb-md-0 mt-auto">
          <h5 class="text-uppercase mt-2 mb-2">사이트맵</h5>

          <ul class="list-unstyled list-group list-group-horizontal">
            <li class="mb-2 me-4">
              <router-link :to="{ name: 'recommand' }" class="text-muted">여행지 추천</router-link>
            </li>
            <li class="mb-2 me-4">
              <router-link :to="{ name: 'plan' }" class="text-muted">플랜 짜기</router-link>
            </li>
            <li class="mb-2 me-4">
              <router-link :to="{ name: 'myplan' }" class="text-muted">마이 플랜</router-link>
            </li>
            <li class="mb-2 me-4">
              <router-link :to="{ name: 'review' }" class="text-muted">여행 후기</router-link>
            </li>
            <li class="mb-2 me-4">
              <router-link :to="{ name: 'mypage' }" class="text-muted">마이 페이지</router-link>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  </div>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style></style>
