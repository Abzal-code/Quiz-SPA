<template>
  <div class="about">
    <Art/>
    <Work/>
    <Cause/>
    <Footer/>
  </div>
</template>

<script>
import Work from "@/components/about/Work";
import Art from "@/components/about/Art";
import Cause from "@/components/about/Cause";
import Footer from "@/components/about/Footer";

export default {
  name: "About",
  components: {
    Art,
    Work,
    Cause,
    Footer
  },
};
</script>

<style>
* {
  font-family: Exo2;
}
body {
  background-color: #E8E8E8;
}
</style>
