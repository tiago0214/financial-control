<script setup lang="ts">
import { Button, InputText, Password } from "primevue";
</script>

<template>
  <main class="grid grid-cols-2 h-full">
    <div class="absolute inset-0 -z-10 mesh-bg" />
    <div class="absolute inset-0 -z-10 grid-pattern opacity-30" />

    <div class="h-full">Left</div>

    <div class="h-full flex flex-col justify-center">
      <div class="w-96">
        <header>
          <h1>Nice to meet you!</h1>
          <span>Enter your email and password to log in.</span>
        </header>
        <div>
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <InputText type="email" id="email" name="email" />
          </div>
          

          <div >
            <label for="password">Password</label>
            <Password toggleMask id="password" name="password" />
          </div>
          <Button>Login</Button>
        </div>

      </div>
      <footer>Created footer*</footer>
    </div>
  </main>

  <!-- <Button> -->
  <!--   <RouterLink to="/" style="color: black; text-decoration: none" -->
  <!--     >Home</RouterLink -->
  <!--   > -->
  <!-- </Button> -->
</template>

<style lang="css" scoped>
</style>

