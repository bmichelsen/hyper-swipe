<template>
  <header>
    <div class="content">
      <p class="welcome">Welcome to the</p>
      <h1 class="logo">Hyper Swipe</h1>
        <p class="intro">
          These are some things we like and maybe you like them too? Swipe
          your way through the stack and sort the pile into things you like
          and dislike.
        </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CardHeader'
}
</script>

<style scoped>
header {
  align-items: center;
  color: #00ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 120px 0;
}

header .content {
  margin: 100px 0 0 0;
  text-align: center;
  width: 460px;
}

.welcome {
  font: 1rem Georgia, Times, 'Times New Roman', serif;
  letter-spacing: 10px;
  text-shadow: 0 22px 44px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

.logo {
  background-image: linear-gradient(92deg, #bd7bff, #3232fe);
  font: 800 3rem Nunito, sans-serif;
  letter-spacing: 1px;
  margin: 10px 0 0 0;
  text-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro {
  font: 300 1.125rem Nunito, sans-serif;
  margin: 10px 0 0 0;
}
</style>
