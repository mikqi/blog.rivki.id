<template>
  <label class="dayNight">
    <input ref="toggle" type="checkbox" @change="toggleTheme" />
    <div />
  </label>
</template>

<script>
export default {
  name: 'ToggleTheme',
  async mounted() {
    await this.$nextTick()
    this.$refs.toggle.checked = this.$colorMode.value === 'dark'
  },
  methods: {
    toggleTheme(e) {
      const checked = e.target.checked
      if (checked) {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>

<style scoped>
.dayNight {
  cursor: pointer;
  z-index: 1;
}
.dayNight input {
  display: none;
}
.dayNight input + div {
  display: inline-block;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  box-shadow: inset 14px -14px 0 0 #3f51b5;
  -webkit-transform: scale(0.5) rotate(-2deg);
  transform: scale(0.5) rotate(-2deg);
  -webkit-transition: box-shadow 0.5s ease 0s, -webkit-transform 0.4s ease 0.1s;
  transition: box-shadow 0.5s ease 0s, -webkit-transform 0.4s ease 0.1s;
  transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
  transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s,
    -webkit-transform 0.4s ease 0.1s;
}
.dayNight input + div::before {
  content: '';
  width: inherit;
  height: inherit;
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.dayNight input + div::after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: -4px 0 0 -4px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 -23px 0 #fee893, 0 23px 0 #fee893, 23px 0 0 #fee893,
    -23px 0 0 #fee893, 15px 15px 0 #fee893, -15px 15px 0 #fee893,
    15px -15px 0 #fee893, -15px -15px 0 #fee893;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.dayNight input:checked + div {
  box-shadow: inset 32px -32px 0 0 #fee893;
  -webkit-transform: scale(0.25) rotate(0deg);
  transform: scale(0.25) rotate(0deg);
  -webkit-transition: box-shadow 0.2s ease 0s, -webkit-transform 0.3s ease 0.1s;
  transition: box-shadow 0.2s ease 0s, -webkit-transform 0.3s ease 0.1s;
  transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
  transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s,
    -webkit-transform 0.3s ease 0.1s;
}
.dayNight input:checked + div::before {
  background: #fee893;
  -webkit-transition: background 0.3s ease 0.1s;
  transition: background 0.3s ease 0.1s;
}
.dayNight input:checked + div::after {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: -webkit-transform 0.5s ease 0.15s;
  transition: -webkit-transform 0.5s ease 0.15s;
  transition: transform 0.5s ease 0.15s;
  transition: transform 0.5s ease 0.15s, -webkit-transform 0.5s ease 0.15s;
}
</style>
